const biggestWordInSentence = require('../src/biggestWordInSentence');

test.each([
  ['This can be superrrrr dope', 'superrrrr'],
  ['We can really do this thing', 'really'],
  ['Oh there goes my guy', 'there'],
  ['ok', 'ok'],
])('biggest word in the sentence, %s = %s', (sentence, word) => {
  expect(biggestWordInSentence(sentence)).toBe(word);
});
