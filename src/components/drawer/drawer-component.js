import { SubscribeContainer } from 'features/subscribe/subscribe-container.js';
import Link from 'next/link.js';
import PropTypes from 'prop-types';
import React from 'react';

const DrawerComponent = ({ t }) => (
  <nav className="drawer--nav">
    <ul>
      <li>
        <a
          className="drawer--twitter"
          href="https://twitter.com/janhesters"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('common.twitter')}
        </a>
      </li>
      <li>
        <Link href="/about">
          <a className="drawer--about">{t('common.about')}</a>
        </Link>
      </li>
      <li>
        <SubscribeContainer />
      </li>
    </ul>
  </nav>
);

DrawerComponent.propTypes = {
  t: PropTypes.func,
};

export { DrawerComponent };
