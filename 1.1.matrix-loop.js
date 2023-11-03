function findNumber(matrix, k) {
  for (let i = 0; i < matrix.length; i++) {
    // проходимся по строкам
    for (let j = 0; j < matrix[i].length; j++) {
      // проходимся по элементам в строке
      if (matrix[i][j] === k) {
        return true;
      }
      //  можно оптимизировать:
      if (matrix[i][j] > k) {
        if (!j) return false;
        continue;
      }
    }
  }

  return false;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(findNumber(matrix, 5));
console.log(findNumber(matrix, 10));

// O(m * n)
