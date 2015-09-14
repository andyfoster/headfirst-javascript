function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUS";

Robot.prototype.errorMessage = "All systems go";

Robot.prototype.reportError = function(){
  console.log(this.name + " says " + this.errorMessage);
};

Robot.prototype.spillWater = function(){
  this.errorMessage = "I have a short circuit";
};

var robby = new Robot("Robby", 1967, "Bob");
var rosie = new Robot("Rosie", 1955, "Sally");

rosie.reportError();
robby.reportError();
// rosie.spillWater();
robby.spillWater();
rosie.reportError();
robby.reportError();


// Robby does because he calls spillWater() which sets a new error message for him, apart from the prototype and constructor
// Rosie could as well if she spilt water on herself
console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));
