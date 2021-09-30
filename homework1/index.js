function numToRadix() {
  const val1 = Number(prompt('Введите число'));
  const val2 = Number(prompt('Введите число'));
  const isInvalid = !Number.isInteger(val1) || !Number.isInteger(val2);
  const isLessThan = val1 < 1 || val2 < 2;

  if (isInvalid || isLessThan) {
    return console.log('Некорректный ввод!');
  }
  
  console.log(val1.toString(val2));
}

function calculate() {
  const val1 = Number(prompt('Введите число'));

  if (!Number.isInteger(val1) || val1 < 0) {
    return console.log('Некорректный ввод!');
  }

  const val2 = Number(prompt('Введите число'));

  if (!Number.isInteger(val2) || val2 <= 0) {
    return console.log('Некорректный ввод!');
  }

  const sum = val1 + val2;
  const division = val1 / val2;

  console.log(`Ответ: ${sum}, ${division}.`);
}