function countPaths(n, m) {
  // если выходит за пределы матрицы - возвращаем 0
  if (n < 1 || m < 1) {
    return 0;
    // если находится в левом нижнем углу - возвращаем 1
  } else if (n === 1 && m === 1) {
    return 1;
    // в остальных случаях - находим значения для предшествующих клеток
  } else {
    return countPaths(n - 1, m) + countPaths(n, m - 1);
  }
}

// O(2 ^ (n + m))

console.log(countPaths(2, 3));
