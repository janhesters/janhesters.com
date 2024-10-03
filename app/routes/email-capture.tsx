import { zodResolver } from '@hookform/resolvers/zod';
import type { ActionFunctionArgs } from '@remix-run/node';
import { useFetcher } from '@remix-run/react';
import { json } from '@vercel/remix';
import { Check, Loader2, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '~/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormProvider,
} from '~/components/form';
import { Input } from '~/components/input';
import {
  subscribeToBlog,
  SubscriptionStatus,
} from '~/features/blog/beehiiv.server';

export const emailCaptureClientSchema = z.object({
  email: z.string().email(),
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const result = emailCaptureClientSchema.safeParse(data);

  if (!result.success) {
    return json(
      {
        errors: { email: { message: result.error.message, type: 'manual' } },
      },
      { status: 400 },
    );
  }

  const { email } = result.data;

  const subscriptionStatus = await subscribeToBlog(email);

  return json({ subscriptionStatus }, { status: 200 });
}

export function EmailCapture() {
  const fetcher = useFetcher<typeof action>();

  const isSubscribing = fetcher.state === 'submitting';

  // @ts-expect-error JsonifyObject causes trouble here.
  const state: 'idle' | 'error' | SubscriptionStatus = fetcher?.data?.error
    ? 'error'
    : // @ts-expect-error JsonifyObject causes trouble here.
      fetcher?.data?.subscriptionStatus || 'idle';
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (state === 'active' || state === 'validating') {
      successRef.current?.focus();
    }
  }, [state]);

  const form = useForm<z.infer<typeof emailCaptureClientSchema>>({
    resolver: zodResolver(emailCaptureClientSchema),
    defaultValues: { email: '' },
    // @ts-expect-error JsonifyObject causes trouble here.
    errors: fetcher.data?.errors,
  });

  const onSubmit = form.handleSubmit(data => {
    fetcher.submit(data, { action: '/email-capture', method: 'post' });
  });

  return (
    <Card>
      {state === 'active' || state === 'validating' || state === 'unknown' ? (
        <>
          <CardHeader>
            <CardTitle
              className="flex items-center"
              ref={successRef}
              tabIndex={-1}
            >
              <Check aria-hidden="true" className="size-6" />

              <span className="ml-3">
                {state === 'active'
                  ? "You're already subscribed!"
                  : state === 'unknown'
                    ? 'Oops! Something went wrong.'
                    : 'Thank you for subscribing!'}
              </span>
            </CardTitle>

            <CardDescription>
              {state === 'active'
                ? 'Your already receive the latest content. Did you mean to sign up with a different email?'
                : state === 'unknown'
                  ? 'Something is wrong with the status of your email. Please try again.'
                  : "Please check your email to confirm your subscription. You'll receive an email when I publish new content."}
            </CardDescription>
          </CardHeader>
        </>
      ) : (
        <>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail aria-hidden="true" className="size-6" />

              <span className="ml-3">Learn senior fullstack secrets</span>
            </CardTitle>

            <CardDescription>
              Subscribe to my newsletter for weekly updates on new videos,
              articles, and courses. You&apos;ll also get{' '}
              <b>exclusive bonus content</b> and discounts.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <FormProvider {...form}>
              <fetcher.Form
                action="/email-capture"
                method="post"
                onSubmit={onSubmit}
              >
                <fieldset className="flex gap-x-2" disabled={isSubscribing}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            aria-label="Email"
                            placeholder="Your email ..."
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" disabled={isSubscribing}>
                    {isSubscribing ? (
                      <>
                        <Loader2
                          aria-hidden="true"
                          className="mr-2 size-4 animate-spin"
                        />
                        Subscribing...
                      </>
                    ) : (
                      "I'm Ready"
                    )}
                  </Button>
                </fieldset>
              </fetcher.Form>
            </FormProvider>
          </CardContent>
        </>
      )}
    </Card>
  );
}
