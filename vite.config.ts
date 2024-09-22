import mdx from '@mdx-js/rollup';
// import { transformerCopyButton } from '@rehype-pretty/transformers';
import { vitePlugin as remix } from '@remix-run/dev';
import type { Options, Theme } from 'rehype-pretty-code';
import { rehypePrettyCode } from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
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
      remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMdxFrontmatter],
      rehypePlugins: [[rehypePrettyCode, options]],
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
    }),
    tsconfigPaths(),
  ],
});
