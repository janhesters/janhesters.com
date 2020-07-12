import Head from 'next/head.js';
import Link from 'next/link.js';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import React, { Fragment } from 'react';

import { PostListItemContainer } from './post-list-item-container.js';

// eslint-disable-next-line react/prop-types
const renderPost = ({ id, ...post }) => (
  <PostListItemContainer key={id} {...post} />
);

const PostListPageComponent = ({ postMetaData, t }) => (
  <Fragment>
    <Head>
      <title>{t('common.janHesters')}</title>
    </Head>

    <main className="post-list-page--root">
      <ul className="post-list-page--post-list">
        {map(renderPost, postMetaData)}
        <li className="post-list-page--archive-link">
          <Link href="/bonus">
            <a>{t('common.archive')}</a>
          </Link>
        </li>
      </ul>
    </main>
  </Fragment>
);

PostListPageComponent.propTypes = {
  postMetaData: PropTypes.array,
  t: PropTypes.func.isRequired,
};

export { PostListPageComponent };
