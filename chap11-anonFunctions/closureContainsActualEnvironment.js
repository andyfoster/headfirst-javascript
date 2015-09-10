function setTimer(doneMessage, n) {
  setTimeout(function() {
    console.log(doneMessage);
  }, n);
  doneMessage = "OUCH!";
}
setTimer("Cookies are done!", 1000);
