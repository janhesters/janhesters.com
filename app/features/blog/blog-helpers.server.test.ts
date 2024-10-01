import { describe, expect, test } from 'vitest';

import {
  BlogPostMeta,
  FileEntry,
  getMetaFromFileEntries,
  mapFilePathToSlug,
  slugify,
  sortPostsByDate,
} from './blog-helpers.server';

describe('slugify()', () => {
  test('given a string with spaces: returns a string with hyphens', () => {
    expect(slugify('Hello World')).toStrictEqual('hello-world');
  });

  test('given an uppercase string: returns a lowercase string', () => {
    expect(slugify('HELLO WORLD')).toStrictEqual('hello-world');
  });

  test('given a string with special characters: returns a string without special characters', () => {
    expect(slugify('Hello, World!')).toStrictEqual('hello-world');
  });

  test('given a string with multiple spaces: returns a string with single hyphens', () => {
    expect(slugify('Hello   World')).toStrictEqual('hello-world');
  });

  test('given a string with leading and trailing spaces: returns a trimmed string', () => {
    expect(slugify('  Hello World  ')).toStrictEqual('hello-world');
  });

  test('given a string with numbers: returns a string with numbers preserved', () => {
    expect(slugify('Hello World 123')).toStrictEqual('hello-world-123');
  });

  test('given an empty string: returns an empty string', () => {
    expect(slugify('')).toStrictEqual('');
  });

  test('given a string with only special characters: returns an empty string', () => {
    expect(slugify('!@#$%^&*()')).toStrictEqual('');
  });

  test('given a string with only a "dot": returns a string without the dot', () => {
    expect(slugify('useCallback vs. useMemo')).toStrictEqual(
      'usecallback-vs-usememo',
    );
  });
});

describe('getMetaFromFileEntries()', () => {
  test('given empty file entries: returns empty array', () => {
    const fileEntries: FileEntry[] = [];

    expect(getMetaFromFileEntries(fileEntries)).toStrictEqual([]);
  });

  test('given file entries: returns array of blog post meta', () => {
    const fileEntries: FileEntry[] = [
      [
        '/app/routes/blog.building-a-react-native-app-with-complex-navigation-2024.mdx',
        {
          frontmatter: {
            title:
              'Building a React Native App with Complex Navigation in 2024',
            datePublished: '2024-07-19',
            description:
              'Learn how to create a React Native app with nested navigators, handle authentication, and implement platform-specific navigation. This tutorial covers advanced concepts for building a professional production-ready app using Expo.',
            thumbnailUrl:
              'https://i.ytimg.com/vi/FbURAv7bt5A/maxresdefault.jpg',
          },
        },
      ],
      [
        '/app/routes/blog.use-callback-vs-use-memo.mdx',
        {
          frontmatter: {
            title: 'useCallback vs. useMemo',
            datePublished: '2024-06-14',
            description:
              'What is the difference between useCallBack and useMemo? When should you use useMemo and useCallback? In this tutorial you will learn how to use these two React hooks and see some real-world examples.',
            thumbnailUrl:
              'https://i.ytimg.com/vi/M8NaTJN8xh4/maxresdefault.jpg',
          },
        },
      ],
    ];

    const expectedMeta = [
      {
        title: 'Building a React Native App with Complex Navigation in 2024',
        datePublished: '2024-07-19',
        description:
          'Learn how to create a React Native app with nested navigators, handle authentication, and implement platform-specific navigation. This tutorial covers advanced concepts for building a professional production-ready app using Expo.',
        thumbnailUrl: 'https://i.ytimg.com/vi/FbURAv7bt5A/maxresdefault.jpg',
        slug: 'building-a-react-native-app-with-complex-navigation-2024',
        isArchived: false,
      },
      {
        title: 'useCallback vs. useMemo',
        datePublished: '2024-06-14',
        description:
          'What is the difference between useCallBack and useMemo? When should you use useMemo and useCallback? In this tutorial you will learn how to use these two React hooks and see some real-world examples.',
        thumbnailUrl: 'https://i.ytimg.com/vi/M8NaTJN8xh4/maxresdefault.jpg',
        slug: 'use-callback-vs-use-memo',
        isArchived: false,
      },
    ];

    expect(getMetaFromFileEntries(fileEntries)).toStrictEqual(expectedMeta);
  });
});

describe('mapFilePathToSlug()', () => {
  test('given a file path: returns the correct slug', () => {
    expect(
      mapFilePathToSlug('/app/routes/blog.my-awesome-post.mdx'),
    ).toStrictEqual('my-awesome-post');
  });

  test('given a file path with multiple dots: returns the correct slug', () => {
    expect(
      mapFilePathToSlug('/app/routes/blog.my.awesome.post.mdx'),
    ).toStrictEqual('post');
  });

  test('given a file path without "blog." prefix: returns an empty string', () => {
    expect(mapFilePathToSlug('/app/routes/my-awesome-post.mdx')).toStrictEqual(
      '',
    );
  });

  test('given a file path with uppercase letters: returns lowercase slug', () => {
    expect(
      mapFilePathToSlug('/app/routes/blog.My-Awesome-Post.mdx'),
    ).toStrictEqual('my-awesome-post');
  });

  test('given an empty string: returns an empty string', () => {
    expect(mapFilePathToSlug('')).toStrictEqual('');
  });

  test('given a file path with a "blog." prefix and a "mdx" extension: returns the correct slug', () => {
    expect(
      mapFilePathToSlug('/app/routes/blog.use-callback-vs-use-memo.mdx'),
    ).toStrictEqual('use-callback-vs-use-memo');
  });
});

describe('sortPostsByDate()', () => {
  test('given an array of blog posts: returns posts sorted in descending order by date', () => {
    const posts: BlogPostMeta[] = [
      {
        datePublished: '2023-01-15',
        title: 'Post 1',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
      {
        datePublished: '2023-03-20',
        title: 'Post 2',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
      {
        datePublished: '2023-02-10',
        title: 'Post 3',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
    ];

    const sortedPosts = sortPostsByDate(posts);

    expect(sortedPosts).toStrictEqual([
      {
        datePublished: '2023-03-20',
        title: 'Post 2',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
      {
        datePublished: '2023-02-10',
        title: 'Post 3',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
      {
        datePublished: '2023-01-15',
        title: 'Post 1',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
    ]);
  });

  test('given an empty array: returns an empty array', () => {
    const posts: BlogPostMeta[] = [];
    const sortedPosts = sortPostsByDate(posts);
    expect(sortedPosts).toStrictEqual([]);
  });

  test('given an array of posts with the same date: returns the array in the original order', () => {
    const posts: BlogPostMeta[] = [
      {
        datePublished: '2023-01-15',
        title: 'Post A',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
      {
        datePublished: '2023-01-15',
        title: 'Post B',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
      {
        datePublished: '2023-01-15',
        title: 'Post C',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
    ];

    const sortedPosts = sortPostsByDate(posts);

    expect(sortedPosts).toStrictEqual(posts);
  });

  test('given an array of posts with different date formats: returns posts sorted correctly', () => {
    const posts: BlogPostMeta[] = [
      {
        datePublished: '2023-01-15',
        title: 'Post 1',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
      {
        datePublished: '2023-3-5',
        title: 'Post 2',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
      {
        datePublished: '2023-12-20',
        title: 'Post 3',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
    ];

    const sortedPosts = sortPostsByDate(posts);

    expect(sortedPosts).toStrictEqual([
      {
        datePublished: '2023-12-20',
        title: 'Post 3',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
      {
        datePublished: '2023-3-5',
        title: 'Post 2',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
      {
        datePublished: '2023-01-15',
        title: 'Post 1',
        description: '',
        isArchived: false,
        slug: '',
        thumbnailUrl: '',
      },
    ]);
  });
});
