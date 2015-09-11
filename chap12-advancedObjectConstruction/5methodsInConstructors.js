// We can put methods into constructors too

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function () {
    if (this.weight > 25) {
      console.log(this.name + " says Woof!");
    } else {
      console.log(this.name + " says Yip!");
    }
  };
}

var fido = new Dog("Fido", "Chihuahua", 15);
var rufus = new Dog("Rufus", "Pitbull", 45);
var spot = new Dog("Spot", "Dalmation", 26);
var chip = new Dog("Chip", "Jack Russell", 17);

var dogs = [fido, rufus, spot, chip];

var dogsLength = dogs.length;

for (var i = 0; i < dogsLength ; i++) {
  dogs[i].bark();
}
