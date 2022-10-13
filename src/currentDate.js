/**
 * Return the current date in the format
 * month/day/year
 *
 * if today was October 25, 1993 it should return 10/25/1993
 * as a string
 */
module.exports = function () {
  // code here
  const d = new Date();

  return d.toLocaleDateString();
};
