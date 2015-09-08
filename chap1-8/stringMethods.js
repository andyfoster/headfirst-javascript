var emot = "XOxxOO";

var hugs = 0;

var kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();
for(var i = 0; i < emot.length ; i++) {
if (emot.charAt(i) === "X") {
hugs++;
} else if (emot.charAt(i) == "O") {
  kisses++; }
}


var emot = "XOxxOO";

for(var i = 0; i < emot.length ; i++) {
console.log(emot.charCodeAt(i));
}
