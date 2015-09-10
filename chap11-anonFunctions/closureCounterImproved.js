function makeCounter(){

  var count = 0;

  function counter() {
    count = count + 1;
    return count;
  }
  return counter;
}

// This makes no difference to the below counter because the count variable is local to the enviornment inside the closure.
count = 8;

// When we call makeCounter, we get back a closure: a function with an environment
// This is the point at which you set count to 0
var doCount = makeCounter();

// Count has already been set so you are now actually  running counter() each time
console.log(doCount());
console.log(doCount());
console.log(doCount());
