function Car(params){
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;
  this.started = false;

}

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

var limoParams = {  make: "Webville Motors",
                    model: "limo",
                    year: 1983,
                    color: "black",
                    passengers: 12,
                    convertible: true,
                    mileage: 21120  };

var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody in Blue", "Poodle", 40);

console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog);
// 
// Webville Motors limo is a object
// Rhapsody in Blue is a object
