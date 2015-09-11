function Car(params){
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;
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

var chevyParams = { make: "Chevy",
                    model: "Bel Air",
                    year: 1957,
                    color: "red",
                    passengers: 2,
                    convertible: false,
                    mileage: 1021 };

var chevy = new Car(chevyParams);


if (chevy instanceof Car) {
  console.log("Congrats, it's a Car!");
}
