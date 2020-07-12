import Head from 'next/head.js';
import Link from 'next/link.js';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const AboutPageComponent = ({ t }) => (
  <Fragment>
    <Head>
      <title>{t('about.aboutJanHesters')}</title>
    </Head>

    <main className="about-page--root">
      <img
        alt={t('common.janHesters')}
        className="about-page--profile-photo"
        src="/jan.jpeg"
      />
      <h2 className="about-page--name">{t('common.janHesters')}</h2>
      <p className="about-page--headline">{t('common.headline')}</p>

      <p className="about-page--description">{t('about.description')}</p>
    </main>

    <footer className="about-page--footer">
      <Link href="/imprint">
        <a className="about-page--imprint-button">{t('about.imprint')}</a>
      </Link>
    </footer>
  </Fragment>
);

AboutPageComponent.propTypes = {
  t: PropTypes.func.isRequired,
};

export { AboutPageComponent };
