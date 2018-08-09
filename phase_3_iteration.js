Array.prototype.bubbleSort = function (func) {
  let result = this.slice(0);

  if (!func) {
    func = (left,right) => {
      return left < right ? -1 : left > right ? 1 : 0;
    }
  }

  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      let j = i + 1;
      if (func(result[i], result[j]) === 1) {
        [result[i], result[j]] = [result[j], result[i]];
        sorted = false;
      }
    }
  }
  return result;
}

console.log([5, 3, 4, 2, 1].bubbleSort());


String.prototype.substrings = function () {
  let substrings = [];

  for (let start = 0; start < this.length; start++) {
    for (let end = start + 1; end <= this.length; end++) {
      substrings.push(this.slice(start, end));
    }
  }

  return substrings;
};

console.log("abc".substrings());
