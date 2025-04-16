const { getEvenNumbers } = require("../index");

test("returns even numbers from array", () => {
  expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
});

test("returns empty array if no evens", () => {
  expect(getEvenNumbers([1, 3, 5])).toEqual([]);
});

test("returns empty array if input is empty", () => {
  expect(getEvenNumbers([])).toEqual([]);
});
