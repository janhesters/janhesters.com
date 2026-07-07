import { redirect } from "react-router";

import type { Route } from "./+types/$";

/**
 * A mapping of target paths to arrays of source paths for redirects.
 *
 * The keys represent the target paths, and the values are arrays of source
 * paths that should redirect to the corresponding target path.
 */
type RedirectMapping = Record<string, string[]>;

/**
 * A mapping of target paths to arrays of source paths for redirects.
 * The loader uses this to redirect old urls from my old blog to the new ones.
 */
const redirectMapping: RedirectMapping = {
  "/": ["/newsletter", "/newsletter-announcement"],
  "/archive": ["/bonus", "/bonus/"],
  "/blog/12-keys-write-senior-level-tests": [
    "/test-desiderata",
    "/test-desiderata/",
  ],
  "/blog/arrow-functions": [
    "/arrow-functions",
    "/arrow-functions/",
    "/understanding-arrow-functions",
    "/understanding-arrow-functions/",
    "/blog/understanding-arrow-functions",
    "/blog/understanding-arrow-functions/",
  ],
  "/blog/building-a-react-native-app-with-complex-navigation-2024": [
    "/building-a-react-native-app-with-complex-navigation-2024",
    "/building-a-react-native-app-with-complex-navigation-2024/",
    "/complex-navigation",
    "/complex-navigation/",
  ],
  "/blog/conditional-rendering": [
    "/conditional-rendering",
    "/conditional-rendering/",
  ],
  "/blog/creating-graphql-batch-operations-for-aws-amplify": [
    "/creating-graphql-batch-operations-for-aws-amplify",
    "/creating-graphql-batch-operations-for-aws-amplify/",
  ],
  "/blog/email-only-sign-up-with-aws-amplify": [
    "/email-only-sign-up-with-aws-amplify",
    "/email-only-sign-up-with-aws-amplify/",
  ],
  "/blog/end-to-end-testing-amplify-apps": [
    "/end-to-end-testing-amplify-apps",
    "/end-to-end-testing-amplify-apps/",
    "/e2e-testing-amplify-apps",
    "/e2e-testing-amplify-apps/",
  ],
  "/blog/higher-order-components-are-misunderstood-in-react": [
    "/higher-order-components",
    "/higher-order-components/",
    "/master-class-higher-order-components",
    "/master-class-higher-order-components/",
    "/master-higher-order-components-in-react-today",
    "/master-higher-order-components-in-react-today/",
  ],
  "/blog/how-to-access-the-user-in-lambda-functions-with-amplify": [
    "/how-to-access-the-user-in-lambda-functions-with-amplify",
    "/how-to-access-the-user-in-lambda-functions-with-amplify/",
  ],
  "/blog/how-to-add-a-badge-to-icons-in-react-native": [
    "/how-to-add-a-badge-to-icons-in-react-native",
    "/how-to-add-a-badge-to-icons-in-react-native/",
  ],
  "/blog/how-to-set-up-express-5-for-production-in-2025": [
    "/blog/express-testing",
    "/blog/express-testing/",
  ],
  "/blog/how-to-set-up-nextjs-15-for-production-in-2025": [
    "/blog/how-to-set-up-nextjs-15-for-production-in-2024",
    "/blog/how-to-set-up-nextjs-15-for-production-in-2024/",
  ],
  "/blog/how-to-use-aws-appsync-in-lambda-functions": [
    "/how-to-use-aws-appsync-in-lambda-functions",
    "/how-to-use-aws-appsync-in-lambda-functions/",
  ],
  "/blog/lambda-triggers-and-read-only-permissions": [
    "/lambda-triggers-and-read-only-permissions",
    "/lambda-triggers-and-read-only-permissions/",
    "/lamda-triggers-and-read-only-permissions",
    "/lamda-triggers-and-read-only-permissions/",
  ],
  "/blog/localization-with-aws-amplify": [
    "/localization-with-aws-amplify",
    "/localization-with-aws-amplify/",
  ],
  "/blog/multiple-environments-with-aws-amplify": [
    "/multiple-environments-with-aws-amplify",
    "/multiple-environments-with-aws-amplify/",
  ],
  "/blog/query-more-items-using-scans-in-aws-amplify": [
    "/query-more-items-using-scans-in-aws-amplify",
    "/query-more-items-using-scans-in-aws-amplify/",
    "/query-all-items-using-scans-in-aws-amplify",
    "/query-all-items-using-scans-in-aws-amplify/",
  ],
  "/blog/setting-up-a-project-with-ci-cd-using-amplify": [
    "/setting-up-a-project-with-ci-cd-using-amplify",
    "/setting-up-a-project-with-ci-cd-using-amplify/",
  ],
  "/blog/sorting-queries-with-aws-amplifys-key-directive": [
    "/sorting-queries-with-aws-amplifys-key-directive",
    "/sorting-queries-with-aws-amplifys-key-directive/",
  ],
  "/blog/testing-lambda-functions": [
    "/testing-lambda-functions",
    "/testing-lambda-functions/",
  ],
  "/blog/the-ultimate-guide-to-remote-work-communication": [
    "/blog/master-communication",
    "/blog/master-communication/",
  ],
  "/blog/tracking-and-email-reminders-in-aws-amplify": [
    "/tracking-and-email-reminders-in-aws-amplify",
    "/tracking-and-email-reminders-in-aws-amplify/",
  ],
  "/blog/unit-testing-reducers": [
    "/unit-testing-reducers",
    "/unit-testing-reducers/",
  ],
  "/blog/updater-functions-in-setstate": [
    "/updater-functions-in-setstate",
    "/updater-functions-in-setstate/",
  ],
  "/blog/usecallback-vs-usememo": [
    "/usecallback-vs-usememo",
    "/usecallback-vs-usememo/",
    "/use-callback-vs-use-memo",
    "/use-callback-vs-use-memo/",
    "/blog/use-callback-vs-use-memo",
    "/blog/use-callback-vs-use-memo/",
  ],
  "/blog/using-typescript-with-react-native": [
    "/using-typescript-with-react-native",
    "/using-typescript-with-react-native/",
  ],
};

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Check if the current path matches any of the redirect paths ...
  for (const [targetPath, sourcePaths] of Object.entries(redirectMapping)) {
    if (sourcePaths.includes(path)) {
      // ... and if it does, redirect to the target path.
      return redirect(targetPath);
    }
  }

  // If no redirect is found, return a 404 response.
  throw new Response(null, { status: 404, statusText: "Not Found" });
}

export function action({ request: _request }: Route.ActionArgs) {
  // Handle POST requests to non-existent routes with 404
  throw new Response(null, { status: 404, statusText: "Not Found" });
}

export default function CatchAll() {
  return null;
}
