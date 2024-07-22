"use strict";

// Constructor functions and the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this because it creates a new copy of the function for each object
  // So that's a bad practice
  // this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  // };
};

const joey = new Person("Joey", 1991);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

console.log(joey);

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

// Constructor function simulates a class, and we can create instances of it
// Constructor function is a function that is used to create multiple objects based on the same "blueprint"
console.log(joey instanceof Person);

///////////////////////////////////////
