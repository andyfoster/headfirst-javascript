function Game() {
  this.level = 0;
}

Game.prototype.play = function () {
  // player plays game here
  this.level++;
  console.log("Welcome to level " + this.level);
  this.unlock();
};

Game.prototype.unlock = function () {

  if (this.level === 42) {
    Robot.prototype.deployLaser = function() {
      console.log(this.name + " is blasting you with " + this.possessive + " laser beams");
    };
  }
};

function Robot(name, year, owner, possessive) {
  this.name = name;
  this.year = year;
  this.owner = owner;
  this.possessive = possessive;
}

var game = new Game();
var robby = new Robot("Robby", 1967, "George Jetson", "his");
var rosie = new Robot("Rosie", 1955, "Dr Ingenius", "her");

while (game.level < 42) {
  game.play();
}

robby.deployLaser();
rosie.deployLaser();
