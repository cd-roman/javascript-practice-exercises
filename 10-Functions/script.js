"use strict";

// Default Parameters

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5 - old way
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH156", 2, 800);

createBooking("LH177", undefined, 800); // in this case, the default value will be used instead of undefined

///////////////////////////////////////

// How Passing Arguments Works: Value vs. Reference
//          or
// Primitives vs. Objects

const flight = "LH234";

const joey = {
  name: "Joey Tribbiani",
  passport: 24738269284,
};

const checkIn = function (flightNum, passenger) {
  // Here we are changing the value of flightNum, and the flight variable will not be affected
  flightNum = "LH999";
  // Here we are changing the value of passenger.name, and the joey object will be affected, because we are passing the reference to the object
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24738269284) {
    console.log("Check in");
  } else {
    console.log("Wrong passport!");
  }
};

checkIn(flight, joey);

// As a result, the flight variable will not be affected
console.log(flight);
// In the meantime, the joey object will be affected
console.log(joey);

// Example 2
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

// The joey object will be affected with the new passport number
newPassport(joey);
console.log(joey);

// And the checkIn function will return "Wrong passport!"
checkIn(flight, joey);

// In programming, there are two terms to pass arguments to a function:
// passing by value and passing by reference
// However, in JavaScript, we don't have passing by reference, we are only passing by value

///////////////////////////////////////

// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function with callback function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time

// Example 2 of callback function
const high5 = function () {
  console.log("👋");
};

// Conceptually high5 is a callback function, and addEventListener is a higher-order function
// document.body.addEventListener("click", high5);

// Example 3 of callback function
["Joey", "Monica", "Chandler"].forEach(high5);

// Using higher-order functions and callbacks is a very powerful way to write more modular and reusable code
// It creates a new level of abstraction, which makes the code more readable and maintainable

///////////////////////////////////////

// Functions returning other functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Same function as above, but using arrow functions
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet("Hey");
greeterHey("Joey");
greeterHey("Monica");

greet("Hello")("Joey");
greetArr("Hello")("Joey");

///////////////////////////////////////

// The call and apply methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // ES6 enhanced object literals
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Joey Tribbiani");
lufthansa.book(635, "Monica Geller");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Use call method to set the 'this' keyword to eurowings
book.call(eurowings, 273, "Chandler Bing");
console.log(eurowings);

book.call(lufthansa, 239, "Rachel Green");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Ross Geller");
console.log(swiss);

// Apply method (not used in modern JavaScript)
// The difference between call and apply methods is that apply does not receive a list of arguments, but an array of arguments

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

// Instead of using the apply method, we can use the call method with the spread operator
book.call(swiss, ...flightData);
console.log(swiss);

///////////////////////////////////////

// The bind method
// The bind method is similar to the call method, but it does not immediately call the function, instead it returns a new function where the 'this' keyword is bound

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(233, "Phoebe Buffay");

// We can bind the 'this' keyword and the first argument
// For example, we can bind the airline and flight number
// This is called partial application
const bookEW233 = book.bind(eurowings, 233);
bookEW233("Rachel Green");
console.log(eurowings);

// Use objects with event listeners
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application with bind method
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

// Another way to do the same thing with a function returning another function
const addTaxRate = (rate) => (value) => value + value * rate;
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

///////////////////////////////////////

// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.

Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀

*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}
        \n(Write option number)`
      )
    );
    if (answer >= 0 && answer <= 3) {
      poll.answers[answer]++;
    } else {
      alert("Please select a valid option");
    }

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// Bonus - call the displayResults method with the test data
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

///////////////////////////////////////

// Immediately Invoked Function Expressions (IIFE)

// IIFE is a function that is executed right after it is created
// It is a function that is only executed once and then it disappears

// Normal function
const runOnce = function () {
  console.log("This function is called");
};
// Call the function
runOnce();

// IIFE
(function () {
  console.log("This will never run again");
  // Data incapsulated in the IIFE
  const isPrivate = 22;
})();

// console.log(isPrivate); // ReferenceError: isPrivate is not defined

// IIFE with arrow function
(() => console.log("This will also never run again"))();

// IIFE is used to create a new scope that is hidden from the outside scope
// Alternitively, we can use block scope with let and const

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate); // ReferenceError: isPrivate is not defined
console.log(notPrivate); // 46

///////////////////////////////////////

// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// We can't access the passengerCount variable from the outside
// console.log(passengerCount); // ReferenceError: passengerCount is not defined

console.dir(booker);

console.log("-----More closure examples-----");

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g(); // f is reassigned and creates a closure
f(); // 46

h(); // f is reassigned again and creates a closure
f(); // 1554

console.dir(f); // f is reassigned to the last function

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// The closure has priority over the scope chain
// For example, the perGroup variable will be used from the closure even if we create a new perGroup variable in the global scope
const perGroup = 1000;

// The function will still use the perGroup variable from the boardPassengers function
boardPassengers(180, 3);

///////////////////////////////////////
