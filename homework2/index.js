function makeObjectDeepCopy(val) {
  if (val === null || typeof val !== 'object') {
    return val;
  }

  const res = Array.isArray(val) ? [] : {};

  for (const key in val) {
    res[key] = makeObjectDeepCopy(val[key]);
  }

  return res;
}

function selectFromInterval(arr, val1, val2) {
  isArray(arr);
  isArrContainsIntegers(arr);
  isIntervalCorrect(val1, val2);

  const resArr = [];

  for (let i = 0; i < arr.length; i++) {
    addIfBoundariesEqual(resArr, val1, val2, arr[i]);
    addIfFirstBoundaryLess(resArr, val1, val2, arr[i]);
    addIfFirstBoundaryMore(resArr, val1, val2, arr[i]); 
  }

  return resArr;
}

function isArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('first param must be an array');
  }
  return true;
}

function isArrContainsIntegers(arr) {
  if (!arr.every(Number.isInteger)) {
    throw new Error('array must contain only integers');
  }
  return true;
}

function isIntervalCorrect(val1, val2) {
  if (!Number.isInteger(val1) || !Number.isInteger(val2)) {
    throw new Error('second and third params must be integers');
  }
  return true;
}

function addIfBoundariesEqual(resArr, val1, val2, elem) {
  if (val1 === val2) {
    if (elem === val1 && elem === val2) {
      resArr.push(elem);
    }
  }
}

function addIfFirstBoundaryLess(resArr, val1, val2, elem) {
  if (val1 < val2) {
    if (elem >= val1 && elem <= val2) {
      resArr.push(elem);
    }
  }
}

function addIfFirstBoundaryMore(resArr, val1, val2, elem) {
  if (val1 > val2) {
    if (elem <= val1 && elem >= val2) {
      resArr.push(elem);
    }
  } 
}

const myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (!Number.isInteger(this.current) || !Number.isInteger(this.last)) {
          throw new Error('Error');
        }

        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        }

        return { done: true };
      }
    }
  }
};