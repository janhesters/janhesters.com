import { Link } from 'react-router';

import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

import type { BlogPostMeta } from './blog-helpers.server';

const linkClassName = cn(
  buttonVariants({ variant: 'ghost' }),
  'flex h-auto flex-col items-start whitespace-normal rounded-2xl p-2',
);
const imageContainerClassName = 'mb-2 aspect-video w-full';
const imageClassName = 'h-full w-full rounded-2xl object-cover';
const titleClassName = 'mb-1 text-xl font-semibold text-foreground';

export function BlogPostCardWithoutDescription(post: BlogPostMeta) {
  return (
    <Link
      className={cn(linkClassName, 'no-underline')}
      to={`/blog/${post.slug}`}
    >
      <div className={imageContainerClassName}>
        <img
          alt={post.title}
          className={cn(imageClassName, 'mt-0 mb-0')}
          loading="lazy"
          src={post.thumbnailUrl}
        />
      </div>

      <h3 className={cn(titleClassName, 'mt-0 font-sans')}>{post.title}</h3>
    </Link>
  );
}

export function BlogPostCard({
  loadLazy = false,
  ...post
}: BlogPostMeta & { loadLazy?: boolean }) {
  return (
    <Link className={linkClassName} to={`/blog/${post.slug}`}>
      <div className={imageContainerClassName}>
        <img
          alt={post.title}
          className={imageClassName}
          loading={loadLazy ? 'lazy' : undefined}
          src={post.thumbnailUrl}
        />
      </div>

      <h3 className={titleClassName}>{post.title}</h3>

      <p className="text-muted-foreground whitespace-pre-wrap">
        {post.description}
      </p>
    </Link>
  );
}
