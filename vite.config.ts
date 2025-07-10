import mdx from '@mdx-js/rollup';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import type { Options, Theme } from 'rehype-pretty-code';
import { rehypePrettyCode } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import nightOwlLight from './app/styles/night-owl-light.json';

const options: Options = {
  theme: {
    dark: 'night-owl',
    light: nightOwlLight as unknown as Theme,
  },
  // transformers: [transformerCopyButton()],
};

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkGfm,
        remarkMdxFrontmatter,
        remarkMath,
      ],
      rehypePlugins: [
        [rehypePrettyCode, options],
        rehypeKatex,
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
