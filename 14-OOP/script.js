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

// Prototypes

// Each and every function in JS automatically has a property called prototype
// And that includes constructor functions

console.log(Person.prototype);

// We can create methods on the prototype property and then use them on the objects created by the constructor function
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

joey.calcAge();
matilda.calcAge();

console.log(joey.__proto__);
console.log(joey.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(joey)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// In fact, the .prototype property is a prototype of linked objects

Person.prototype.species = "Homo Sapiens";
console.log(joey.species, matilda.species);

console.log(joey.hasOwnProperty("firstName")); // true

// The species property is not inside the joey object, it's in the prototype property of Person and joey object has access to it
console.log(joey.hasOwnProperty("species")); // false

///////////////////////////////////////

// Prototypal inheritance on built-in objects

console.log(joey.__proto__);
// Object.prototype (top of prototype chain)
console.log(joey.__proto__.__proto__);

console.log(joey.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 7, 2, 9, 7, 7, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

const arr2 = new Array(1, 2, 4);
console.log(arr2);

// We can create new methods for the built-in objects, for examples for arrays
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// However, it's not the best practice, so it's better to avoid this technique

// A good example to understand the prototype chain is to check the prototype of a h1 or a function using console.dir

const h1 = document.querySelector("h1");
console.dir(h1);

console.dir((x) => x + 1);

///////////////////////////////////////
