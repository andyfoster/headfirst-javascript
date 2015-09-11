var emptyArray = new Array();

emptyArray[0] = 99;

var oddNumbers = new Array(3);
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;

console.log(oddNumbers);

oddNumbers.reverse();

console.log(oddNumbers);

var aString = oddNumbers.join(" - ");
console.log(aString);

var areAllOdd = oddNumbers.every(function(x) {
  return ((x % 2) !== 0);
});

console.log(areAllOdd);
