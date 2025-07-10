import { getAllPostsMetaSortedByDate } from '~/features/blog/blog-helpers.server';
import { BlogPostCard } from '~/features/blog/blog-post-card';
import { HeroComponent } from '~/features/landing/hero-component';
import { PlatformsComponent } from '~/features/landing/platforms-component';

import type { Route } from './+types/_index';
import { EmailCapture } from './email-capture';

export async function loader() {
  const posts = await getAllPostsMetaSortedByDate();
  return posts.filter(meta => !meta.isArchived && !meta.isDraft).slice(0, 3);
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const blogPosts = loaderData;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <HeroComponent />

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Blog posts */}
        <ul className="-mx-2 -my-2 grid grid-cols-1 gap-4">
          {blogPosts.map(post => (
            <li key={post.slug}>
              <BlogPostCard {...post} />
            </li>
          ))}
        </ul>

        <div className="space-y-10 md:pl-12 lg:pl-16 xl:pl-24">
          <EmailCapture />

          <PlatformsComponent />
        </div>
      </div>
    </main>
  );
}
