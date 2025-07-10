/* eslint-disable unicorn/no-null */
import type { BlogPostMeta } from './blog-helpers.server';
import { BlogPostCardWithoutDescription } from './blog-post-card';

type ReadNextProps = {
  posts: BlogPostMeta[];
};

export function ReadNext({ posts }: ReadNextProps) {
  if (posts.every(post => post.isDraft)) return null;

  return (
    <section className="mt-10">
      <h2 className="mt-0 mb-3 text-2xl leading-7 font-semibold">
        Stay in flow and keep learning:
      </h2>

      <ul className="mb-0 grid list-none grid-cols-1 gap-6 pl-0 sm:grid-cols-2">
        {posts.slice(0, 2).map(post =>
          post.isDraft ? null : (
            <li className="mt-0 mb-0 pl-0" key={post.slug}>
              <BlogPostCardWithoutDescription {...post} />
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
