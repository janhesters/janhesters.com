import React, { useContext } from 'react';
import {
  IsDarkModeActiveContext,
  ThemeToggleContext,
} from 'styles/theme-provider.js';

const withIsDarkModeActive = Component => props => {
  const isDarkModeActive = useContext(IsDarkModeActiveContext);
  console.log(isDarkModeActive);

  return <Component isDarkModeActive={isDarkModeActive} {...props} />;
};

const withThemeToggle = Component => props => {
  const toggle = useContext(ThemeToggleContext);

  return <Component toggle={toggle} {...props} />;
};

export { withIsDarkModeActive, withThemeToggle };
