var count = 0;

function counter() {
  count = count + 1;
  return count;
}

// things like this will affect the counter function below
// we should have protected our count var 
count = 8;

console.log(counter());
console.log(counter());
console.log(counter());

// This version works but we have created a global variable in counter which could be problematic in if any dependencies are using the coutntr variable.
