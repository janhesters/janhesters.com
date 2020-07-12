import '@reach/dialog/styles.css';
import '@reach/skip-nav/styles.css';
import 'react-toggle/style.css';
import 'styles/styles.css';

import { DefaultSeo } from 'next-seo';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styles/theme-provider.js';

import { SEO } from '../../next-seo.config';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo {...SEO} />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
