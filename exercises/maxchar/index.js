// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  //   for (let [key, value] of Object.entries(obj)) {
  //     if (value > max) {
  //       max = value;
  //       maxChar = key;
  //     }
  //   }

  for (let each in obj) {
    if (obj[each] > max) {
      max = obj[each];
      maxChar = each;
    }
  }

  return maxChar;
}

module.exports = maxChar;
