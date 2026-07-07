declare module "*.mdx" {
  import type { FunctionComponent } from "react";

  export const frontmatter: Record<string, unknown>;
  const MDXContent: FunctionComponent<Record<string, unknown>>;
  export default MDXContent;
}
