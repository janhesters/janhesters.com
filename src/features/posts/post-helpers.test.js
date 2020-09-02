import { all, equals, find, has, map, pick, pipe, prop, propEq } from 'ramda';
import { describe } from 'riteway';

import { allPostMetaData } from './post-helpers.js';

const findPostById = id => find(propEq('id', id), allPostMetaData);
const pickRelatedMetaData = pick(['id', 'title', 'date', 'slug']);
const getRelated = prop('related');
const getId = prop('id');

describe('all post meta data', async assert => {
  assert({
    given: 'all posts',
    should: 'have an id',
    actual: all(has('id'), allPostMetaData),
    expected: true,
  });

  assert({
    given: 'all posts',
    should: 'have a title',
    actual: all(has('title'), allPostMetaData),
    expected: true,
  });

  assert({
    given: 'all posts',
    should: 'have a description',
    actual: all(has('description'), allPostMetaData),
    expected: true,
  });

  assert({
    given: 'all posts',
    should: 'have a date',
    actual: all(has('date'), allPostMetaData),
    expected: true,
  });

  assert({
    given: 'all posts',
    should: 'have a slug',
    actual: all(has('slug'), allPostMetaData),
    expected: true,
  });

  {
    const relatedPosts = map(getRelated)(allPostMetaData);
    const originalPosts = map(pipe(getId, findPostById, pickRelatedMetaData))(
      relatedPosts,
    );

    assert({
      given: 'all related post',
      should: 'be included in the original posts',
      actual: equals(relatedPosts, originalPosts),
      expected: true,
    });
  }
});
