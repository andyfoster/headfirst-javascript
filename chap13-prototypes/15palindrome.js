String.prototype.palindrome = function(){

// Advanced Solution
// we need to use valueOf() because 'this' is a function
//   var inputArray = this.split('').reverse().join('');
//   return (inputArray === this.valueOf());
// };

var len = this.length-1;

for (var i = 0; i < len; i++) {
  if (this.charAt[i] !== this.charAt[len-i]) {
    return false;
  }
  if (i === (len-i)) {
    return true;
  }
}
return true;

};

var phrases = ["eve", "kayak", "mom", "wow", "not a palindrome"];


for (var i = 0; i < phrases.length; i++) {
  var phrase = phrases[i];
  if (phrase.palindrome()) {
    console.log("'" + phrase + "' is a palindrome.");
  } else {
    console.log("'" + phrase + "' is NOT a palindrome.");
  }
}
