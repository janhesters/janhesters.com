import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@remix-run/react';
import { Mail } from 'lucide-react';
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
  FormLabel,
  FormMessage,
  FormProvider,
} from '~/components/form';
import { Input } from '~/components/input';

import { emailCaptureClientSchema } from './email-capture-client-schema';

export function EmailCaptureComponent() {
  const form = useForm<z.infer<typeof emailCaptureClientSchema>>({
    resolver: zodResolver(emailCaptureClientSchema),
    defaultValues: { email: '' },
    // // @ts-expect-error JsonifyObject causes trouble here.
    // errors: actionData?.errors,
  });

  const onSubmit = form.handleSubmit(() => {
    alert(
      'The newsletter is coming soon! In the meantime, please follow me on X: @janhesters!',
    );
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Mail className="size-6" />

          <span className="ml-3">Learn senior fullstack secrets</span>
        </CardTitle>

        <CardDescription>
          Subscribe to my newsletter for weekly updates on new videos, articles,
          and courses. You&apos;ll also get <b>exclusive bonus content</b> and
          discounts.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <FormProvider {...form}>
          <Form method="post" onSubmit={onSubmit}>
            <fieldset className="flex gap-x-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full space-y-0">
                    <FormLabel className="sr-only">Email</FormLabel>

                    <FormControl>
                      <Input placeholder="Your email ..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">
                {/* {isLoggingInViaEmail ? (
                  <>
                    <Loader2Icon className="mr-2 size-4 animate-spin" />
                    {t('authenticating')}
                  </>
                ) : ( */}
                I&apos;m Ready
                {/* )} */}
              </Button>
            </fieldset>
          </Form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
