import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts the slug from a blog URL.
 *
 * @param request - The url for the incoming request object.
 * @returns The blog post slug as a string.
 */
export function getSlugFromUrl(url: string) {
  const parts = url.split('/');
  const blogIndex = parts.indexOf('blog');

  if (blogIndex === -1 || blogIndex === parts.length - 1) {
    throw new Error('Invalid blog URL: No slug found');
  }

  return parts[blogIndex + 1];
}

/**
 * Generates an array of metadata objects for social media sharing.
 *
 * @param options - An object containing the metadata options.
 * @param options.title - The title of the content.
 * @param options.description - A brief description of the content.
 * @param options.imageUrl - The URL of the image to be used in social media previews.
 * @param options.url - The URL of the content.
 * @param options.type - The type of content (default: 'website').
 * @param options.siteName - The name of the website (default: 'Jan Hesters').
 * @param options.locale - The locale of the content (default: 'en_US').
 * @param options.twitterHandle - The Twitter handle associated with the content (default: '@janhesters').
 * @param options.publishedTime - The publication time of the content (optional).
 * @param options.keywords - An array of keywords related to the content (optional).
 * @returns An array of metadata objects for various social media platforms and SEO purposes.
 */
export const getSocialsMeta = ({
  title,
  description,
  imageUrl = 'https://www.janhesters.com/images/og.png',
  url,
  type = 'website',
  siteName = 'Jan Hesters',
  locale = 'en_US',
  twitterHandle = '@janhesters',
  publishedTime,
  keywords,
  isUnlisted = false,
}: {
  title: string;
  description: string;
  imageUrl?: string;
  url: string;
  type?: string;
  siteName?: string;
  locale?: string;
  twitterHandle?: string;
  publishedTime?: string;
  keywords?: string;
  isUnlisted?: boolean;
}) => [
  ...(isUnlisted ? [{ name: 'robots', content: 'noindex' }] : []),
  { title },
  { name: 'title', content: title },
  { name: 'description', content: description },
  { name: 'image', content: imageUrl },
  ...(keywords ? [{ name: 'keywords', content: keywords }] : []),
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:image', content: imageUrl },
  { property: 'og:url', content: url },
  { property: 'og:type', content: type },
  { property: 'og:site_name', content: siteName },
  { property: 'og:locale', content: locale },
  ...(publishedTime
    ? [{ property: 'og:article:published_time', content: publishedTime }]
    : []),
  { name: 'twitter:title', content: title },
  { name: 'twitter:description', content: description },
  { name: 'twitter:image', content: imageUrl },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:image:alt', content: title },
  { name: 'twitter:site', content: twitterHandle },
  { name: 'twitter:creator', content: twitterHandle },
];

/**
 * Extracts the domain URL from the request headers.
 *
 * @param request - The incoming request object.
 * @returns The domain URL as a string.
 * @throws {Error} If the host cannot be determined from the request headers.
 */
export function getDomainUrl(request: Request) {
  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host');

  if (!host) {
    throw new Error('Could not determine domain URL.');
  }

  const protocol = host.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${host}`;
}

/**
 * Removes the trailing slash from a URL if present.
 *
 * @param url - The URL to process.
 * @returns The URL without a trailing slash.
 */
export function removeTrailingSlash(url: string) {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

/**
 * Constructs a full URL from the request object.
 *
 * @param request - The incoming request object.
 * @returns The constructed URL as a string, without a trailing slash.
 */
export function getUrl(request: Request): string {
  const originUrl = getDomainUrl(request);
  const path = new URL(request.url).pathname;
  return removeTrailingSlash(`${originUrl}${path}`);
}
