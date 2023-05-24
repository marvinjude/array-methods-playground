require('../src/filter');

describe('the _filter function', () => {
  it('should return [1,5] given [1, 5, 7]', () => {
    expect([1, 5, 7]._filter((e) => e < 7)).toEqual([1, 5]);
  });

  it("throws error if callback param isn't a function", () => {
    expect([1, 2]._filter).toThrow();
  });

  it('should return an empty array if nothing was returned from callback', () => {
    expect([1, 2]._filter(() => {})).toEqual([]);
  });
});
