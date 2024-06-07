/* 
  Values, Data Types, and Variables
*/

const country = "Ukraine";
const continent = "Europe";
let population = 36;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "Ukrainian";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Bug or error in JavaScript
console.log(typeof null);

console.log(typeof undefined);

console.log(population / 2);

population++;

// Basic Operators

console.log(population);
console.log(population > 6);
console.log(population < 33);

// BMI calculation

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

///////////////////////////////////////

/* 
  Strings and Template Literals
*/

const firstName = "John";
const lastName = "Smith";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

const description1 = `${country} is in ${continent} and its ${population} million people speak ${language}`;

console.log(description1);

///////////////////////////////////////

/* 
  Taking Decisions: if / else Statements
*/

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
        below average`
  );
}

const averagePopulation = 33;

if (population > averagePopulation) {
  console.log(
    `${country}'s population is ${
      population - averagePopulation
    } million above average country population`
  );
}

// if else control structure

let someConditionIsTrue;

if (someConditionIsTrue) {
  // code block to be executed if condition is true
} else {
  // code block to be executed if condition is false
}

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

///////////////////////////////////////

/*
  Type Conversion and Coercion
*/

// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old"); // 23 is converted to string
console.log("23" - "10" - 3); // 23 and 10 are converted to numbers
console.log("23" * "2"); // 23 is converted to number

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

///////////////////////////////////////

/* 
  Equality Operators: == vs. === 
*/

// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false
console.log(Boolean(-1)); // true

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

// Equality Operators: == vs. ===

const age = 18;
if (age === 18) console.log("You just became an adult :D (strict equality)");
if (age == 18) console.log("You just became an adult :D (loose equality)");

const ageString = "30";
if (ageString === 30) console.log("You are thirty now!(strict equality)");
if (ageString == 30) console.log("You are thirty now!(loose equality)");

// as a general rule, always use strict equality operator

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your contry have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only one border!");
// } else if (numNeighbours > 1) {
//   console.log("More than one border");
// } else {
//   console.log("No borders");
// }

///////////////////////////////////////

/*
  Basic Boolean Logic
*/

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // true

const hasDriversLicense2 = true;
const hasGoodVision2 = false;

console.log(hasDriversLicense2 || hasGoodVision2); // true

console.log(!hasDriversLicense); // false

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// const countryPrompt = prompt("Where do you want to live?");

// if (language === "English" && population < 50 && !isIsland) {
//   console.log(`You should live in ${countryPrompt}`);
// } else {
//   console.log(`${countryPrompt} does not meet your criteria :(`);
// }

///////////////////////////////////////

// Calculate average of 3 scores

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy!");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy!");
}

///////////////////////////////////////

/*
  The switch Statement
*/

const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

//

const checkLanguage = "Czech";

switch (checkLanguage) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

///////////////////////////////////////

/*
  Statements and Expressions
*/

// Expressions
3 + 4;
1991;
true && false && !false;

// Statements
if (23 > 10) {
  const str = "23 is bigger"; // this line is a statement, because it does not produce a value, but the string itself is an expression
}

///////////////////////////////////////

/*
  The Conditional (Ternary) Operator
*/

const newAge = 23;
newAge >= 18
  ? console.log("I like to drink wine🍷")
  : console.log("I like to drink juice🥤");

const drink = newAge >= 18 ? "wine🍷" : "juice🥤";
console.log(drink);

console.log(`I like to drink ${newAge >= 18 ? "wine🍷" : "juice🥤"}`);

//

console.log(
  `${country}’s population is ${population > 33 ? "above" : "below"} average`
);

//

const bill = 275;

const tipRate = bill >= 50 && bill <= 300 ? 0.15 : 0.2;

const tip = bill * tipRate;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

///////////////////////////////////////
