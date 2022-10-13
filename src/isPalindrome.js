/**
 * Determine if the word is a palindrome
 *
 * A palindrome is a word that is the same forwards as it is backwards
 *
 * Handle null or undefined words
 *
 * if a word is only one character is consider correct
 *
 * Should also consider the case of the letters not to matter
 * Mom is true
 * so is mom
 *
 * @param {string} word
 *
 * @return {boolean}
 */
module.exports = function (word) {
  return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
};
