var fidoString = '{ "name": "Fido", "breed": "Mixed", "weight" : 38 }';

var fido = JSON.parse(fidoString);

console.log(fido);


var jsFido = {
      name: "Fido",
      breed: "Mixed",
      weight: 38
};
var jsFidoString = JSON.stringify(jsFido);
console.log(jsFidoString);

// JSON Stuff doesn't work with methods
