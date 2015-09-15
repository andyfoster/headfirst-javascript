// You can obviously add event handlers like:
window.onload = init;
// but sometimes you may need more general ways of assigning event handlers or want to add multiple handlers for one event type

// 1. on the load event
// 2. which function to call
// 3. whether or not ot bubble the event up

window.addEventListener("load", init, false);
function init() {
  // page has loaded
}


window.addEventListener("load", secondCallback, false);

function secondCallback() {
  // page has loaded
}


window.onload = function(){
  var div = document.getElementById('clickme');
  div.addEventListener("click", handleClick, false);
};

function handleClick(e) {
  var target = e.target;
  alert("You clicked on " + target.id);
  target.removeEventListener("click", handleClick, false);
}



// Event Handling in IE8
// IE8 and older browsers do support most of the "on" properties you can use to assign event handlers
// IE8 and older browsers use a method named attachEvent instead of the addEventListener method
// When an event is triggered and your event handler is called, instead of passing the evnt object to the handler, IE8 and older store the event object in the window object

window.onload = function() {
  var div = document.getElementById('clickme');
  if (div.addEventListener) {
    div.addEventListener("click", handleClick, false);
  } else if (div.attachEvent) {
    div.attachEvent("onclick", handleClick);
  }
};

function handleClick(e) {
  // if the event object is passed you know you're dealing with IE9+
  var evt = e || window.event;
  var target;
  if (evt.target) {
    target = evt.target;
  } else {
    target = evt.srcElement;
  }
  alert("You clicked on " + target.id);
}
