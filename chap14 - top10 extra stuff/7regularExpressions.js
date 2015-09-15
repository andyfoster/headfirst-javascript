
// you need slashes at each end

// we want to match {3} numbers between 0-9
var areaCode = new RegExp(/[0-9]{3}/);

// 302
// 589 etc

// -----

// ^   - match the beginning of the string
// \d  - match any one digit number
// {3} - match 3 of them (one digit number)
// -?  - match 0 or 1 dashes
// \d  - match any one digit number
// {4} - match 4 of them (one digit number)
// $   - match at the end of the string

var phoneNumber = new RegExp(/^\d{3}-?\d{4}$/);
// Both OK:
// 555-1212
// 5551212

// Using a RegExp object

var amyHome = "55501212";
var result = amyHome.match(phoneNumber);

var invalid = "5556-1212";
var result2 = invalid.match(RegExp);
