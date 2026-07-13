import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;
const baseURL = "http://127.0.0.1:4173";

export default defineConfig({
  forbidOnly: isCI,
  fullyParallel: true,
  projects: [
    {
      name: "mobile-chromium",
      use: { ...devices["Pixel 5"] },
    },
  ],
  reporter: isCI ? [["html"], ["github"]] : [["html"]],
  retries: isCI ? 2 : 0,
  testDir: "./playwright",
  testMatch: "*.e2e.ts",
  use: {
    baseURL,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run start:e2e",
    reuseExistingServer: !isCI,
    url: baseURL,
  },
  workers: isCI ? 1 : undefined,
});
