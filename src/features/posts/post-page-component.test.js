import React from 'react';
import { describe } from 'riteway';
import { render, t } from 'tests/test-helpers.js';

import { PostPageComponent } from './post-page-component.js';
import { createPostMetaData } from './posts-factories.js';

const createProps = ({
  children = <p className="foo">Hello World!</p>,
  meta = createPostMetaData({
    title: 'How to Write React?',
    description: 'The comprehensive React guide.',
    date: 'Jul 21, 2020',
    id: 'ckc90uw0300000jjocrtpgccs',
  }),
} = {}) => ({ children, meta });

describe('PostPage component', async assert => {
  const createPostPage = (props = {}) =>
    render(<PostPageComponent t={t} {...props} />);

  {
    const props = createProps();
    const $ = createPostPage(props);

    assert({
      given: 'a post with meta data',
      should: 'the render title',
      actual: $('.post-page--title').text(),
      expected: props.meta.title,
    });
  }
});
