function makePassword(password) {
  // return function guess(passwordGuess) {
  // can do either
  return function(passwordGuess) {
    return (passwordGuess === password);
  };
}

var tryGuess = makePassword('abc');

console.log(tryGuess('abb'));
console.log(tryGuess('abe'));
console.log(tryGuess('abr'));
console.log(tryGuess('abc'));
