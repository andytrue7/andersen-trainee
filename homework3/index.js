Array.prototype.myFilter = function(fn, obj) {
  const newArr = [];
  
  this.forEach((el, i, array) => {
    if (fn.call(obj, el, i, array)) {
      newArr.push(el);
    }
  });
  
  return newArr;
}

function createDebounceFunction(fn, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  }
}