const makeArray = (n, m) =>
  Array(n)
    .fill()
    .map(() => Array(m).fill(0));

function countPaths(n, m) {
  return helper(n - 1, m - 1, makeArray(n, m));

  function helper(n, m, arr) {
    if (n < 0 || m < 0) {
      return 0;
    } else if (n === 0 && m === 0) {
      return 1;
    } else if (arr[n][m]) {
      return arr[n][m];
    }
    arr[n][m] = helper(n - 1, m, arr) + helper(n, m - 1, arr);
    return arr[n][m];
  }
}

// O(n * m)

console.log(countPaths(2, 3));
