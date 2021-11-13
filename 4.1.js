const fibonacci = (n) => {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n - 1];
};

console.log(fibonacci(5));
