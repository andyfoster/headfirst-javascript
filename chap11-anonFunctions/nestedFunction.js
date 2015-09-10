var justAVar = "I'm GLOBAL";

function whereAreYou() {
  var justAVar = "I'm a LOCAL variable";

  function inner() {
    return justAVar;
  }

  return inner();
}

 // This returns the Local varible but if that wasn't there
 // if would return the global variable
var result = whereAreYou();
console.log(result);
