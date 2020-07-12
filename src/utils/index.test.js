import cuid from 'cuid';
import { describe } from 'riteway';

describe('generate a random cuid', async assert => {
  const id = cuid();

  assert({
    given: 'nothing',
    should: `generate a random cuid: ${id}`,
    actual: id,
    expected: id,
  });
});
