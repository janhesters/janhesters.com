import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import useDarkMode from 'use-dark-mode';

const IsDarkModeActiveContext = createContext();
const ThemeToggleContext = createContext();

function ThemeProvider({ children }) {
  const { value, toggle } = useDarkMode(true);

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
