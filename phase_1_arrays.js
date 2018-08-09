Array.prototype.uniq = function () {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

Array.prototype.twoSum = function () {
  let result = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.transpose = function () {
  let result = [];
  for (let col = 0; col < this[0].length; col++) {
    newRow = []
    for (let row = 0; row < this.length; row ++) {
      newRow.push(this[row][col])
    }
    result.push(newRow);
  }
  return result;
};

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());
