var view = {

  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },

  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },

  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }

};

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [
    { locations: ["", "", ""], hits: ["", "", ""] },
    { locations: ["", "", ""], hits: ["", "", ""] },
    { locations: ["", "", ""], hits: ["", "", ""] }
  ],

  generateShipLocations: function() {
    var locations;
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },

  generateShip: function(){
    var direction = Math.floor(Math.random() * 2);
    var row, col;

    if (direction === 1) { // horizonal
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    } else {
      // generate a starting location for a vertical ship
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }

    var newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        // add location to array for new horizontal ship
        newShipLocations.push(row + "" + (col + i));
      } else {
        // add location for new vertical ship
        newShipLocations.push((row + i) + "" + col);
      }
    }
    return newShipLocations;

  },

  collision: function(locations) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = model.ships[i];

      // check each spot along the length
      for (var j = 0; j < locations.length; j++) {
        // if the location is found, return true
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false; // no collision
  },


  fire: function(guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("That's a HIT!");
        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed");
    return false;
  },

  isSunk: function(ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  }

};

var controller = {
  guesses: 0,

  processGuess: function(guess) {
    var location = this.parseGuess(guess);
    if (location) {
      this.guesses++;
      var hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage("You sank all my battleships in " + this.guesses + " guesses");
      }
    }
  },

  parseGuess: function(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    // 1. check for length
    if (guess === null || guess.length !== 2) {
      alert("Oops, please enter a letter and number on the board");
    } else {
      // looks good, so...

      //grab the first letter of their guess
      firstChar = guess.charAt(0);
      // set the number of the index of the alphabet array
      var row = alphabet.indexOf(firstChar);

      // set the column variable to the second character
      var column = guess.charAt(1);

      // 2. check if they have entered numbers
      if (isNaN(row) || isNaN(column)) {
        alert("Oops, that isn't on the board.");
        // 3. check if they have gone too high or low
      } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
        alert("Oops, off the board again!");
      } else {
        // all good
        return row + column;
      }
    }
    return null;
  }
};


function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

function handleFireButton(){
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value;
  controller.processGuess(guess);

  guessInput.value = ""; // reset the form field
}


function init() {
  // handle the clicking
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;

  // for the return button
  var guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;

  model.generateShipLocations();
}


window.onload = init;
