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
  [1, 4, 7, 8, 12],
  [3, 6, 9, 10, 14],
  [5, 11, 13, 16, 21],
  [10, 15, 18, 20, 26],
  [17, 22, 23, 27, 31],
];

console.log(findNumber(matrix, 13));
console.log(findNumber(matrix, 90));
