import { MDXProvider } from '@mdx-js/react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import React, { Fragment } from 'react';
import { toUSDate } from 'utils/fp.js';

import { components } from './mdx-components.js';

const PostPageComponent = ({
  children,
  meta: { date, slug, title, description, tags, related },
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
          publishedTime: toUSDate(date),
          tags,
        },
      }}
    />

    <main className="post-page--root">
      <article className="post-page--article">
        <h2 className="post-page--title">{title}</h2>
        <MDXProvider components={components}>{children}</MDXProvider>
      </article>
      {related.length > 0 && (
        <aside className="post-page--aside">
          <p className="post-page--related-paragraph">Related</p>
          <ul className="post-page--related-list">
            {map(
              ({ id, title, date, slug }) => (
                <li className="post-page--related-list-item" key={id}>
                  <Link href="/[postSlug]" as={`/${slug}`}>
                    <a>{title}</a>
                  </Link>
                  <span>{toUSDate(date)}</span>
                </li>
              ),
              related,
            )}
          </ul>
        </aside>
      )}
      <aside className="post-page--aside">
        <hr />
        <p className="post-page--paragraph">
          Do you want to message me about anything? My{' '}
          <a
            className="mdx-component--a"
            href="https://twitter.com/janhesters"
            target="_blank"
            rel="noopener noreferrer"
          >
            DMs on Twitter
          </a>{' '}
          are open.
        </p>
      </aside>
    </main>
  </Fragment>
);

PostPageComponent.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.object,
};

export { PostPageComponent };
