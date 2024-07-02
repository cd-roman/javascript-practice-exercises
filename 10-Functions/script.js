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
