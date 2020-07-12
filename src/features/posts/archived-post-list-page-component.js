import Head from 'next/head.js';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import React, { Fragment } from 'react';

import { PostListItemContainer } from './post-list-item-container.js';

// eslint-disable-next-line react/prop-types
const renderPost = ({ id, ...post }) => (
  <PostListItemContainer key={id} {...post} />
);

const ArchivedPostListPageComponent = ({ archivedPostMetaData, t }) => (
  <Fragment>
    <Head>
      <title>{`${t('common.archive')} | ${t('common.janHesters')}`}</title>
    </Head>

    <main className="archived-post-list-page--root">
      <h2 className="archived-post-list-page--title">{t('common.archive')}</h2>
      <p className="archived-post-list-page--description">
        {t('archive.description')}
      </p>
      <ul className="archived-post-list-page--post-list">
        {map(renderPost, archivedPostMetaData)}
      </ul>
    </main>
  </Fragment>
);

ArchivedPostListPageComponent.propTypes = {
  archivedPostMetaData: PropTypes.array,
  t: PropTypes.func.isRequired,
};

export { ArchivedPostListPageComponent };
