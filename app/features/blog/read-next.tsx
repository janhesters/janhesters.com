/* eslint-disable unicorn/no-null */
import type { BlogPostMeta } from './blog-helpers.server';
import { BlogPostCardWithoutDescription } from './blog-post-card';

interface ReadNextProps {
  posts: BlogPostMeta[];
}

export function ReadNext({ posts }: ReadNextProps) {
  if (posts.every(post => post.isDraft)) return null;

  return (
    <section className="mt-10">
      <h2 className="mb-3 mt-0 text-2xl font-semibold leading-7">
        Stay in flow and keep learning:
      </h2>

      <ul className="mb-0 grid list-none grid-cols-1 gap-6 pl-0 sm:grid-cols-2">
        {posts.slice(0, 2).map(post =>
          post.isDraft ? null : (
            <li className="mb-0 mt-0 pl-0" key={post.slug}>
              <BlogPostCardWithoutDescription {...post} />
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
