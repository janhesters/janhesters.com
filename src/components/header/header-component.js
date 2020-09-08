import VisuallyHidden from '@reach/visually-hidden';
import classNames from 'classnames';
import { DarkModeToggleContainer } from 'features/dark-mode/dark-mode-toggle-container.js';
import { SubscribeContainer } from 'features/subscribe/subscribe-container';
import Link from 'next/link.js';
import PropTypes from 'prop-types';
import React from 'react';

const noop = () => {};

const HeaderComponent = ({
  onBurgerMenuClick = noop,
  onCancelClick = noop,
  onSubscribeClick = noop,
  open,
  showSubscribe,
  subscribeRef,
  t,
}) => (
  <header>
    <div className="header-title-container">
      <h1 className="header--title">
        <Link href="/">
          <a>{t('common.janHesters')}</a>
        </Link>
      </h1>

      <DarkModeToggleContainer
        className="theme-toggle theme-toggle--mobile"
        name="theme-toggle"
      />

      <button className="burger-menu-button" onClick={onBurgerMenuClick}>
        <VisuallyHidden>
          {open ? t('common.closeBurgerMenu') : t('common.openBurgerMenu')}
        </VisuallyHidden>
        <div
          aria-hidden={true}
          className={classNames('burger', 'burger-squeeze', { open })}
          style={{ fontSize: '8px' }}
        >
          <div className="burger-lines"></div>
        </div>
      </button>
    </div>

    {showSubscribe && (
      <div className="header--subscribe-container">
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <SubscribeContainer autoFocus={true} onCancelClick={onCancelClick} />
        <button className="header--cancel-button" onClick={onCancelClick}>
          {t('common.cancel')}
        </button>
      </div>
    )}

    <nav className="header--nav">
      <ul>
        <li>
          <a
            className="header--twitter"
            href="https://twitter.com/janhesters"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('common.twitter')}
          </a>
        </li>
        <li>
          <Link href="/about">
            <a className="header--about">{t('common.about')}</a>
          </Link>
        </li>
        <li>
          <button
            className="header--subscribe-button"
            onClick={onSubscribeClick}
            ref={subscribeRef}
          >
            {t('common.subscribe')}
          </button>
        </li>
        <li>
          <DarkModeToggleContainer
            className="theme-toggle theme-toggle--desktop"
            name="theme-toggle"
          />
        </li>
      </ul>
    </nav>
  </header>
);

HeaderComponent.propTypes = {
  onBurgerMenuClick: PropTypes.func,
  onCancelClick: PropTypes.func,
  onSubscribeClick: PropTypes.func,
  open: PropTypes.bool.isRequired,
  showSubscribe: PropTypes.bool.isRequired,
  subscribeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  t: PropTypes.func.isRequired,
};

export { HeaderComponent };
