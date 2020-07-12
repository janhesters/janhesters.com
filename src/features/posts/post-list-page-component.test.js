import React from 'react';
import { describe } from 'riteway';
import { render, t } from 'tests/test-helpers.js';

import { PostListPageComponent } from './post-list-page-component.js';
import { createPostMetaData } from './posts-factories.js';

const createProps = ({
  postMetaData = [
    createPostMetaData({
      title: 'How to Write React?',
      description: 'The comprehensive React guide.',
      date: '2020-01-01',
      id: 'ckc90uw0300000jjocrtpgccs',
    }),
    createPostMetaData({
      title: 'Ask Better Questions',
      description: '... and why it is lindy.',
      date: '2020-03-19',
      id: 'ckc92p86g0000pajoa2dj1qos',
    }),
  ],
} = {}) => ({ postMetaData });

describe('PostListPage component', async assert => {
  const createPostList = (props = {}) =>
    render(<PostListPageComponent t={t} {...props} />);

  {
    const props = createProps();
    const $ = createPostList(props);

    assert({
      given: 'an array of post meta data',
      should: 'render each post meta data',
      actual: $('.post-list-item').length,
      expected: props.postMetaData.length,
    });
  }

  {
    const props = createProps();
    const $ = createPostList(props);

    assert({
      given: 'just rendering',
      should: 'render a link to the archive',
      actual: $('.post-list-page--archive-link').length,
      expected: 1,
    });
  }
});
