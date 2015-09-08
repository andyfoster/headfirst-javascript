randomshiplocation1 = Math.random(1);
document.write(randomshiplocation1);
randomshiplocation2 = randomshiplocation1+1
randomshiplocation3 = randomshiplocation2+1


  var location1 = 2;
  var location2 = 3;
  var location3 = 4;
  var guess = 0;
  var hits = 0;
  var isSunk = false;

  while (isSunk == false) {
    var choice = prompt("Where are you going to shoot?");
    console.log(choice);

    if (choice > 7) {
      console.log("Enter a valid number");
    }

    if (choice == location1) {
      console.log("hit 1");
      hits ++;
      location1 = false;
    } else if (choice == location2) {
      console.log("hit 2");
      hits ++;
      location2 = false;
    } else if (choice == location3) {
      console.log("hit 3");
      hits ++;
      location3 = false;
    } else {
      console.log("MISS");
    }
    guess ++;

    if (hits >= 3) {
      isSunk = true;
    }

  }
  console.log('You won in ' + hits + 'hits');
