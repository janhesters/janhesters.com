import { Outlet } from '@remix-run/react';

import { EmailCapture } from './email-capture';

export default function Blog() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <article className="prose mx-auto max-w-2xl dark:prose-invert prose-p:before:hidden prose-p:after:hidden prose-code:before:hidden prose-code:after:hidden">
        <Outlet />
      </article>

      <div className="mx-auto mt-10 max-w-2xl">
        <EmailCapture />
      </div>
    </main>
  );
}
