function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

Robot.prototype.maker = "Andy Industries";

Robot.prototype.speak = function() {
  console.log("Speak");
};

Robot.prototype.makeCoffee = function () {
  console.log("Coffeeeeee");
};

Robot.prototype.blinkLights = function() {
  console.log("Blink blink...");
};

function SpaceRobot(name, year, owner, homePlanet) {
  this.name = name;
  this.year = year;
  this.owner = owner;
  this.homePlanet = homePlanet;
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function(){
  console.log(this.name + " says Sir, if I may venture an opinion...");
};

SpaceRobot.prototype.pilot = function () {
  console.log(this.name + " says Thrusters? Are they important?");
};

var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker);

var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak();
