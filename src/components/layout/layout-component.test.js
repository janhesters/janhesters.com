import React from 'react';
import { describe } from 'riteway';
import { render, t } from 'tests/test-helpers.js';

import { LayoutComponent } from './layout-component.js';

const createProps = ({
  children = <p className="child">Child</p>,
  open = false,
} = {}) => ({
  children,
  open,
});

describe('Layout component', async assert => {
  const createLayout = (props = {}) =>
    render(<LayoutComponent {...props} t={t} />);

  {
    const props = createProps();
    const $ = createLayout(props);

    assert({
      given: 'default props',
      should: 'render a header',
      actual: $('header').length,
      expected: 1,
    });
  }

  {
    const props = createProps();
    const $ = createLayout(props);

    assert({
      given: 'a child component',
      should: 'render the child component',
      actual: $('.child').length,
      expected: 1,
    });
  }
});
