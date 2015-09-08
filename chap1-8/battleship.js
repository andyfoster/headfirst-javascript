var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire (enter number from 0-6):");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number");
  }  else {
    guesses++;
    console.log(guesses);
  }

  if (guess == location1 || guess == location2 || guess == location3) {
    alert("Hit");
    hits++;
    console.log("hit" + hits);
  } else {
    alert("Miss");
  }

  if (hits > 2) {
    isSunk = true;
    console.log("You win");
    alert('You sank my battleship!');
  }
}

var stats = "You took " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + (3/guesses);

alert(stats);
