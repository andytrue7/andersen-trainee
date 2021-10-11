function concatStrings(x, separator) {
  if (typeof x !== 'string') {
    return;
  }
  
  return function(y) {
    if(typeof y !== 'string') {
      return x;
    }

    let res = x + y;

    if (typeof separator === 'string' && y !== '') {
      res = x + separator + y; 
    }

    return concatStrings(res, separator);
  }
}

class Calculator {
  constructor(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw new Error('invalid params');
    }

    this.x = x;
    this.y = y;
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  setX(num) {
    if (!Number.isInteger(num)) {
      throw new Error('invalid params');
    }
    this.x = num;
  }

  setY(num) {
    if (!Number.isInteger(num)) {
      throw new Error('invalid params');
    }
    this.y = num;
  }

  logSum() {
    console.log(this.x + this.y);
  }

  logMul() {
    console.log(this.x * this.y);
  }

  logSub() {
    console.log(this.x - this.y);
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error('invalid operation');
    }
    console.log(this.x / this.y);
  }
}