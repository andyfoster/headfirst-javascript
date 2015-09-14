function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

var toy = new Robot("Toy", 2013, "Avary");
console.log(toy.toString());
// [object Object]

Robot.prototype.toString = function(){
  return this.name + " Robot belonging to " + this.owner;
};
var toy = new Robot("Toy", 2013, "Avary");

console.log(toy.toString());
// Toy Robot belonging to Avary
