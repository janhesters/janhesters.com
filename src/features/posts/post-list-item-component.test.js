import React from 'react';
import { describe } from 'riteway';
import { render, t } from 'tests/test-helpers.js';

import { PostListItemComponent } from './post-list-item-component.js';
import { createPostMetaData } from './posts-factories.js';

describe('PostListItem component', async assert => {
  const createPostListItem = (props = {}) =>
    render(<PostListItemComponent t={t} {...props} />);

  {
    const props = createPostMetaData({
      title: 'How to Write React?',
      description: 'The comprehensive React guide.',
      date: '2020-07-21',
      id: 'ckc90uw0300000jjocrtpgccs',
    });
    const $ = createPostListItem(props);

    assert({
      given: 'a post',
      should: 'render the title',
      actual: $('.post-list-item--title').text(),
      expected: props.title,
    });

    assert({
      given: 'a post',
      should: 'render the description',
      actual: $('.post-list-item--description').text(),
      expected: props.description + 'More',
    });

    assert({
      given: 'a post',
      should: 'render the date in human readable form',
      actual: $('.post-list-item--date').text(),
      expected: 'Jul 21, 2020',
    });

    assert({
      given: 'a post',
      should: "render a 'Read More' button",
      actual: $('.post-list-item--read-more-button').length,
      expected: 1,
    });
  }
});
