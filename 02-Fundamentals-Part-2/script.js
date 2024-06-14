"use strict";
// activate strict mode to avoid errors

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

////    FUNCTIONS    ////

function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function - these terms can be used interchangeably
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

////    FUNCTION DECLARATIONS VS EXPRESSIONS    ////

// Function declaration

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression

const calcAge2 = function (birthYear) {
  // anonymous function
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

////    ARROW FUNCTIONS    ////

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Joey"));
console.log(yearsUntilRetirement(1987, "Mike"));
