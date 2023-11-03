function findNumber(matrix, k) {
  // начинаем поиск с правого верхнего угла
  let row = 0;
  let col = matrix.length - 1;

  while (row < matrix.length && col >= 0) {
    // если совпало, искомое число найдено
    if (matrix[row][col] === k) {
      return true;
      // если число больше k, уменьшаем col, сдвигаемся влево
    } else if (matrix[row][col] > k) {
      col--;
      // если число меньше k, увеличиваем row, сдвигаемся вниз
    } else {
      row++;
    }
  }
  // если не нашли:
  return false;
}

// O(m + n)

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(findNumber(matrix, 5));
console.log(findNumber(matrix, 10));
