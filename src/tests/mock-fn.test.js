import { describe } from 'riteway';

import { fn } from './mock-fn.js';

describe('fn - the mock function', async assert => {
  {
    const mockedFn = fn((a, b) => a + b);

    assert({
      given: 'calling a mocked function',
      should: 'should return the correct result',
      actual: mockedFn(21, 21),
      expected: 42,
    });

    assert({
      given: "a mocked function's calls",
      should: 'return the correct args',
      actual: mockedFn.calls,
      expected: [[21, 21]],
    });
  }
});
