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

var robby = new Robot("Robby", 1967, "Bob");
var rosie = new Robot("Rosie", 1955, "Sally");
robby.onOffSwitch = true;
robby.makeCoffee = function(){
  console.log("Going to Starbucks");
};

rosie.cleanHouse = function(){
  console.log("Cleeeeeaning!");
};

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();



console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();

// So prototypes keep the unnessecary memory free by not putting too much stuff in the actual constructor.
// They are only called if they are asked. The object will look in the constructor, and if they are not there, it will go up one level and look in the prototype (among all the protype methods and properties that have been added after).
// We can also still add extra properties and methods as we go.
