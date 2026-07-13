/**
 * Extracts the slug from a blog URL.
 *
 * @param request - The url for the incoming request object.
 * @returns The blog post slug as a string.
 */
export function getSlugFromUrl(url: string) {
  const parts = url.split("/");
  const blogIndex = parts.indexOf("blog");

  if (blogIndex === -1 || blogIndex === parts.length - 1) {
    throw new Error("Invalid blog URL: No slug found");
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
  imageUrl = "https://i.magecdn.com/ada680/f47d21_og?f=webp,q.100,p.f,l.t",
  url,
  type = "website",
  siteName = "Jan Hesters",
  locale = "en_US",
  twitterHandle = "@janhesters",
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
  ...(isUnlisted ? [{ content: "noindex", name: "robots" }] : []),
  { title },
  { content: title, name: "title" },
  { content: description, name: "description" },
  { content: imageUrl, name: "image" },
  ...(keywords ? [{ content: keywords, name: "keywords" }] : []),
  { content: title, property: "og:title" },
  { content: description, property: "og:description" },
  { content: imageUrl, property: "og:image" },
  { content: url, property: "og:url" },
  { content: type, property: "og:type" },
  { content: siteName, property: "og:site_name" },
  { content: locale, property: "og:locale" },
  ...(publishedTime
    ? [{ content: publishedTime, property: "og:article:published_time" }]
    : []),
  { content: title, name: "twitter:title" },
  { content: description, name: "twitter:description" },
  { content: imageUrl, name: "twitter:image" },
  { content: "summary_large_image", name: "twitter:card" },
  { content: title, name: "twitter:image:alt" },
  { content: twitterHandle, name: "twitter:site" },
  { content: twitterHandle, name: "twitter:creator" },
];

/**
 * Extracts the domain URL from the request headers.
 *
 * @param request - The incoming request object.
 * @returns The domain URL as a string.
 * @throws {Error} If the host cannot be determined from the request headers.
 */
export function getDomainUrl(request: Request): string {
  const environmentOrigin = getEnvironmentOrigin();
  if (environmentOrigin) {
    return removeTrailingSlash(environmentOrigin);
  }

  try {
    return new URL(request.url).origin;
  } catch {
    // Fall back to the forwarded host headers.
  }

  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error(
      "Could not determine domain URL. " +
        "Set VERCEL_URL (on Vercel) or SITE_ORIGIN (locally) if needed.",
    );
  }

  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

function getEnvironmentOrigin() {
  if (typeof process === "undefined") {
    return undefined;
  }

  const { SITE_ORIGIN, VERCEL_URL } = process.env;
  if (!VERCEL_URL) {
    return SITE_ORIGIN;
  }

  return VERCEL_URL.startsWith("http") ? VERCEL_URL : `https://${VERCEL_URL}`;
}

/**
 * Removes the trailing slash from a URL if present.
 *
 * @param url - The URL to process.
 * @returns The URL without a trailing slash.
 */
export function removeTrailingSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
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
