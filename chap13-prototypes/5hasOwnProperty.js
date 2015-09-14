// 1. Constructor
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}


Dog.prototype.species = "Canine";

// A protoype is a property of method that you can apply to a constuctir that only gets called if it is needed.
// As opposed to a method in the consturcotur that gets loaded up every time a new instance is created.

Dog.prototype.bark = function(){
  if (this.weight > 25) {
    console.log(this.name + " says Woof");
  } else {
    console.log(this.name + " says Yip!");
  }
};

Dog.prototype.run = function () {
  console.log("Run!");
};

Dog.prototype.wag = function () {
  console.log("Wag!");
};

Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
  if (this.sitting) {
    console.log(this.name + " is already sitting");
  } else {
    this.sitting = true;
    console.log(this.name + " is now sitting.");
  }
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var barnaby = new Dog("Barnaby", "Basset Hound", 55);

// Let's give Spot a special bark.
// This will override anything in the constructor or the protoype:
spot.bark = function() {
  console.log(this.name + " says WOOF!");
};
spot.species = "Dinosaur";

fido.bark();
fido.run();
fido.wag();
fido.sit();
console.log(fido.species);

fluffy.bark();
fluffy.run();
fluffy.wag();
fluffy.sit();
console.log(fluffy.species);

spot.bark();
spot.run();
spot.wag();
console.log(spot.species);

barnaby.sit();
barnaby.sit();

// hasOwnProperty checks if the object has a unique property, seperate from the main constructor and prototype
console.log(spot.hasOwnProperty('bark'));
console.log(fido.hasOwnProperty('species'));
console.log(fido.hasOwnProperty("sitting"));
