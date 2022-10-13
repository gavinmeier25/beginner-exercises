/**
 * Given a sentence return the longest word in the sentence
 *
 * @param {string} sentence
 * @returns {string} longest word
 */
module.exports = function (sentence) {
  // code here
  return sentence.split(' ').sort((a, b) => a.length - b.length)[sentence.split(' ').length - 1];
};
