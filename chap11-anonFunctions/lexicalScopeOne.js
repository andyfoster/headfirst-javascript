var justAVar = "I'm GLOBAL";

function whereAreYou() {
  var justAVar = "I'm a LOCAL variable";

  return justAVar;
}

 // This returns the Local varible but if that wasn't there
 // if would return the global variable
var result = whereAreYou();
console.log(result);
