document.getElementsByClassName

document.getElementsByName

document.querySelector - returns first item that matches

document.querySelectorAll - returns all items as a NodeList



var li = document.querySelector("#playlist .song");


// Adding stuff to your page

var newItem = document.createElement("li");
newItem.innerHTML = "Your Random Heart";
var ul = document.getElementById("playlist");
ul.appendChild(newItem);
