const tribonacci = (arr, n) => {
  if (n == 0) return [];
  if (arr.length < 3) return arr;
  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
  }
  return arr;
};

console.log(tribonacci([1, 1, 1], 7));
