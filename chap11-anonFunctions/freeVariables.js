function justSaying(phrase) {
  var ending = "";
  if (beingFunny) {
    ending = " -- I'm just sayin!";
  } else if (notSoMuch) {
    ending = " -- Not so much";
  }
  alert(phrase + ending);
}

// In this example, beingFunny and notSoMuch are undefined in the local scope, and we call them "free variables";



// The environment below "closes" the function, i.e. it provides values for all of the free values
beingFunny = true;
notSoMuch = false;
inConversationsWith = true;



 // A "closure" results when we combine a function that has free variables with an environment that provides variable bindings for all those free variables.
