const NUMS = [1, 2, 3, 4, 5];

Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
  return this;
}

NUMS.myEach((num) => {
  console.log(`square of ${num} is ${num * num}`);
});

Array.prototype.myMap = function (func) {
  const result = []
  this.forEach( el => {
    result.push(func(el));
  });
  return result;
};

console.log(NUMS.myMap( num => num * num ));

Array.prototype.myReduce = function (func, acc) {
  const arr = this.slice(0)
  if (!acc) acc = arr.shift();

  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i]);
  }

  return acc
}

console.log(NUMS.myReduce( (total, item) => total + item ));
