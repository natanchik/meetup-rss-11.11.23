function openDoors(n) {
  // находим количество идеальных квадратов
  const max = Math.trunc(Math.sqrt(n));
  const result = [];

  // добавляем в результат идеальные квадраты
  for (i = 1; i <= max; i++) {
    result.push(i ** 2);
  }

  return result;
}

console.log(openDoors(1000));
