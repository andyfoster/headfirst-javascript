function Car(make, model, year, color, passengers, convertible, mileage){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.passengers = passengers;
  this.convertible = convertible;
  this.mileage = mileage;
  this.started = false;

  this.start = function(){
    this.started = true;
  };

  this.stop = function() {
    this.started = false;
  };

  this.drive = function(){
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      console.log("Start the engine first.");
    }
  };

}

var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 8989);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);


var cars = [chevy, cadi, taxi, fiat];

for (var i = 0; i < cars.length; i++) {
  cars[i].start();

  var rando = Math.random() * 6;
  console.log(rando);
  while (rando > 0) {
    cars[i].drive();
    rando--;
  }
  cars[i].stop();
}
