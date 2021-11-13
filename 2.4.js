const findUniq = (arr) => {
  let index1 = null;
  let index2 = null;
  for (let i = 0; i != arr.length; i++) {
    if (arr[i] != arr[i + 1] && arr[i] == arr[i + 2]) index1 = arr[i + 1];
    else if (arr[i] == arr[i + 1] && arr[i] != arr[i + 2]) index1 = arr[i + 2];
    else if (arr[i + 1] == arr[i + 2] && arr[i] != arr[i + 2]) index1 = arr[i];
    if (index1 != null) return index1;
  }
};
console.log(findUniq([1, 1, 1, 2, 1, 1]));
