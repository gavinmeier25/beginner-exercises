const removeDuplicateNumbers = require('../src/removeDuplicateNumbers');

test.each([
  [
    [1, 2, 5, 5, 9, 10, 12],
    [1, 2, 5, 9, 10, 12],
  ],
  [
    [1, 2, 3, 3, 4, 10, 9],
    [1, 2, 3, 4, 9, 10],
  ],
])('remove duplicates', (r, e) => {
  expect(removeDuplicateNumbers(r)).toStrictEqual(e);
});
