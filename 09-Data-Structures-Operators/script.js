"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex,
    time = "20:00",
    address = "Pickup at the restaurant",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Destructuring Objects
const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(a, b, c);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [5, 6]

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1

///////////////////////////////////////

// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Changing variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Set default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objects
let a1 = 111;
let b1 = 999;
const obj = { a1: 23, b1: 7, c1: 14 };
({ a1, b1 } = obj);
console.log(a1, b1);

// Nested objects
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);

// Using destructuring in a function
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

///////////////////////////////////////

// Spread Operator

const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr1];
console.log(newArr);

// Log the elements of the array separately
console.log(...newArr);

// Create a new array
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Spread operator takes all the elements from the array and puts them into a new array
// It does not create new variables
// We can only use it in places where we would otherwise write values separated by commas

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]; // Shallow copy

// Join 2 arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);
console.log(...menu2);

// Spread operator works on all iterables
// Iterables: arrays, strings, maps, sets, NOT objects

// Spread operator on strings
const str = "Joey";
const letters = [...str, " ", "T."];
console.log(letters);

// Spread operator normally used in the places where we would write values separated by commas
// For example, when calling a function or building an array

// A real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Spread operator on objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

///////////////////////////////////////

// Rest Pattern and Parameters

// The difference between the spread operator and the rest pattern
// The spread operator takes all the elements from the array and puts them into a new array
// The spread operator used on the right side of the assignment operator, or on the right side of the = sign
// const arr = [1, 2, ...[3, 4]];

// The rest pattern is used on the left side of the assignment operator, or on the left side of the = sign
// The rest pattern collects multiple elements and condenses them into an array
const [a2, b2, ...others] = [1, 2, 3, 4, 5];
console.log(a2, b2, others);

// In this example, the rest pattern collects the remaining elements into an array on the left
// And the spread operator collects the elements into an array on the right
// The rest element must be the last element in the array
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions with rest parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

restaurant.orderPizza("mushrooms");

// With the spread operator we unpack or expand the array
// With the rest pattern we pack elements back into an array or compress them into an array

// The spread operator is used where we would otherwise write values separated by commas
// The rest pattern is used where we would otherwise write variable names separated by commas

///////////////////////////////////////

// Short Circuiting (&& and ||)

console.log("---- OR ----");
// Use any data type, return any data type, short-circuiting
console.log(3 || "Joey"); // 3
console.log("" || "Joey"); // Joey
console.log(true || 0); // true
console.log(undefined || null); // null

// The || is looking for the first truthy value and return it
console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----");

// The && operator is used to execute the second value if the first value is true
// If first value is falsy, it will return the first value

console.log(0 && "Joey"); // 0
console.log(7 && "Joey"); // Joey
console.log(true && false); // false
console.log("Hello" && 23 && null && "Joey"); // null

// Practical example

// Old way
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

// New way
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

///////////////////////////////////////

// Nullish Coalescing Operator (??)

// It works with null and undefined (NOT 0 or '')
// In other words it works with nullish values

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3); // 10 - this is an error, because 0 is a falsy value

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0 - this is the correct value

///////////////////////////////////////

// Logical assignment operators

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "Lazio",
  owner: "Joey Tribbianu",
};

// Usage of OR assignment operator

// Old way
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// New way
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// A better way to use nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// Usage of AND assignment operator
// rest1.owner = rest1.owner && "<Anonymous>";
// rest2.owner = rest2.owner && "<Anonymous>";

rest1.owner &&= "<Anonymous>";
rest2.owner &&= "<Anonymous>";

console.log(rest1);
console.log(rest2);

///////////////////////////////////////
