// Version with lots of unnessecary function declarations

window.onload = init;

var cookies = {
  instructions: "Preheat oven to 350...",
  bake: function(time) {
    console.log("Baking the cookies.");

    setTimeout(done, time); }
};

function init() {
  var button = document.getElementById("bake");
  button.onclick = handleButton;
}

function handleButton() {
  console.log("Time to bake the cookies.");
  cookies.bake(2500);
}

function done() {
  alert("Cookies are ready, take them out to cool.");
  console.log("Cooling the cookies.");

var cool = function() {
  alert("Cookies are cool, time to eat!");
};

  setTimeout(cool, 1000);
}
