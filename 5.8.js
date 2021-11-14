const shortestWords = (str) => {
  let words = str.split(' ');
  let wordsLength = words.map((ele) => ele.length);
  let maxIndex = Math.max(...wordsLength);

  const result = [];
  for (let i = 0; i != words.length; i++) {
    if (wordsLength[i] == maxIndex) result.push(words[i]);
  }
  return result;
};

console.log(shortestWords('aaaa aa aaaa aaaa aaa'));
