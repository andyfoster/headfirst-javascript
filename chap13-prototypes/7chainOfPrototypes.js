function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.run = function () {
  console.log("Run!");
};

function ShowDog(name, breed, weight, handler) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.handler = handler;
}

ShowDog.prototype = new Dog();

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function(){
  console.log("Stack");
};

ShowDog.prototype.bait = function(){
  console.log("Bait");
};

ShowDog.prototype.gait = function(kind) {
  console.log(kind + "ing");
};

ShowDog.prototype.groom = function(){
  console.log("Groom");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

console.log(scotty.name);
console.log(scotty.breed);
console.log(scotty.species);
console.log(scotty.league);
scotty.gait("Perky");
scotty.bait();
scotty.stack();
