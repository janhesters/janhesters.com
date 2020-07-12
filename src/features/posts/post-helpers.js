import {
  descend,
  evolve,
  filter,
  map,
  pipe,
  pluck,
  prop,
  propEq,
  reject,
  sort,
  uniqBy,
} from 'ramda';

const importAll = webpackContext => webpackContext.keys().map(webpackContext);
const getMeta = pluck('meta');
const sortByDateDesc = sort(descend(prop('date')));
const filterUniqueById = uniqBy(prop('id'));
const rejectHidden = reject(propEq('type', 'hidden'));

const toUSDate = isoString =>
  new Date(isoString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

const allPostMetaData = pipe(
  importAll,
  getMeta,
  sortByDateDesc,
  filterUniqueById,
  map(evolve({ date: toUSDate })),
  rejectHidden,
)(require.context('../../pages/', false, /\.mdx?$/));

const filterByType = type => filter(propEq('type', type), allPostMetaData);

const archivedPostMetaData = filterByType('archived');
const postMetaData = filterByType('regular');

export { archivedPostMetaData, postMetaData };
