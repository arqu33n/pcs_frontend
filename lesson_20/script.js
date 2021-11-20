`use strict`;
function getFibonacci() {
  let prev, next;

  return function countFibonacci() {
    if (!next) {
      prev = 0;
      next = 1;
    } else {
      const result = prev + next;
      prev = next;
      next = result;
    }
    console.log(next);
  };
}

const fibonacci = getFibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
