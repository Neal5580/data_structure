// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//Solution 1
// function pyramid(n) {
//   for (let r = 0; r < n; r++) {
//     let level = "";
//     for (let c = 0; c < n - 1 + n; c++) {
//       const midpoint = Math.floor((n - 1 + n) / 2);
//       if (c <= midpoint + r && c >= midpoint - r) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

//Solution 2
function pyramid(n, row = 0, level = "") {
  const midpoint = Math.floor((n - 1 + n) / 2);

  if (n === row) {
    return;
  }

  if (level.length === n * 2 - 1) {
    console.log(level);

    pyramid(n, row + 1, "");
    return;
  }

  if (level.length <= midpoint + row && level.length >= midpoint - row) {
    level += "#";
  } else {
    level += " ";
  }
  pyramid(n, row, level);
}

module.exports = pyramid;
