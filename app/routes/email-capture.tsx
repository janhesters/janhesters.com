/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Loader2, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { data as json, useFetcher } from 'react-router';
import { z } from 'zod';

import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormProvider,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import type { SubscriptionStatus } from '~/features/blog/beehiiv.server';
import { subscribeToBlog } from '~/features/blog/beehiiv.server';

import type { Route } from './+types/email-capture';

export const emailCaptureClientSchema = z.object({
  email: z.string().email(),
});

export async function action({ request }: Route.ActionArgs) {
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

  const state: 'idle' | 'error' | SubscriptionStatus =
    fetcher?.data && 'errors' in fetcher.data
      ? 'error'
      : fetcher?.data && 'subscriptionStatus' in fetcher.data
        ? fetcher.data.subscriptionStatus
        : 'idle';
  const successReference = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (state === 'active' || state === 'validating') {
      successReference.current?.focus();
    }
  }, [state]);

  const form = useForm<z.infer<typeof emailCaptureClientSchema>>({
    resolver: zodResolver(emailCaptureClientSchema),
    defaultValues: { email: '' },
    // @ts-expect-error JsonifyObject causes trouble here.
    errors: fetcher.data?.errors,
  });

  const onSubmit = form.handleSubmit(data => {
    void fetcher.submit(data, { action: '/email-capture', method: 'post' });
  });

  return (
    <Card>
      {state === 'active' || state === 'validating' || state === 'unknown' ? (
        <>
          <CardHeader>
            <CardTitle
              className="flex items-center"
              ref={successReference}
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
