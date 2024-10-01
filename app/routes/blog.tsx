import { Outlet } from '@remix-run/react';

import { EmailCaptureComponent } from '~/features/email-capture/email-capture-component';

export default function Blog() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <article className="prose dark:prose-invert prose-code:before:hidden prose-p:before:hidden prose-p:after:hidden prose-code:after:hidden mx-auto max-w-2xl">
        <Outlet />
      </article>

      <div className="mx-auto mt-10 max-w-2xl">
        <EmailCaptureComponent />
      </div>
    </main>
  );
}
