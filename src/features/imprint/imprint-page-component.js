import { MDXProvider } from '@mdx-js/react';
import { components } from 'features/posts/mdx-components.js';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const ImprintPageComponent = ({ children }) => (
  <Fragment>
    <NextSeo
      canonical={`https://janhesters.com/imprint`}
      description={'Impressum'}
      title={'Impressum'}
    />

    <main className="post-page--root">
      <article className="post-page--article">
        <h2 className="post-page--title">{'Impressum'}</h2>
        <MDXProvider components={components}>{children}</MDXProvider>
      </article>
    </main>
  </Fragment>
);

ImprintPageComponent.propTypes = {
  children: PropTypes.node,
};

export { ImprintPageComponent };
