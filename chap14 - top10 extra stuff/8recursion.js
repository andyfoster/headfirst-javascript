//Recursion is when you call the function from inside the function


function fibonacci(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return (fibonacci(n-1) + fibonacci(n-2));
}

// function fibonacci(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return (fibonacci(n-1) + fibonacci(n-2));
//   }
// }

var start = Date.now();
for (var i = 0; i < 40; i++) {
  // console.log("The fibonacci of " + i + " is " + fibonacci(i));
  console.log(fibonacci(i) + ", ");
}
var end = Date.now();

console.log(end-start + "ms");

// Make sure you have a base case.
// If recursive code never reaches a base case where the computation ends, it will run forever, like an infinite loop. In other words, the function will continue calling
// itself over and over, consuming resources until your browser can’t take it anymore. So if you write recursive code and your page isn’t responding, figure out how to make sure you’re getting to the base case.
