import "dotenv/config";

import { z } from "zod";

const schema = z.object({
  BEEHIIV_API_KEY: z.string().min(1),
  BEEHIIV_PUBLICATION_ID: z.string().min(1),
  COOKIE_SECRET: z.string().min(1).default("secret"),
  NODE_ENV: z.enum(["production", "development", "test"] as const),
  SITE_ORIGIN: z.url().optional(),
  VERCEL_URL: z.string().min(1).optional(),
});

type Env = z.infer<typeof schema>;

let environment: Env | undefined;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Omit<Env, "NODE_ENV"> {}
  }
}

export function getEnv() {
  if (environment) {
    return environment;
  }

  const parsed = schema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      "Invalid environment variables:",
      z.flattenError(parsed.error).fieldErrors,
    );

    throw new Error("Invalid environment variables");
  }

  environment = parsed.data;
  return environment;
}

export function init() {
  getEnv();
}
