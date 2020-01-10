require("../src/forEach");

describe("the _map function", () => {
  it("should call callback function with every element in the array", () => {
    let givesAllElem = true;
    const list = [23, 45, 45, 89, 42];

    list._forEach((element, index) => {
      if (JSON.stringify(list[index]) !== JSON.stringify(element)) {
        givesAllElem = false;
      }
    });

    expect(givesAllElem).toBe(true);
  });

  it("throws error if callback param isn't a function", () => {
    expect([1, 2]._forEach).toThrow();
  });
});
