// These two are exactly the same:
var items = new Array();

var items = [];


var items = ["a", "b". "c"];

var items = new Array("a", "b". "c");

// Array constructor is good for creating an array of a specific size
// you determine at runtime

var n = getNumberOfWidgetsFromDatabase();
var widgets = new Array();

for (var i = 0; i < n; i++) {
  widgets[i] = getDatabaseRecord(i);
}
