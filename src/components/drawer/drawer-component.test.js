import React from 'react';
import { describe } from 'riteway';
import { render, t } from 'tests/test-helpers.js';

import { DrawerComponent } from './drawer-component.js';

describe('Drawer component', async assert => {
  const $ = render(<DrawerComponent t={t} onDismiss={() => {}} open={true} />);

  assert({
    given: 'just rendering',
    should: "render an 'About' button",
    actual: $('.drawer--about').length,
    expected: 1,
  });

  assert({
    given: 'just rendering',
    should: 'render a link to twitter',
    actual: $('.drawer--twitter').attr('href'),
    expected: 'https://twitter.com/janhesters',
  });

  assert({
    given: 'just rendering',
    should: 'render a subscribe field',
    actual: $('.subscribe--container').length,
    expected: 1,
  });
});
