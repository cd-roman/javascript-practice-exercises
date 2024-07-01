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
