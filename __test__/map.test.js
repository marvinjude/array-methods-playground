require("../src/map");

describe("the _map function", () => {
  it("should return [1,2] given [2,3]", () => {
    expect([1, 2]._map(e => e + 1)).toEqual([2, 3]);
  });

  it("throws error if callback param isn't a function", () => {
    expect([1, 2]._map).toThrow();
  });

  it("should return 'undefined' for each slot if nothing was returned from callback", () => {
    expect([1, 2]._map(() => {})).toEqual([undefined, undefined]);
  });
});
