require("../src/every");

describe("the _every function", () => {
  it("should return true if all elements met a certain condition", () => {
    expect([2, 2]._every(e => e > 1)).toBe(true);
  });

  it("should return false is all element do not met a certain condition", () => {
    expect([0, 0, -1]._every(e => e > 1)).toBe(false);
  });

  it("throws error if callback param isn't a function", () => {
    expect([1, 2]._every).toThrow();
  });
});
