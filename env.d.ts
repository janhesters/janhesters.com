/* eslint-disable no-undef, @typescript-eslint/no-explicit-any */
/// <reference types="@vercel/remix" />
/// <reference types="vite/client" />

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export const frontmatter: any;
  export default MDXComponent;
}
