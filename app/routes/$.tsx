/* eslint-disable unicorn/no-null */
import { redirect } from 'react-router';

import type { Route } from './+types/$';

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
  '/blog/usecallback-vs-usememo': [
    '/usecallback-vs-usememo',
    '/usecallback-vs-usememo/',
    '/use-callback-vs-use-memo',
    '/use-callback-vs-use-memo/',
    '/blog/use-callback-vs-use-memo',
    '/blog/use-callback-vs-use-memo/',
  ],
  '/blog/building-a-react-native-app-with-complex-navigation-2024': [
    '/building-a-react-native-app-with-complex-navigation-2024',
    '/building-a-react-native-app-with-complex-navigation-2024/',
    '/complex-navigation',
    '/complex-navigation/',
  ],
  '/': ['/newsletter', '/newsletter-announcement'],
  '/blog/higher-order-components-are-misunderstood-in-react': [
    '/higher-order-components',
    '/higher-order-components/',
    '/master-class-higher-order-components',
    '/master-class-higher-order-components/',
    '/master-higher-order-components-in-react-today',
    '/master-higher-order-components-in-react-today/',
  ],
  '/blog/12-keys-write-senior-level-tests': [
    '/test-desiderata',
    '/test-desiderata/',
  ],
  '/blog/how-to-add-a-badge-to-icons-in-react-native': [
    '/how-to-add-a-badge-to-icons-in-react-native',
    '/how-to-add-a-badge-to-icons-in-react-native/',
  ],
  '/blog/using-typescript-with-react-native': [
    '/using-typescript-with-react-native',
    '/using-typescript-with-react-native/',
  ],
  '/blog/email-only-sign-up-with-aws-amplify': [
    '/email-only-sign-up-with-aws-amplify',
    '/email-only-sign-up-with-aws-amplify/',
  ],
  '/blog/creating-graphql-batch-operations-for-aws-amplify': [
    '/creating-graphql-batch-operations-for-aws-amplify',
    '/creating-graphql-batch-operations-for-aws-amplify/',
  ],
  '/blog/updater-functions-in-setstate': [
    '/updater-functions-in-setstate',
    '/updater-functions-in-setstate/',
  ],
  '/blog/tracking-and-email-reminders-in-aws-amplify': [
    '/tracking-and-email-reminders-in-aws-amplify',
    '/tracking-and-email-reminders-in-aws-amplify/',
  ],
  '/blog/localization-with-aws-amplify': [
    '/localization-with-aws-amplify',
    '/localization-with-aws-amplify/',
  ],
  '/blog/sorting-queries-with-aws-amplifys-key-directive': [
    '/sorting-queries-with-aws-amplifys-key-directive',
    '/sorting-queries-with-aws-amplifys-key-directive/',
  ],
  '/blog/query-more-items-using-scans-in-aws-amplify': [
    '/query-more-items-using-scans-in-aws-amplify',
    '/query-more-items-using-scans-in-aws-amplify/',
    '/query-all-items-using-scans-in-aws-amplify',
    '/query-all-items-using-scans-in-aws-amplify/',
  ],
  '/blog/how-to-use-aws-appsync-in-lambda-functions': [
    '/how-to-use-aws-appsync-in-lambda-functions',
    '/how-to-use-aws-appsync-in-lambda-functions/',
  ],
  '/blog/how-to-access-the-user-in-lambda-functions-with-amplify': [
    '/how-to-access-the-user-in-lambda-functions-with-amplify',
    '/how-to-access-the-user-in-lambda-functions-with-amplify/',
  ],
  '/blog/testing-lambda-functions': [
    '/testing-lambda-functions',
    '/testing-lambda-functions/',
  ],
  '/blog/lambda-triggers-and-read-only-permissions': [
    '/lambda-triggers-and-read-only-permissions',
    '/lambda-triggers-and-read-only-permissions/',
    '/lamda-triggers-and-read-only-permissions',
    '/lamda-triggers-and-read-only-permissions/',
  ],
  '/blog/multiple-environments-with-aws-amplify': [
    '/multiple-environments-with-aws-amplify',
    '/multiple-environments-with-aws-amplify/',
  ],
  '/blog/setting-up-a-project-with-ci-cd-using-amplify': [
    '/setting-up-a-project-with-ci-cd-using-amplify',
    '/setting-up-a-project-with-ci-cd-using-amplify/',
  ],
  '/blog/end-to-end-testing-amplify-apps': [
    '/end-to-end-testing-amplify-apps',
    '/end-to-end-testing-amplify-apps/',
    '/e2e-testing-amplify-apps',
    '/e2e-testing-amplify-apps/',
  ],
  '/blog/conditional-rendering': [
    '/conditional-rendering',
    '/conditional-rendering/',
  ],
  '/blog/arrow-functions': [
    '/arrow-functions',
    '/arrow-functions/',
    '/understanding-arrow-functions',
    '/understanding-arrow-functions/',
    '/blog/understanding-arrow-functions',
    '/blog/understanding-arrow-functions/',
  ],
  '/blog/unit-testing-reducers': [
    '/unit-testing-reducers',
    '/unit-testing-reducers/',
  ],
  '/blog/how-to-set-up-nextjs-15-for-production-in-2025': [
    '/blog/how-to-set-up-nextjs-15-for-production-in-2024',
    '/blog/how-to-set-up-nextjs-15-for-production-in-2024/',
  ],
  '/archive': ['/bonus', '/bonus/'],
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
  throw new Response(null, { status: 404, statusText: 'Not Found' });
}

export default function CatchAll() {
  return null;
}
