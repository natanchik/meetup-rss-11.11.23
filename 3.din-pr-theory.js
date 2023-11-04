// Основа рекурсии
countPaths(n, m) = countPaths(n - 1, m) + countPaths(n, m - 1)

// База рекурсии
countPaths(0, m) = countPaths(n, 0) = 0

countPaths(1, 1) = 1
