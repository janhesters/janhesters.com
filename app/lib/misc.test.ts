import { describe, expect, test } from 'vitest';

import {
  getDomainUrl,
  getSlugFromUrl,
  getUrl,
  removeTrailingSlash,
} from './misc';

describe('getDomainUrl()', () => {
  test('given a request with X-Forwarded-Host header: returns the correct domain URL', () => {
    const request = new Request('https://example.com', {
      headers: { 'X-Forwarded-Host': 'forwarded.example.com' },
    });

    expect(getDomainUrl(request)).toStrictEqual(
      'https://forwarded.example.com',
    );
  });

  test('given a request with host header: returns the correct domain URL', () => {
    const request = new Request('https://example.com', {
      headers: { host: 'example.com' },
    });

    expect(getDomainUrl(request)).toStrictEqual('https://example.com');
  });

  test('given a request with localhost: returns http protocol', () => {
    const request = new Request('http://localhost:3000', {
      headers: { host: 'localhost:3000' },
    });

    expect(getDomainUrl(request)).toStrictEqual('http://localhost:3000');
  });

  test('given a request without host headers: throws an error', () => {
    const request = new Request('https://example.com');

    expect(() => getDomainUrl(request)).toThrow(
      'Could not determine domain URL.',
    );
  });
});

describe('removeTrailingSlash()', () => {
  test('given a URL with a trailing slash: returns the URL without the trailing slash', () => {
    expect(removeTrailingSlash('https://example.com/')).toStrictEqual(
      'https://example.com',
    );
  });

  test('given a URL without a trailing slash: returns the URL unchanged', () => {
    expect(removeTrailingSlash('https://example.com')).toStrictEqual(
      'https://example.com',
    );
  });

  test('given an empty string: returns an empty string', () => {
    expect(removeTrailingSlash('')).toStrictEqual('');
  });
});

describe('getUrl()', () => {
  test('given a request: returns the full URL without a trailing slash', () => {
    const request = new Request('https://example.com/path/to/resource/', {
      headers: { host: 'example.com' },
    });

    expect(getUrl(request)).toStrictEqual(
      'https://example.com/path/to/resource',
    );
  });

  test('given a request with query parameters: returns the full URL without query parameters', () => {
    const request = new Request('https://example.com/path?param=value', {
      headers: { host: 'example.com' },
    });

    expect(getUrl(request)).toStrictEqual('https://example.com/path');
  });

  test('given a request with localhost: constructs URL with http protocol', () => {
    const request = new Request('http://localhost:3000/path', {
      headers: { host: 'localhost:3000' },
    });

    expect(getUrl(request)).toStrictEqual('http://localhost:3000/path');
  });
});

describe('getSlugFromUrl()', () => {
  test('given a valid blog URL: returns the correct slug', () => {
    const url = 'https://example.com/blog/my-awesome-post';
    expect(getSlugFromUrl(url)).toStrictEqual('my-awesome-post');
  });

  test('given a URL with multiple path segments: returns the correct slug', () => {
    const url = 'https://example.com/some/path/blog/another-great-post';
    expect(getSlugFromUrl(url)).toStrictEqual('another-great-post');
  });

  test('given a URL with query parameters: returns the correct slug without query parameters', () => {
    const url = 'https://example.com/blog/post-with-params?param=value';
    expect(getSlugFromUrl(url)).toStrictEqual('post-with-params');
  });

  test('given a URL without "blog" in the path: throws an error', () => {
    const url = 'https://example.com/not-blog/some-post';
    expect(() => getSlugFromUrl(url)).toThrow(
      'Invalid blog URL: No slug found',
    );
  });

  test('given a URL with "blog" as the last segment: throws an error', () => {
    const url = 'https://example.com/path/to/blog';
    expect(() => getSlugFromUrl(url)).toThrow(
      'Invalid blog URL: No slug found',
    );
  });
});
