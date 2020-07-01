import React from 'react';
import { describe } from 'riteway';
import { render, t } from 'tests/test-helpers.js';

import { DarkModeToggle } from './dark-mode-toggle-component.js';

const createProps = ({ className, isDarkModeActive = false } = {}) => ({
  className,
  isDarkModeActive,
});

describe('DarkModeToggle component', async assert => {
  const createDarkModeToggle = (props = {}) =>
    render(<DarkModeToggle {...props} t={t} />);

  {
    const props = createProps({ className: 'foo' });
    const $ = createDarkModeToggle(props);

    assert({
      given: 'a class name',
      should: 'apply the class name',
      actual: $('.foo').length,
      expected: 1,
    });
  }

  {
    const props = createProps();
    const $ = createDarkModeToggle(props);

    assert({
      given: 'light mode',
      should: 'display a light mode label',
      actual: $("[aria-label='Light Mode']").length,
      expected: 1,
    });
  }

  {
    const props = createProps({ isDarkModeActive: true });
    const $ = createDarkModeToggle(props);

    assert({
      given: 'dark mode',
      should: 'display a dark mode label',
      actual: $("[aria-label='Dark Mode']").length,
      expected: 1,
    });
  }
});
