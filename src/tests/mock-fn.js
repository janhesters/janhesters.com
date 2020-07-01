function fn(implementation = () => {}) {
  const mockFn = (...args) => {
    mockFn.calls.push(args);
    return implementation(...args);
  };

  mockFn.calls = [];
  return mockFn;
}

export { fn };
