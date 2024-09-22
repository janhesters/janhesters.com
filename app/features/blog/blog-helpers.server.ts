/**
 * Converts a string into a URL-friendly slug.
 *
 * @param text - The string to be converted into a slug.
 * @returns A lowercase string with spaces replaced by hyphens, special
 * characters removed, and trimmed of leading/trailing hyphens.
 */
export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replaceAll(/[^\s\w-]/g, '')
    .replaceAll(/[\s_-]+/g, '-')
    .replaceAll(/^-+|-+$/g, '');

/**
 * Extracts the slug from a file path.
 *
 * @param filePath - The file path to extract the slug from.
 * @returns The extracted slug or an empty string if no slug is found.
 */
export const mapFilePathToSlug = (filePath: string): string => {
  const blogPrefix = 'blog.';
  const mdxSuffix = '.mdx';

  const fileName = filePath.split('/').pop() || '';

  if (!fileName.startsWith(blogPrefix) || !fileName.endsWith(mdxSuffix)) {
    return '';
  }

  const slugCandidate =
    fileName.slice(blogPrefix.length, -mdxSuffix.length).split('.').pop() || '';

  return slugify(slugCandidate);
};

type BlogFrontmatter = {
  datePublished: string;
  description: string;
  isArchived?: boolean;
  isDraft?: boolean;
  tags?: string[];
  thumbnailUrl: string;
  title: string;
};

export type FileEntry = [string, { frontmatter: BlogFrontmatter }];

export type BlogPostMeta = {
  datePublished: string;
  description: string;
  isArchived: boolean;
  isDraft?: boolean;
  slug: string;
  tags?: string[];
  thumbnailUrl: string;
  title: string;
};

/**
 * Extracts metadata from file entries.
 *
 * @param fileEntries - An array of file entries, each containing a file path and frontmatter.
 * @returns An array of BlogPostMeta objects.
 */
export const getMetaFromFileEntries = (
  fileEntries: FileEntry[],
): BlogPostMeta[] =>
  fileEntries.map(([filePath, { frontmatter }]) => ({
    ...frontmatter,
    slug: mapFilePathToSlug(filePath),
    isArchived: frontmatter.isArchived || false,
  }));

/**
 * Retrieves metadata for all blog posts.
 *
 * @returns An array of BlogPostMeta objects containing metadata for each
 * blog post.
 */
export const getAllPostsMeta = (): BlogPostMeta[] => {
  const files = import.meta.glob('/app/routes/blog*.mdx', {
    eager: true,
  }) as Record<string, { frontmatter: BlogFrontmatter }>;
  return getMetaFromFileEntries(Object.entries(files));
};

/**
 * Sorts blog posts by date in descending order.
 *
 * @param posts - An array of BlogPostMeta objects to be sorted.
 * @returns A new array of BlogPostMeta objects sorted by date in descending order.
 */
export const sortPostsByDate = (posts: BlogPostMeta[]) =>
  [...posts].sort((a, b) => {
    const dateA = new Date(a.datePublished);
    const dateB = new Date(b.datePublished);
    return dateB.getTime() - dateA.getTime();
  });

export const getAllPostsMetaSortedByDate = () =>
  sortPostsByDate(getAllPostsMeta());
