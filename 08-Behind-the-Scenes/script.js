"use strict";

// Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new variable with same name as outer scope's variable
      const firstName = "Chandler";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // ReferenceError: str is block scoped, so it's not accessible here
    // console.log(millenial); // var is function scoped, so it's accessible here
    // add(2, 3); // ReferenceError: add is block scoped, so it's not accessible here
  }
  printAge();

  return age;
}

const firstName = "Joey";
calcAge(1991);

///////////////////////////////////////

// Hoisting and Temporal Dead Zone (TDZ) in Practice

// Variables

console.log(me); // undefined
// console.log(job); // ReferenceError: Cannot access 'job' before initialization
// console.log(year); // ReferenceError: Cannot access 'year' before initialization

var me = "Joey";
let job = "actor";
const year = 1985;

// Functions
console.log(addDeclaration(2, 3)); // 5
// console.log(addExpression(2, 3)); // ReferenceError: Cannot access 'addExpression' before initialization
// console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization

// Function Declaration
function addDeclaration(a, b) {
  return a + b;
}

// Function Expression
const addExpression = function (a, b) {
  return a + b;
};

// Arrow Function
const addArrow = (a, b) => a + b;

// Tricky example why not using var

console.log(numProducts); // undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

///////////////////////////////////////

// Window Object

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

/* 
Conclusion and best practices:

1. Don't use var

2. Use const by default, and let only when you need to chaneg a variable later

3. Declare all variables at the top of every scope

4. Declare all functions before calling them
*/

///////////////////////////////////////
