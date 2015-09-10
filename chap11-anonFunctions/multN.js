function multN(n) {
  // return function multBy(m) {
  return function(m) {
    return n * m;
  };
}

var timesSix = multN(6);

console.log(timesSix(1));
console.log(timesSix(2));
console.log(timesSix(3));
console.log(timesSix(4));
console.log(timesSix(5));
console.log(timesSix(6));
