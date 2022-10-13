const { isPalindrome } = require('../src');

test.each([
  ['mom', true],
  ['dad', true],
  ['Gavin', false],
  ['Mom', true],
  ['saippuakivikauppias', true],
  ['saiPpuakivikaupPias', true],
])('%s passed to isPalindrome returns %s', (word, e) => {
  expect(isPalindrome(word)).toBe(e);
});
