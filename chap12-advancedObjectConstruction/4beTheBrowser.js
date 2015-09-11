// function widget(partNo, size) {
//   var this.no = partNo;
//   var this.breed = size;
// }
//
// function FormFactor(material, widget) {
//   this.material = material;
//   this.widget = widget;
//   return this;
// }
//
// var widgetA = widget(100, "large");
// var widgetB = new widget(101, "small");
// var FormFactorA = new FormFactor("plastic", widgetA);
// var FormFactorB = new ForumFactor("metal", widgetB);


function Widget(partNo, size) {
  this.partNo = partNo;
  this.size = size;
}

function FormFactor(material, widget) {
  this.material = material;
  this.widget = widget;
}

var widgetA = new Widget(100, "large");
var widgetB = new Widget(101, "small");
var FormFactorA = new FormFactor("plastic", widgetA);
var FormFactorB = new FormFactor("metal", widgetB);

console.log(FormFactorA);
console.log(FormFactorB);
