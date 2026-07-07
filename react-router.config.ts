import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  prerender: true,
  presets: [vercelPreset()],
  // Server-side render by default, to enable SPA mode set `ssr` to `false`.
  ssr: true,
} satisfies Config;
