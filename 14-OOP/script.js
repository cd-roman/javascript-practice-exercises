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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    // Check if the name includes a space and then set the full name property adding the underscore to avoid infinite loop
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there");
  }
}

const monica = new PersonCl("Monica Geller", 1988);
console.log(monica);
monica.calcAge(); // 49
monica.greet(); // Hey Monica

console.log(monica.__proto__ === PersonCl.prototype); // true

// Important notes about classes:
// 1. Classes are NOT hoisted. It means that we can't use them before they are declared in the code
// 2. Classes are first-class citizens. It means that we can pass them into functions and return them from functions
// 3. Classes are executed in strict mode

///////////////////////////////////////

// Setters and Getters (Accessor Properties)

const account = {
  owner: "joey",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300

account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]

///////////////////////////////////////

// Static Methods

// Static methods are attached to the constructor function and not to the prototype property

console.log(Array.from(document.querySelectorAll("h1"))); // [h1]

console.log(Number.parseFloat("30px")); // 30
console.log(Number.parseInt("30px")); // 30

// Implementing a static method for the constructor function

Person.hey = function () {
  console.log("Hey there");
  console.log(this);
};

Person.hey();

// Calling the static method from the class

PersonCl.hey(); // Hey there

///////////////////////////////////////

// Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const chandler = Object.create(PersonProto);
chandler.init("Chandler", 1985);

console.log(chandler);
chandler.calcAge();

console.log(chandler.__proto__);
console.log(chandler.__proto__ === PersonProto); // true

///////////////////////////////////////

// Coding Challenge #2

// Your tasks:

// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.

// Test data:
// § Data car 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6 + " mi/h";
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCL("Ford", 120);
console.log(ford);

// get speedUS
console.log(ford.speedUS);

ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);

///////////////////////////////////////

// Inheritance Between "Classes": Constructor Functions

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  // We can use the call method to call the Person2 constructor function
  Person2.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person2.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person2); // true
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////

// Coding Challenge #3

// Your tasks:

// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉

// Test data:

// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK 😀

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 56);

EV.prototype.constructor = EV;

console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);

tesla.accelerate();
tesla.accelerate();
tesla.break();

///////////////////////////////////////
