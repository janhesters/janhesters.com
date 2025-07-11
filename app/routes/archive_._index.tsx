import { Link } from 'react-router';

import { buttonVariants } from '~/components/ui/button';
import { getAllPostsMetaSortedByDate } from '~/features/blog/blog-helpers.server';
import { getSocialsMeta } from '~/lib/misc';
import { cn } from '~/lib/utils';

import type { Route } from './+types/archive_._index';

export const meta: Route.MetaFunction = () =>
  getSocialsMeta({
    title: "Jan Hesters' Blog's Archive",
    description: "Read and enjoy Jan Hesters's old posts.",
    imageUrl: 'https://janhesters.com/og-image.png',
    url: 'https://janhesters.com/archive',
  });

export async function loader() {
  const posts = await getAllPostsMetaSortedByDate();
  return posts.filter(meta => meta.isArchived && !meta.isDraft);
}

export default function ArchiveIndex({ loaderData }: Route.ComponentProps) {
  return (
    <main className="px-2 py-4">
      <h2 className="sr-only">Archive</h2>

      <p className="text-muted-foreground mx-auto mb-4 max-w-5xl">
        You&apos;ve found my archive. Enjoy reading my old posts.
      </p>

      <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        {loaderData.map(post => (
          <li key={post.slug}>
            <Link
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'flex h-auto flex-col items-start rounded-2xl p-2 whitespace-normal',
              )}
              to={`/blog/${post.slug}`}
            >
              <h3 className="mb-1 text-xl font-semibold text-slate-800 dark:text-slate-100">
                {post.title}
              </h3>

              <time
                className="mb-2 text-sm text-slate-500 dark:text-slate-400"
                dateTime={post.datePublished}
              >
                {new Date(post.datePublished).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>

              <p className="whitespace-pre-wrap text-slate-600 dark:text-slate-300">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
