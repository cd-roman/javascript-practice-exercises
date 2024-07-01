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
