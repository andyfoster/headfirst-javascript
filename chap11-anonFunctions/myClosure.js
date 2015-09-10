function makeCount() {

  var count = 0;

  function counter() {
    count++;
    return count;
  }
  return counter;
}

var countForMe = makeCount();

console.log(countForMe());
console.log(countForMe());
console.log(countForMe());
console.log(countForMe());
console.log(countForMe());
