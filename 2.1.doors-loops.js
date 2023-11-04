function openDoors(n) {
  // создаем массив дверей, изначально все двери закрыты: false
  const doors = Array(n).fill(false);
  const result = [];

  // i - номер прохода
  for (let i = 1; i <= n; i++) {
    // j - индекс двери (отсчет в массиве с 0)
    for (let j = 0; j < n; j++) {
      // проходимся вдоль дверей, № двери = индекс + 1
      if ((j + 1) % i === 0) {
        doors[j] = !doors[j];
      }
      // если дверь на последнем проходе открыта - добавляем ее номер в результат
      if (i === n && doors[j]) {
        result.push(j + 1);
      }
    }
  }

  return result;
}

console.log(openDoors(1000));

// O(n ^ 2)
