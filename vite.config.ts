import mdx from '@mdx-js/rollup';
// import { transformerCopyButton } from '@rehype-pretty/transformers';
import { vitePlugin as remix } from '@remix-run/dev';
import { vercelPreset } from '@vercel/remix/vite';
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
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        unstable_singleFetch: true,
        unstable_lazyRouteDiscovery: true,
        unstable_optimizeDeps: true,
      },
      presets: [vercelPreset()],
    }),
    tsconfigPaths(),
  ],
  ssr: {
    noExternal: ['tailwind-merge'],
  },
});
