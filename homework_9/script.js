'use strict';

function makeFibonacciFunction() {
  let i = 1;
  let next = 0;
  return function fanc() {
    i = i + next;
    next = i - next;
    return next;
  }
}

const fibonacci = makeFibonacciFunction();

console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());