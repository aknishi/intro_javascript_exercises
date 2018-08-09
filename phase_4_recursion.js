function range(start, end) {
  if (start === end) return [];
  let r = range(start, end - 1);
  r.push(end-1);
  return r;
}

console.log(`range(3, 10) = ${range(3, 10)}`);

function sumRec(arr) {
  if (arr.length === 0) return 0
  return arr[0] + sumRec(arr.splice(1));
}

console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);


function exp1(base, exponent) {
  return exponent === 0 ? 1 : (base * exp1(base, exponent - 1));
}

console.log(`exp1(2, 4) = ${exp1(2, 4)}`);

function exp2(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent > 0) {
    return exp2(base, exponent - 1) * base;
  } else {
    return exp2(base, exponent + 1) * 1/base;
  }
}

console.log(`exp2(2, 4) =  ${exp2(2, 4)}`);
console.log(`exp2(2, 5) =  ${exp2(2, 5)}`);


function fibonacci(n) {
  const arr = [0,1]
  if (n < 3) return arr.slice(0,n);

  let lastSeq = fibonacci(n-1);
  lastSeq.push(lastSeq[lastSeq.length - 1] + lastSeq[lastSeq.length - 2]);
  return arr;
}

console.log(`fibonacci(5) = ${fibonacci(5)}`);

function deepDup(arr) {
  return arr.map(el =>
    el.constructor.name === 'Array' ? deepDup(el) : el
  );
}

const array = [[2],3];
const dupedArray = deepDup(array);
console.log(`deepDup original = ${JSON.stringify(array)}`);

dupedArray[0].push(4);

console.log(`deepDup original = ${JSON.stringify(array)} (should not be mutated)`);
console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);

function bsearch(arr, target) {
  if (arr.length === 0) return null;

  const mid = Math.floor(arr.length/2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) {
    const left = arr.slice(0, mid)
    return bsearch(left, target);
  } else {
    const right = arr.slice(mid + 1)
    const result = bsearch(target);
    return result === -1 ? -1 : mid + 1 + result;
  }

}

console.log(`bsearch([1, 2, 3], 3) = ${bsearch([1, 2, 3], 3)}`);
console.log(`bsearch([1, 2, 3], 2.5) = ${bsearch([1, 2, 3], 2.5)}`);

Array.prototype.mergeSort = function (func) {
  if (this.length <= 1) return this;
  if (!func) {
    func = (left, right) => {
      return left < right ? -1 : left > right ? 1 : 0;
    }
  }

  let mid = Math.floor(this.length/2)

  const left = (this.slice(0, mid)).mergeSort(func)
  const right = (this.slice(mid)).mergeSort(func)

  return left.merge(right, func);
}

Array.prototype.merge = function (arr, func) {
  let result = [];

  while (this.length > 0 && arr.length > 0) {
    if (func(this[0], arr[0]) === -1) {
      result.push(this.shift());
    } else {
      result.push(arr.shift());
    }
  }
  return result.concat(this).concat(arr);
};

console.log(`[4, 5, 2, 3, 1].mergeSort = ${([4, 5, 2, 3, 1].mergeSort())}`);


function subsets(array) {
  if (array.length === 0) return [[]];
  const last = array[array.length - 1];
  const subs = subsets(array.slice(0, array.length - 1));
  return subs.concat(subs.map( (el) => {
    let result = el.slice(0);
    result.push(last);
    return result;
  }));
}

console.log(`subsets([1, 3, 5]) = ${JSON.stringify(subsets([1, 3, 5]))}`);
