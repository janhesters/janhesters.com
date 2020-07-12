import { MDXProvider } from '@mdx-js/react';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { components } from './mdx-components.js';

const PostPageComponent = ({
  children,
  meta: { date, slug, title, description, tags },
}) => (
  <Fragment>
    <NextSeo
      canonical={`https://janhesters.com/${slug}`}
      description={description}
      title={title}
      openGraph={{
        url: `https://janhesters.com/${slug}`,
        title: title,
        description: description,
        article: {
          authors: ['Jan Hesters'],
          publishedTime: date,
          tags,
        },
      }}
    />

    <main className="post-page--root">
      <article className="post-page--article">
        <h2 className="post-page--title">{title}</h2>
        <MDXProvider components={components}>{children}</MDXProvider>
      </article>
    </main>
    {/* <aside>
      List Related Posts
    </aside> */}
  </Fragment>
);

PostPageComponent.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.object,
};

export { PostPageComponent };
