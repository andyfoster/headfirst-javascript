function handler() {
  console.log(doneMessage);
}
function makeTimer(doneMessage, n) {
  setTimeout(handler(), n);
}

makeTimer("Cookies are done!", 1000);
