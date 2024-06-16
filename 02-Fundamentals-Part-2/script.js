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

// Exercise

const populations = [36, 10, 332, 15];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

////    BASIC ARRAY OPERATIONS (METHODS)    ////

// Add elements
friends.push("John"); // adds element to the end of the array
console.log(friends);
const newLength = friends.push("Paul"); // push method returns the new length of the array
console.log(newLength);

friends.unshift("Bob"); // adds element to the beginning of the array
console.log(friends);

// Remove elements
friends.pop(); // removes the last element of the array
console.log(friends);

const popped = friends.pop(); // pop method returns the removed element
console.log(popped);
console.log(friends);

friends.shift(); // removes the first element of the array
console.log(friends);

console.log(friends.indexOf("Jay")); // returns the index of the element
console.log(friends.indexOf("Helena")); // returns -1 if the element is not in the array

console.log(friends.includes("Jay")); // returns true if the element is in the array
console.log(friends.includes("Helena")); // returns false if the element is not in the array

// array methods use strict equality to compare elements
friends.push(23);
console.log(friends.includes("23")); // returns false
console.log(friends.includes(23)); // returns true

if (friends.includes("Jay")) {
  console.log("You have a friend called Jay");
}

// Exercise

const neighbours = ["Germany", "Poland", "Slovakia", "Austria"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country");
}

neighbours[neighbours.indexOf("Poland")] = "Republic of Poland";
console.log(neighbours);

// Coding challenge

const calcTip = (bill) => {
  const tip = bill * (bill >= 50 && bill <= 300 ? 0.15 : 0.2);
  tips.push(tip);
  totals.push(bill + tip);
};

const bills = [125, 555, 44, 100];

const tips = [];

const totals = [];

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);
calcTip(bills[3]);

console.log(tips, totals);

////    INTRODUCTION TO OBJECTS    ////

// Object literal syntax

const joeyObj = {
  firstName: "Joey",
  lastName: "Tribbiani",
  age: 2037 - 1991,
  job: "actor",
  friends: ["Chandler", "Ross", "Monica", "Phoebe", "Rachel"],
};

const myCountry = {
  country: "Czech Republic",
  capital: "Prague",
  language: "Czech",
  population: 10,
  neighbours: ["Germany", "Poland", "Slovakia", "Austria"],
};

// Dot vs. bracket notation
console.log(joeyObj);

console.log(joeyObj.lastName); // dot notation
console.log(joeyObj["lastName"]); // bracket notation

// bracket notation is useful when we want to use expressions
const nameKey = "Name";
console.log(joeyObj["first" + nameKey]);
console.log(joeyObj["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Joey? Choose between firstName, lastName, age, job, and friends"
// );

// if (joeyObj[interestedIn]) {
//   console.log(joeyObj[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// Add new properties

joeyObj.location = "New York";
joeyObj["twitter"] = "@joeytribbiani";

console.log(joeyObj);

console.log(
  `${joeyObj.firstName} has ${joeyObj.friends.length} friends, and his best friend is called ${joeyObj.friends[0]}`
);

// Exercise

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries, and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

////    OBJECT METHODS    ////

const joeyObj2 = {
  firstName: "Joey",
  lastName: "Tribbiani",
  birthYear: 1985,
  job: "actor",
  friends: ["Chandler", "Ross", "Monica", "Phoebe", "Rachel"],
  hasDriversLicense: true,

  //   calcObjAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  //   calcAge: function () {
  //     console.log(this);
  //     this.age = 2037 - this.birthYear;
  //     return this.age;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(joeyObj2.calcAge());
console.log(joeyObj2.getSummary());

// Coding challenge

/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
}

// Exercise

const myCountry2 = {
  country: "Ukraine",
  capital: "Kyiv",
  language: "Ukrainian",
  population: 36,
  neighbours: [
    "Moldova",
    "Romania",
    "Hungary",
    "Slovakia",
    "Poland",
    "Belarus",
    "Russia",
  ],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries, and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    return (this.isIsland = this.neighbours.length === 0 ? true : false);

    // Even simpler version (see why this works...)
    // return this.isIsland = !Boolean(this.neighbours.length);
  },
};

console.log(myCountry2.describe());
console.log(myCountry2.checkIsland());

////    ITERATION: THE FOR LOOP    ////

// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

// Exercise
for (let voter = 1; voter <= 20; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

////    LOOPING ARRAYS, BREAKING AND CONTINUING    ////

const joeyArray = [
  "Joey",
  "Tribbiani",
  2037 - 1991,
  "actor",
  ["Chandler", "Ross", "Monica", "Phoebe", "Rachel"],
  true,
];
const types = [];

for (let i = 0; i < joeyArray.length; i++) {
  console.log(joeyArray[i], typeof joeyArray[i]);

  // Fillig types array
  types.push(typeof joeyArray[i]);
  //    or
  // types[i] = typeof joeyArray[i];
}

console.log(types);

const yearsArray = [1991, 2007, 1969, 2020];
const agesArray = [];

for (let i = 0; i < yearsArray.length; i++) {
  agesArray.push(2037 - yearsArray[i]);
}

console.log(agesArray);

// Continue and break

console.log("--- LOG ONLY STRINGS FROM THE ARRAY---");
for (let i = 0; i < joeyArray.length; i++) {
  if (typeof joeyArray[i] !== "string") continue;
  // `continue` exits the current iteration and continues to the next one

  console.log(joeyArray[i], typeof joeyArray[i]);
}

console.log("--- BREAK WITH NUMBER---");
for (let i = 0; i < joeyArray.length; i++) {
  if (typeof joeyArray[i] === "number") break;
  // `break` exits the loop entirely once the condition is met

  console.log(joeyArray[i], typeof joeyArray[i]);
}

// Exercise
const populations2 = [15, 10, 90, 1441];
const percentages2 = [];

for (let i = 0; i < populations2.length; i++) {
  const perc = percentageOfWorld1(populations2[i]);
  percentages2.push(perc);
}

console.log(percentages2);

////    LOOPING BACKWARDS AND LOOPS IN LOOPS    ////

const joeyArray2 = [
  "Joey",
  "Tribbiani",
  2037 - 1991,
  "actor",
  ["Chandler", "Ross", "Monica", "Phoebe", "Rachel"],
];

// Looping backwards
for (let i = joeyArray2.length - 1; i >= 0; i--) {
  console.log(i, joeyArray2[i]);
}

// Loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♂️`);
  }
}
// Exercise

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Germany"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
