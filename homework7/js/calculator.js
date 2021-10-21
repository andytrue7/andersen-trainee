export default class Calculator {
  constructor(previousOperandEl, currentOperandEl) {
    this.previousOperandEl = previousOperandEl;
    this.currentOperandEl = currentOperandEl;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = null; 
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(num) {
    if (num === '.' && this.currentOperand.includes('.')) {
      return;
    }
    
    this.currentOperand += num;
  }

  setOperation(operation) {
    if (this.currentOperand === '') {
      return;
    }

    if (this.previousOperand !== '') {
      this.calculate();
    }
    
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  changeNumberSign() {
    this.currentOperand = -Number(this.currentOperand);
  }

  calculate() {
    let res;
    
    const prev = Number(this.previousOperand);
    const curr = Number(this.currentOperand);

    if (isNaN(prev) || isNaN(curr)) {
      return;
    }

    switch (this.operation) {
      case '+':
        res = prev + curr;
        break;
      case '-':
        res = prev - curr;
        break;
      case 'x':
        res = prev * curr;
        break;
      case '/':
        res = prev / curr;
        break;
      default:
        return;  
    }

    if (!Number.isFinite(res)) {
      return;  
    }

    this.currentOperand = res;
    this.operation = null;
    this.previousOperand = '';
  }

  updateOutput() {
    this.currentOperandEl.textContent = this.formatFloatNumber(this.currentOperand);
    if (this.operation) {
      this.previousOperandEl.textContent = `${this.formatFloatNumber(this.previousOperand)} ${this.operation}`; 
    } else {
      this.previousOperandEl.textContent = '';
    }
  }

  formatFloatNumber(num) {
    const stringNum = num.toString();
    let integerPart = parseFloat(stringNum.split('.')[0]);
    let decimalPart = stringNum.split('.')[1];
    
    if (!integerPart) {
      integerPart = 0;
    }
    
    if (decimalPart) {
      if (decimalPart.length > 8) {
      decimalPart = decimalPart.slice(0, 8);  
      }
      return `${integerPart}.${decimalPart}`;
    }

    return integerPart;
  }
}