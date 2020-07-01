import 'react-toggle/style.css';
import '@reach/dialog/styles.css';
import 'styles/styles.css';

import React from 'react';
import { ThemeProvider } from 'styles/theme-provider.js';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
