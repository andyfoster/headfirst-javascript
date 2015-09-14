function Dog(one, two, three) {}

function ShowDog(one, two, three, four) {}

ShowDog.prototype = new Dog();

var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
  console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
  console.log("Fido is a ShowDog");
}

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
  console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
  console.log("Scotty is a ShowDog");
}
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);

// Fido is a Dog
// Scotty is a Dog
// Scotty is a ShowDog
// Fido constructor is function Dog(one, two, three) {}

// This is weird - we used Dog constructor to create Scotty
// Scotty constructor is function Dog(one, two, three) {}
