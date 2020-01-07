require("../src/some");

describe("the _every function", () => {
  it("should return true is at least one element met a certain condition", () => {
    expect([2, 1]._some(e => e > 1)).toBe(true);
  });

  it("should return false if all elements do not a certain condition", () => {
    expect([0, 0, -1]._some(e => e > 10)).toBe(false);
  });

  it("throws error for if callbackFn param isn't a function", () => {
    expect([1, 2]._some).toThrow();
  });
});
