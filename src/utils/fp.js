import { complement, curry, descend, isEmpty, prop, sort, tap } from 'ramda';

const isNotEmpty = complement(isEmpty);

const log = curry((msg, val) => console.log(msg, val));

const trace = msg => tap(log(msg));

const toUSDate = isoString =>
  new Date(isoString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

const sortByDateDesc = sort(descend(prop('date')));

export { isNotEmpty, sortByDateDesc, toUSDate, trace };
