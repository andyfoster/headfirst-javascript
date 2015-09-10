function makeCounter() {
  var counter = 0;

  function increment() {
    counter++;
    return counter;
  }
  return increment;
}

var incrCounter = makeCounter();

console.log(incrCounter());
console.log(incrCounter());
console.log(incrCounter());
console.log(incrCounter());
