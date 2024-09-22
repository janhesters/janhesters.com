/* eslint-disable unicorn/filename-case */
import { Link, useLoaderData } from '@remix-run/react';
import type { MetaFunction } from '@vercel/remix';

import { buttonVariants } from '~/components/button';
import { getAllPostsMetaSortedByDate } from '~/features/blog/blog-helpers.server';
import { getSocialsMeta } from '~/lib/misc';
import { cn } from '~/lib/utils';

export const meta: MetaFunction = () =>
  getSocialsMeta({
    title: "Jan Hesters' Blog",
    description:
      'Read aricles, tutorials and guides for JavaScript, TypeScript, React, Testing, Career, and more.',
    imageUrl: 'https://janhesters.com/og-image.png',
    url: 'https://janhesters.com/blog',
  });

export function loader() {
  return getAllPostsMetaSortedByDate().filter(
    meta => !meta.isArchived && !meta.isDraft,
  );
}

export default function BlogIndex() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <main className="px-2 py-4">
      <h2 className="sr-only">Blog</h2>

      <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        {loaderData.map((post, index) => (
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
                  className="h-full w-full rounded-2xl object-cover"
                  loading={index >= 6 ? 'lazy' : undefined}
                  src={post.thumbnailUrl}
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

      <div className="mt-4 flex w-full justify-center">
        <Link className={buttonVariants({ variant: 'ghost' })} to="/archive">
          Archive
        </Link>
      </div>
    </main>
  );
}
