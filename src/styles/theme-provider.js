import PropTypes from 'prop-types';
import React, { createContext, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';

import { determineDarkMode } from './determine-dark-mode.js';

const defaultIsDarkMode = true;

const IsDarkModeActiveContext = createContext(defaultIsDarkMode);
const ThemeToggleContext = createContext();
function ThemeProvider({ children }) {
  const { value, toggle, enable, disable } = useDarkMode(defaultIsDarkMode);

  // useEffect(() => {
  //   const isDarkMode = determineDarkMode();
  //   console.log('isdarkmode active', isDarkMode);
  //   if (isDarkMode) {
  //     enable();
  //     console.log('enable called');
  //   } else {
  //     disable();
  //     console.log('disable called');
  //   }
  // }, [disable, enable]);

  return (
    <IsDarkModeActiveContext.Provider value={value}>
      <ThemeToggleContext.Provider value={toggle}>
        {children}
      </ThemeToggleContext.Provider>
    </IsDarkModeActiveContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export { IsDarkModeActiveContext, ThemeProvider, ThemeToggleContext };
