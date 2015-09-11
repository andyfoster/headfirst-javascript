function PrototypeCar(){
  this.make = make;
  this.model = model;
  this.year = year;

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

var dreamCar = new PrototypeCar;

dreamCar.stereo = "Massive";

dreamCar.color = "Black";

dreamCar.transmission = "automatic";
