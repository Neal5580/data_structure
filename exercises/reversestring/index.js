// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverse(str) {
  return str.split("").reduce((acc, item) => item + acc, "");
}

// Solution 2
// function reverse(str) {
//   let reverse = "";
//   for (let char of str) {
//     reverse = char + reverse;
//   }
//   return reverse;
// }

// Solution 3
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

module.exports = reverse;
