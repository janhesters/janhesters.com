import { Outlet } from '@remix-run/react';
import { useEffect, useState } from 'react';

import { ScrollToTopButton } from '~/features/blog/scroll-to-top-button';
import { cn } from '~/lib/utils';

import { EmailCapture } from './email-capture';

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300 && !isVisible) {
        setIsVisible(true);
      } else if (currentScrollY <= 300 && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mx-auto flex max-w-4xl flex-col">
        <article className="prose mx-auto w-full max-w-2xl dark:prose-invert prose-p:before:hidden prose-p:after:hidden prose-code:before:hidden prose-code:after:hidden">
          <Outlet />
        </article>

        <div
          className={cn(
            'sticky bottom-4 self-end transition-all duration-300 motion-reduce:transition-none',
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-4 opacity-0 motion-reduce:pointer-events-auto motion-reduce:translate-y-0 motion-reduce:opacity-100',
          )}
        >
          <ScrollToTopButton />
        </div>
      </div>

      <div className="mx-auto mt-1 max-w-2xl">
        <EmailCapture />
      </div>
    </main>
  );
}
