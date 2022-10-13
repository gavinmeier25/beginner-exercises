const combineArrays = require('../src/combineArrays');

test('it should combine two object arrays', () => {
  expect(
    combineArrays(
      [{ test: 'vak' }, { test: '21' }, { test: '23' }],
      [{ test: 'efew' }, { test: '232' }, { test: '23213' }],
    ),
  ).toStrictEqual([
    { test: 'vak' },
    { test: '21' },
    { test: '23' },
    { test: 'efew' },
    { test: '232' },
    { test: '23213' },
  ]);
});

test('it should combine two string arrays', () => {
  expect(combineArrays(['val', 'test', 'testing', 'k'], ['letts', 'get', 'tthis,', 'working'])).toStrictEqual([
    'val',
    'test',
    'testing',
    'k',
    'letts',
    'get',
    'tthis,',
    'working',
  ]);
});

test('it should combine two number arrays', () => {
  expect(combineArrays([1, 2, 3, 4, 5], [6, 7, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
