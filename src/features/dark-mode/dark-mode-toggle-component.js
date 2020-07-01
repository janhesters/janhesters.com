import PropTypes from 'prop-types';
import React from 'react';
import Toggle from 'react-toggle';

const Sun = () => (
  <span aria-label="Sun" className="theme-toggle--icon" role="img">
    ☀️
  </span>
);

const Moon = () => (
  <span aria-label="Moon" className="theme-toggle--icon" role="img">
    🌔
  </span>
);

const DarkModeToggle = ({
  isDarkModeActive,
  onThemeChange = () => {},
  t,
  ...props
}) => (
  <Toggle
    aria-label={isDarkModeActive ? t('common.darkMode') : t('common.lightMode')}
    checked={isDarkModeActive}
    icons={{ unchecked: <Sun />, checked: <Moon /> }}
    onChange={onThemeChange}
    {...props}
  />
);

DarkModeToggle.propTypes = {
  isDarkModeActive: PropTypes.bool.isRequired,
  onThemeChange: PropTypes.func,
  t: PropTypes.func.isRequired,
};

export { DarkModeToggle };
