import { withTranslation } from 'hocs/localization.js';
import { withIsDarkModeActive, withThemeToggle } from 'hocs/theme.js';
import { compose } from 'ramda';

import { DarkModeToggle } from './dark-mode-toggle-component.js';

const DarkModeToggleContainer = compose(
  withIsDarkModeActive,
  withThemeToggle,
  withTranslation,
)(({ toggle, ...ownProps }) => {
  function handleThemeChange() {
    toggle();
  }

  const props = {
    onThemeChange: handleThemeChange,
    ...ownProps,
  };

  return <DarkModeToggle {...props} />;
});

export { DarkModeToggleContainer };
