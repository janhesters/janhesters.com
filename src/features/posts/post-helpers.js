import { filter, has, pipe, pluck, prop, propEq, reject, uniqBy } from 'ramda';
import { sortByDateDesc } from 'utils/fp';

const importAll = webpackContext => webpackContext.keys().map(webpackContext);
const getMeta = pluck('meta');
const filterUniqueById = uniqBy(prop('id'));
const rejectHidden = reject(propEq('type', 'hidden'));
const filterPosts = filter(has('meta'));

const allPostMetaData = pipe(
  importAll,
  filterPosts,
  getMeta,
  sortByDateDesc,
  filterUniqueById,
  rejectHidden,
)(require.context('../../pages/', false, /\.mdx?$/));

const filterByType = type => filter(propEq('type', type), allPostMetaData);

const archivedPostMetaData = filterByType('archived');
const postMetaData = filterByType('regular');

export { allPostMetaData, archivedPostMetaData, postMetaData };
