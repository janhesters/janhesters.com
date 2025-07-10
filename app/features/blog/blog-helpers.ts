import { getSocialsMeta } from '~/lib/misc';

import type { BlogPostMeta } from './blog-helpers.server';

export const getSocialsMetaForBlogPost = (
  meta: Omit<BlogPostMeta, 'slug'> & { url: string },
) =>
  getSocialsMeta({
    description: meta.description,
    isUnlisted: meta.isDraft,
    keywords: meta.tags?.join(', '),
    ...(meta.isArchived ? {} : { imageUrl: meta.thumbnailUrl }),
    publishedTime: meta.datePublished,
    title: meta.title,
    type: 'article',
    url: meta.url,
  });
