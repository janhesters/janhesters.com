import React from 'react';
import { describe } from 'riteway';
import { render, t } from 'tests/test-helpers.js';

import { PostListPageComponent } from './post-list-page-component.js';

describe('PostListPage component', async assert => {
  const $ = render(<PostListPageComponent t={t} />);

  assert({
    given: 'just rendering',
    should: 'display a heading',
    actual: $('.heading').text(),
    expected: 'Jan Hesters',
  });
});
