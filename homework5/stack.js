class Stack {
  constructor(maxLength = 10) {
    if (!Number.isInteger(maxLength)) {
      throw new Error('invalid length');
    }
    this.length = 0;
    this.maxLength = maxLength;
    this.top = null;
  }

  push(elem) {
    const prev = this.top;
    const node = { prev, elem };
    this.top = node;
    if (this.length > this.maxLength) {
      throw new Error('stack is oversized');
    }
    this.length++;
  }

  pop() {
    const current = this.top;
    if (!current) {
      throw new Error('stack is empty');
    }
    this.top = current.prev;
    this.length--;
    return current.elem;
  }

  peek() {
    return this.top ? this.top.elem : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  toArray() {
    let current = this.top;
    const res = [];
    let i = 0;
    while (current) {
      res[i] = current.elem;
      current = current.prev;
      i++;
    }
    return res;
  }

  static fromIterable(iterable) {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('param is not iterable');
    }

    const stack = new Stack(iterable.length);
    
    for (const value of iterable) {
      stack.push(value);  
    }

    return stack;
  }
}

module.exports = { Stack };