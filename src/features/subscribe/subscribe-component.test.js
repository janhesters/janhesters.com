import React from 'react';
import { describe } from 'riteway';
import { render, t } from 'tests/test-helpers.js';

import { SubscribeComponent } from './subscribe-component.js';

const createProps = ({ disabled = true, email = 'foo@bar.com' } = {}) => ({
  disabled,
  email,
});

describe('Subscribe component', async assert => {
  const createSubscribe = (props = {}) =>
    render(<SubscribeComponent {...props} t={t} />);

  {
    const props = createProps();
    const $ = createSubscribe(props);

    assert({
      given: 'just rendering',
      should: 'render an email input',
      actual: $('.subscribe--email-input').length,
      expected: 1,
    });
  }

  {
    const props = createProps();
    const $ = createSubscribe(props);

    assert({
      given: 'just rendering',
      should: "render a 'Subscribe' button",
      actual: $('.subscribe--button').length,
      expected: 1,
    });
  }
});
