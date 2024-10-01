import { Link, useLoaderData } from '@remix-run/react';

import { buttonVariants } from '~/components/button';
import { getAllPostsMetaSortedByDate } from '~/features/blog/blog-helpers.server';
import { EmailCaptureComponent } from '~/features/email-capture/email-capture-component';
import { HeroComponent } from '~/features/landing/hero-component';
import { PlatformsComponent } from '~/features/landing/platforms-component';
import { cn } from '~/lib/utils';

export function loader() {
  return getAllPostsMetaSortedByDate()
    .filter(meta => !meta.isArchived && !meta.isDraft)
    .slice(0, 3);
}

export default function Index() {
  const blogPosts = useLoaderData<typeof loader>();

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <HeroComponent />

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Blog posts */}
        <ul className="-mx-2 -my-2 grid grid-cols-1 gap-4">
          {blogPosts.map(post => (
            <li key={post.slug}>
              <Link
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'flex h-auto flex-col items-start whitespace-normal rounded-2xl p-2',
                )}
                to={`/blog/${post.slug}`}
              >
                <div className="mb-2 aspect-video w-full">
                  <img
                    alt={post.title}
                    src={post.thumbnailUrl}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>

                <h3 className="mb-1 text-xl font-semibold text-slate-800 dark:text-slate-100">
                  {post.title}
                </h3>

                <p className="whitespace-pre-wrap text-slate-600 dark:text-slate-300">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="space-y-10 md:pl-12 lg:pl-16 xl:pl-24">
          <EmailCaptureComponent />

          <PlatformsComponent />
        </div>
      </div>
    </main>
  );
}
