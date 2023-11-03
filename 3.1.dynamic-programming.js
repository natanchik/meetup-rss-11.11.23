function countPaths(n, m) {
  if (n < 1 || m < 1) {
    return 0;
  } else if (n === 1 && m === 1) {
    return 1;
  } else {
    return countPaths(n - 1, m) + countPaths(n, m - 1);
  }
}

// O(2 ^ (n + m))

console.log(countPaths(2, 3));
