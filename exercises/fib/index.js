// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Solution 1
// function fib(n) {
//   let list = [];

//   for (let i = 0; i <= n; i++) {
//     if (list.length < 2) {
//       list.push(i);
//     } else {
//       list.push(list[i - 1] + list[i - 2]);
//     }
//   }
//   return list[n];
// }

//Solution 2
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

//Solution 3
//My Solution with recursion and cache
// function fib(n, cache = {}) {
//   if (n < 2) {
//     if (!cache[n]) {
//       cache[n] = n;
//     }
//     return n;
//   }

//   if (!cache[n - 1]) {
//     cache[n - 1] = fib(n - 1, cache);
//   }

//   if (!cache[n - 2]) {
//     cache[n - 2] = fib(n - 2, cache);
//   }

//   return cache[n - 1] + cache[n - 2];
// }

//Solution 4
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
