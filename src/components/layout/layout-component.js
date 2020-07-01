import { Dialog } from '@reach/dialog';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { DrawerContainer } from '../drawer/drawer-container.js';
import { HeaderContainer } from '../header/header-container.js';

const noop = () => {};

const LayoutComponent = ({
  children,
  onBurgerMenuClick = noop,
  onDismiss = noop,
  open,
  t,
}) => (
  <Fragment>
    <HeaderContainer onBurgerMenuClick={onBurgerMenuClick} open={open} />
    <Dialog
      onDismiss={onDismiss}
      isOpen={open}
      aria-label={t('common.burgerMenuContent')}
    >
      <DrawerContainer />
    </Dialog>
    {children}

    <style jsx global>{`
      html,
      body,
      #__next {
        height: 100%;
        overflow: hidden;
      }
      body {
        margin: 0;
      }
    `}</style>
  </Fragment>
);

LayoutComponent.propTypes = {
  children: PropTypes.node,
  onDismiss: PropTypes.func,
  onBurgerMenuClick: PropTypes.func,
  open: PropTypes.bool.isRequired,
  t: PropTypes.func,
};

export { LayoutComponent };
