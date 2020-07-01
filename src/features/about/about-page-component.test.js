import React from 'react';
import { describe } from 'riteway';
import { render, t } from 'tests/test-helpers.js';

import { AboutPageComponent } from './about-page-component.js';

describe('AboutPage component', async assert => {
  const $ = render(<AboutPageComponent t={t} />);

  assert({
    given: 'just rendering',
    should: 'display a profile photo',
    actual: $('.about-page--profile-photo').length,
    expected: 1,
  });

  assert({
    given: 'just rendering',
    should: 'display a name',
    actual: $('.about-page--name').text(),
    expected: 'Jan Hesters',
  });

  assert({
    given: 'just rendering',
    should: 'display a headline',
    actual: $('.about-page--headline').length,
    expected: 1,
  });

  assert({
    given: 'just rendering',
    should: 'render a description',
    actual: $('.about-page--description').length,
    expected: 1,
  });

  assert({
    given: 'just rendering',
    should: "display an 'Imprint' button",
    actual: $('.about-page--imprint-button').length,
    expected: 1,
  });
});
