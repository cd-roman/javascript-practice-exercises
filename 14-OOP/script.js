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

// Coding Challenge #1

// Your tasks:

// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 95);
const mercedes = new Car("Mercedes", 120);

console.log(bmw, mercedes);

bmw.accelerate();
bmw.break();
mercedes.accelerate();
mercedes.accelerate();
mercedes.break();

///////////////////////////////////////

// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
// class PersonCl {}

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const monica = new PersonCl("Monica", 1988);
console.log(monica);
monica.calcAge(); // 49
monica.greet(); // Hey Monica

console.log(monica.__proto__ === PersonCl.prototype); // true

// Important notes about classes:
// 1. Classes are NOT hoisted. It means that we can't use them before they are declared in the code
// 2. Classes are first-class citizens. It means that we can pass them into functions and return them from functions
// 3. Classes are executed in strict mode

///////////////////////////////////////
