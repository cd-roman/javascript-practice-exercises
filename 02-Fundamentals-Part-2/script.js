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

// Coding Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// Test data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);

////////////////////////////////////////////////////

////    ARRAYS    ////

// Arrays fundamentals

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Joey";
const joey = [firstName, "Tribbiani", 2037 - 1991, "actor", friends];
console.log(joey);
console.log(joey.length);

// Exercise
const calcAgeArr = function (birthYear) {
  return 2037 - birthYear;
};

const yearsArr = [1990, 1967, 2002, 2010, 2018];

const ageArr1 = calcAgeArr(yearsArr[0]);
const ageArr2 = calcAgeArr(yearsArr[1]);
const ageArr3 = calcAgeArr(yearsArr[yearsArr.length - 1]);
console.log(ageArr1, ageArr2, ageArr3);

const ages = [
  calcAgeArr(yearsArr[0]),
  calcAgeArr(yearsArr[1]),
  calcAgeArr(yearsArr[yearsArr.length - 1]),
];
console.log(ages);
