function compareNumbers(num1, num2) {
  if (num1 > num2) { // greater
    return 1;
  } else if (num1 === num2) { // equal
    return 0;
  } else { // less than
    return -1;
  }
}


function compareNumbersDesc(num1, num2) {
  if (num1 < num2) {
    return 1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return -1;
  }
}

var numbersArray = [60, 100, 50, 62, 58, 54, 54, 0, 13, 25];

numbersArray.sort(compareNumbers);
console.log(numbersArray);

numbersArray.sort(compareNumbersDesc);
console.log(numbersArray);


var alphabetArray = ["A", "B", "Z", "C", "M", "D", "a", "z"];
console.log(alphabetArray.sort());
