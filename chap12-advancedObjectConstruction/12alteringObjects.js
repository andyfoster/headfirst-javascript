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


var fido = new Dog("Fido", "Mixed", 38);

fido.owner = "Bob";

delete fido.weight;

// You can add new methods too

fido.trust =  function(person) {
                return (person === "Bob");
              };

var notBite = fido.trust("Bob");



var spot = new Dog("Spot", "Chihuahua", 10);


// This doesn't work because Dog nor spot have this method
// TypeError: Object #<Dog> has no method 'trust'
notBite = spot.trust(("Bob"));

// Even if you change it, it's still an instance of Dog
console.log(fido instanceof Dog);
