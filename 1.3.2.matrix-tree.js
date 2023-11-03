function findNumber(matrix, k) {
  let flag = false;
  function binarySearch(min, max, k, row) {
    while (min < max) {
      let mid = min + Math.trunc((max - min) / 2); // находим середину диапазона
      const matrixEl = row ? matrix[row][mid] : matrix[mid][0];
      // если совпало, мы нашли наше число, выходим из ф-ции
      if (matrixEl === k) {
        flag = true;
        return;
        // если середина больше искомого, смещаем max ниже середины диапазона
      } else if (matrixEl > k) {
        max = mid - 1;
        // если середина меньше искомого, смещаем min выше середины диапазона
      } else {
        min = mid + 1;
      }
      // если row не задан, то возвращаем его, проверив, что значение не превышает k
      if (!row) return matrixEl > k ? --min : min;
    }
  }

  // Находим нужный ряд
  const minRow = binarySearch(0, matrix.length, k);

  if (!flag) {
    // Проверяем, есть ли в нем искомый элемент
    binarySearch(0, matrix[0].length, k, minRow);
  }

  return flag;
}

// O(log m * log n)

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(findNumber(matrix, 5));
console.log(findNumber(matrix, 10));
