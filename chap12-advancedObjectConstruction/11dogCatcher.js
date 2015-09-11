function dogCatcher(obj) {
  return obj instanceof Dog;
}

function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);

var fido = {name: "Fido", breed: "Mixed", weight: 38};

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.bark = function(){
    if (this.weight > 25) {
      console.log(this.name + " says Woof");
    } else {
      console.log(this.name + " says Yip");
    }
  };
}

var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [meow, whiskers, fido, fluffy, spot];


for (var i = 0; i < dogs.length; i++) {
  if (dogCatcher(dogs[i])) {
    console.log(dogs[i].name + " is a dog");
  }
}

console.log(meow instanceof Cat);
