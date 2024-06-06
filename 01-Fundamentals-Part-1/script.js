// Values, Data Types, and Variables

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

// Strings and Template Literals

const firstName = "John";
const lastName = "Smith";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

const description1 = `${country} is in ${continent} and its ${population} million people speak ${language}`;

console.log(description1);

///////////////////////////////////////

// Taking Decisions: if / else Statements

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
