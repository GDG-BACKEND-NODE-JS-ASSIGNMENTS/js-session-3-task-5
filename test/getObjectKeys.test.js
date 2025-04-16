const { getObjectKeys } = require("../index");

test("returns keys of a simple object", () => {
  expect(getObjectKeys({ a: 1, b: 2 })).toEqual(["a", "b"]);
});

test("returns empty array for empty object", () => {
  expect(getObjectKeys({})).toEqual([]);
});
