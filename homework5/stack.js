class Stack {
  constructor(maxLength = 10) {
    if (!Number.isInteger(maxLength) || maxLength < 1) {
      throw new Error('invalid length');
    }
    this.length = 0;
    this.maxLength = maxLength;
    this.top = null;
  }

  push(elem) {
    const prev = this.top;
    const node = new Node(elem);
    node.prev = prev;
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

class Node {
  constructor(elem) {
    this.elem = elem;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(elem) {
    if (this.length === 0) {
      this.head = new Node(elem);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new Node(elem);
    }

    this.length++;
  }

  prepend(elem) {
    const node = new Node(elem);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  find(elem) {
    let current = this.head;

    while (current) {
      if (current.elem === elem) {
        return current.elem;
      }

      current = current.next;
    }

    return null;
  }

  toArray() {
    let current = this.head;
    const newArr = [];
    
    while (current) {
      newArr.push(current.elem);
      current = current.next;
    }

    return newArr;
  }

  static fromIterable(iterable) {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('param is not iterable');
    }

    const list = new LinkedList();

    for (const value of iterable) {
      list.append(value);  
    }

    return list;

  }
}

module.exports = { Stack };