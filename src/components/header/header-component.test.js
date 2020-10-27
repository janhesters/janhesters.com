import React from 'react';
import { describe } from 'riteway';
import { render, t } from 'tests/test-helpers.js';

import { HeaderComponent } from './header-component.js';

const createProps = ({ open = false, showSubscribe = false } = {}) => ({
  open,
  showSubscribe,
});

describe('Header component', async assert => {
  const createHeader = (props = {}) =>
    render(<HeaderComponent t={t} {...props} />);

  {
    const props = createProps();
    const $ = createHeader(props);

    assert({
      given: 'just rendering',
      should: "display a title with 'Jan Hesters'",
      actual: $('h1').text(),
      expected: 'Jan Hesters',
    });

    assert({
      given: 'just rendering',
      should: "render an 'About' button",
      actual: $('.header--about').length,
      expected: 1,
    });

    assert({
      given: 'just rendering',
      should: 'render a link to twitter',
      actual: $('.header--twitter').attr('href'),
      expected: 'https://twitter.com/janhesters',
    });

    assert({
      given: 'just rendering',
      should: "render a 'Subscribe' button",
      actual: $('.header--subscribe-button').length,
      expected: 1,
    });

    assert({
      given: 'just rendering',
      should: 'render a burger menu',
      actual: $('.burger-menu-button').length,
      expected: 1,
    });

    assert({
      given: 'just rendering',
      should: 'NOT render a subscribe container',
      actual: $('.subscribe--container').length,
      expected: 0,
    });

    assert({
      given: 'just rendering',
      should: 'NOT render a cancel button',
      actual: $('.header--cancel-button').length,
      expected: 0,
    });
  }

  {
    const props = createProps({ showSubscribe: true });
    const $ = createHeader(props);

    assert({
      given: 'with show subscribe (= true)',
      should: 'render a subscribe container',
      actual: $('.subscribe--container').length,
      expected: 1,
    });

    assert({
      given: 'with show subscribe (= true)',
      should: 'render a cancel button',
      actual: $('.header--cancel-button').length,
      expected: 1,
    });
  }
});
