import Calculator from "./calculator.js";

const previousOperandEl = document.querySelector('.previous');
const currentOperandEl = document.querySelector('.current');
const bntsContainer = document.querySelector('.btns-container');

const calc = new Calculator(previousOperandEl, currentOperandEl);

function calcHandler(e) {
  if (e.target.classList.contains('number')) {
    calc.appendNumber(e.target.textContent);
    calc.updateOutput();
  }

  if (e.target.hasAttribute('data-delete')) {
    calc.delete();
    calc.updateOutput();
  }

  if (e.target.hasAttribute('data-operation')) {
    calc.setOperation(e.target.textContent);
    calc.updateOutput();
  }

  if (e.target.classList.contains('equal')) {
    calc.calculate();
    calc.updateOutput();
  }

  if (e.target.hasAttribute('data-clear')) {
    calc.clear();
    calc.updateOutput();
  }

  if (e.target.hasAttribute('data-negative')) {
    calc.changeNumberSign();
    calc.updateOutput();
  }

}

bntsContainer.addEventListener('click', calcHandler);

