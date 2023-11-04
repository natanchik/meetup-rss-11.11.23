function findNumber(matrix, k) {
  for (let i = 0; i < matrix.length; i++) {
    let [minCol, maxCol] = [0, matrix[0].length - 1];
    while (minCol <= maxCol) {
      let mid = minCol + Math.round((maxCol - minCol) / 2); // находим середину диапазона
      // если совпало, мы нашли наше число, выходим из ф-ции
      if (matrix[i][mid] === k) {
        return true;
        // если середина больше искомого, смещаем max ниже середины диапазона
      } else if (matrix[i][mid] > k) {
        maxCol = mid - 1;
        // если середина меньше искомого, смещаем min выше середины диапазона
      } else {
        minCol = mid + 1;
      }
    }
  }

  return false;
}

// O(m * log n)

const matrix = [
  [1, 4, 7, 8, 12],
  [3, 6, 9, 10, 14],
  [5, 11, 13, 16, 21],
  [10, 15, 18, 20, 26],
  [17, 22, 23, 27, 31],
];

console.log(findNumber(matrix, 15));
console.log(findNumber(matrix, 90));
