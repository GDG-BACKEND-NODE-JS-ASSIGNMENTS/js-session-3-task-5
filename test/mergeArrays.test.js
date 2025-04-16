const { mergeArrays } = require("../index");

test("merges two arrays correctly", () => {
  expect(mergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
});

test("works with empty arrays", () => {
  expect(mergeArrays([], [1])).toEqual([1]);
  expect(mergeArrays([1], [])).toEqual([1]);
});
