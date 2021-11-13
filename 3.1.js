const nbYear = (p0, percent, aug, p) => {
  percent = percent / 100;
  let i = 1;
  while (true) {
    let newPop = p0 + percent * p0 + aug;
    if (newPop >= p) return i;
    i++;
    p0 = newPop;
  }
};
console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500, 5, 100, 5000));
