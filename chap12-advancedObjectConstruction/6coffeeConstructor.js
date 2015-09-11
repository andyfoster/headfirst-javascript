function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;

  this.getSize = function(ounces){
    if (this.ounces === 8) {
      return "small";
    } else if (this.ounces === 12) {
      return "medium";
    } else {
      return "large";
    }
  };

  this.toString = function() {
    return "You've ordered a " + this.getSize(ounces) + " " + roast + " coffee";
  };
}

var start = Date.now();

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 8);
console.log(darkRoast.toString());

var finished = Date.now();

console.log(finished-start + "ms");
