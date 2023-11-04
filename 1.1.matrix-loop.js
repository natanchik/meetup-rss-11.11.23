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

// O(m * n)

const matrix = [
  [1, 4, 7, 8, 12],
  [3, 6, 9, 10, 14],
  [5, 11, 13, 16, 21],
  [10, 15, 18, 20, 26],
  [17, 22, 23, 27, 31],
];

console.log(findNumber(matrix, 13));
console.log(findNumber(matrix, 90));
