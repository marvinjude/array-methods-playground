require("../src/find");

describe("the _find function", () => {
  it("returns current element if callbackFn returns true ", () => {
    const value = [20, 50, 98].find(element => element > 20);
    const value2 = [20, 50, 98].find(() => true);
    expect(value).toBe(50);
    expect(value2).toBe(20);
  });

  it("returns undefined is array length is less than 0", () => {
    expect([].find(() => true)).toBeUndefined();
  });

  it("throws error if callback param isn't a function", () => {
    expect([1, 2]._find).toThrow();
  });
});
