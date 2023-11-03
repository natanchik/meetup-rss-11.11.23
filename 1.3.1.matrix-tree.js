function findNumber(matrix, k) {
  let [minRow, maxRow] = [0, matrix.length - 1];
  let midRow;
  while (minRow < maxRow) {
    midRow = minRow + Math.round((maxRow - minRow) / 2); // находим середину диапазона
    // если совпало, мы нашли наше число, выходим из ф-ции
    if (matrix[midRow][0] === k) {
      return true;
      // если середина больше искомого, смещаем max ниже середины диапазона
    } else if (matrix[midRow][0] > k) {
      maxRow = midRow - 1;
      // если середина меньше искомого, смещаем min выше середины диапазона
    } else {
      minRow = midRow + 1;
    }
  }

  let [minCol, maxCol] = [0, matrix[0].length - 1];

  while (minCol <= maxCol) {
    let mid = minCol + Math.round((maxCol - minCol) / 2);
    if (matrix[midRow][mid] === k) {
      return true;
    } else if (matrix[midRow][mid] > k) {
      maxCol = mid - 1;
    } else {
      minCol = mid + 1;
    }
  }

  return false;
}

// O(log m * log n)

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(findNumber(matrix, 5));
console.log(findNumber(matrix, 10));
