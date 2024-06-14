"use strict";
// activate strict mode to avoid errors

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

////    FUNCTIONS    ////

function logger() {
  console.log("My name is Joey");
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

// Functions exercise

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descFinland = describeCountry("Finland", 6, "Helsinki");
const descCzechia = describeCountry("Czechia", 10, "Prague");
const descUkraine = describeCountry("Ukraine", 36, "Kyiv");

console.log(descFinland + "\n" + descCzechia + "\n" + descUkraine);

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

// Exercises

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percChina = percentageOfWorld1(1441);
console.log(percChina);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percUkraine = percentageOfWorld2(36);
console.log(percUkraine);

const percUSA = percentageOfWorld2(332);
console.log(percUSA);

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

// Exercise

const percentageofWorld3 = (population) => (population / 7900) * 100;

const percPortugal = percentageofWorld3(10);
console.log(percPortugal);

////    FUNCTIONS CALLING OTHER FUNCTIONS    ////

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessorAdvanced(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessorAdvanced(2, 3));

// Exercise

const describePopulation = (country, population) => {
  const populationPercentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${populationPercentage}% of the world.`;
  console.log(description);
};

describePopulation("Ukraine", 36);
describePopulation("Czechia", 10);
describePopulation("USA", 332);

////    REVIEWING FUNCTIONS    ////

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1; // standard way to return a no meaning value
  }
};

console.log(yearsUntilRetirement2(1991, "Joey"));
console.log(yearsUntilRetirement2(1950, "Mike"));
