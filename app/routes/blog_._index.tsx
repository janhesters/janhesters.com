/* eslint-disable unicorn/filename-case */
import { Link, useLoaderData } from '@remix-run/react';
import type { MetaFunction } from '@vercel/remix';

import { buttonVariants } from '~/components/button';
import { getAllPostsMetaSortedByDate } from '~/features/blog/blog-helpers.server';
import { BlogPostCard } from '~/features/blog/blog-post-card';
import { getSocialsMeta } from '~/lib/misc';

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
            <BlogPostCard {...post} loadLazy={index >= 6} />
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
