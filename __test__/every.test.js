require("../src/every");

describe("the _every function", () => {
  it("should return true is all element met a certain condition", () => {
    expect([2, 2]._every(e => e > 1)).toBe(true);
  });

  it("should return false is all element do not a certain condition", () => {
    expect([0, 0, -1]._every(e => e > 1)).toBe(false);
  });

  it("throws error for if callbackFn param isn't a function", () => {
    expect([1, 2]._every).toThrow();
  });
});
