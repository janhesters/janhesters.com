import Head from 'next/head.js';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const PostListPageComponent = ({ t }) => (
  <Fragment>
    <Head>
      <title>{t('common.janHesters')}</title>
    </Head>

    <main className="root">
      <h2 className="heading">{t('common.janHesters')}</h2>
    </main>

    <style jsx>{`
      .root {
        align-items: center;
        background: black;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
      }

      .heading {
        color: white;
        margin: 0;
      }
    `}</style>
  </Fragment>
);

PostListPageComponent.propTypes = {
  t: PropTypes.func.isRequired,
};

export { PostListPageComponent };
