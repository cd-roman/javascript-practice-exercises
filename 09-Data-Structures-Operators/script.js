"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[3 + 2]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(openHours);

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

  // ES6 enhanced object literals
  openHours,

  // Old way of writing methods
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // New way of writing methods introduced in ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex,
    time = "20:00",
    address = "Pickup at the restaurant",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
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

// The for-of Loop

console.log("----- The for-of Loop -----");

const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu3) console.log(item);

for (const item of menu3.entries()) {
  console.log(item);
}

console.log(...menu3.entries()); // Array Iterator {}

for (const [i, el] of menu3.entries()) {
  console.log(`${i + 1}: ${el}`);
}

///////////////////////////////////////

// Optional Chaining (?.)

// The optional chaining operator is used to avoid errors when trying to access a property of an object that does not exist
// It is used to check if a certain property exists in an object

console.log("----- Optional Chaining -----");

// Old way
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// New way with optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open); // undefined

// Example
const days2 = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days2) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); // Focaccia, Pizza
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist"); // Method does not exist

// Arrays
const users = [{ name: "Joey", email: "joey@email.com" }];

// check if the array is empty
console.log(users[0]?.name ?? "User array empty");

// Looping objects: Object.keys, values, and entries

console.log("----- Looping Objects -----");

// Property names
const properties = Object.keys(openHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property values
const values = Object.values(openHours);
console.log(values);

// Entire object
const entries = Object.entries(openHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// Sets

console.log("----- Sets -----");

// Sets can hold unique values of any type
// Sets can hold mixed data types, not only strings

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Risotto"}

// Sets are iterables
console.log(new Set("Joey")); // Set(4) {"J", "o", "e", "y"}

console.log(ordersSet.size); // 3

// Check if an element is in the set
// Has method returns true if the element is in the set, false otherwise
// It is similar to the includes method in arrays
console.log(ordersSet.has("Pizza")); // true
console.log(ordersSet.has("Bread")); // false

// Add elements to the set
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Garlic Bread"}

// There is no index in sets, so we cannot get elements by index
console.log(ordersSet[0]); // undefined

// Looping sets
for (const order of ordersSet) console.log(order);

// Example
// The real-world use case for sets is to remove duplicate values from arrays
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ["Waiter", "Chef", "Manager"]
console.log(new Set(staff).size); // 3

console.log(new Set("joeytribbiani").size); // 10

///////////////////////////////////////

// Maps: Fundamentals

console.log("----- Maps -----");

const restMap = new Map();
restMap.set("name", "Classico Italiano");
restMap.set(1, "Firenze, Italy");

console.log(restMap.set(2, "Lisbon, Portugal"));

restMap
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(restMap);

// Get values from the map
console.log(restMap.get("name"));
console.log(restMap.get(true));
console.log(restMap.get(1));

const time = 20;
console.log(
  restMap.get(time > restMap.get("open") && time < restMap.get("close"))
);

// Check if the map has a certain key
console.log(restMap.has("categories"));

// Delete elements from the map
restMap.delete(2);
console.log(restMap);

// Get the size of the map
console.log(restMap.size); // 7

// Clear the map
// restMap.clear();

// Maps can have any data type as keys
restMap.set([1, 2], "Test");
console.log(restMap);
console.log(restMap.size);

console.log(restMap.get([1, 2])); // undefined

// In order to get the value from the map, we need to use the exact same array
const arrMap = [1, 2];
restMap.set(arrMap, "Test2");
console.log(restMap.get(arrMap)); // Test2

// We can use DOM objects as keys in maps
restMap.set(document.querySelector("h1"), "Heading");
console.log(restMap);

///////////////////////////////////////

// Maps: Iteration

const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct! 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openHours));
const hoursMap = new Map(Object.entries(openHours));
console.log(hoursMap);

// Maps are iterables

// Quiz app

console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));

// console.log(question.get(question.get("correct") === answer));

// Convert map to array

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

///////////////////////////////////////

// Working with Strings - Part 1

console.log("----- Working with Strings - Part 1 -----");

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log("B737"[0]); // B
console.log(airline.length); // 16

// Strings also have methods

// indexOf method

console.log(airline.indexOf("r")); // 6
console.log(airline.lastIndexOf("r")); // 10
console.log(airline.indexOf("Portugal")); // 8

// indexOf is case sensitive
console.log(airline.indexOf("portugal")); // -1 because it is not found

// Slice method
// Slice method extracts a part of the string and returns a new string
// It does not change the original string
// In order to use it we need to store the result in a new variable

console.log(airline.slice(4)); // Air Portugal - it starts at index 4
console.log(airline.slice(4, 7)); // Air - it starts at index 4 and ends at index 7

// Extract the first word of the string without knowing the length of the word
console.log(airline.slice(0, airline.indexOf(" "))); // TAP

// Extract the last word of the string without knowing the length of the word
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Portugal

// Extract the last characters of the string
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

// Function to check the middle seat

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky! 😎");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// How string methods work
// JavaSctipt converts the string to an object and then calls the method on that object
// This is called boxing
// The string is converted to an object, the method is called, and then the object is destroyed
// Once done, JavaScript returns the primitive value back to the string
// This is why we can use methods on primitives like strings

console.log(new String("Joey"));
console.log(typeof new String("Joey"));

console.log(typeof new String("Joey").slice(1));

///////////////////////////////////////

// Working with Strings - Part 2

console.log("----- Working with Strings - Part 2 -----");

// Changing the case of the string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log("Lisbon".toUpperCase());

// Fix capitalization in name

const passenger = "jOeY";
const passengerLower = passenger.toLowerCase(); // joey
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // Joey
console.log(passengerCorrect); // Joey

// Function to capitalize the first letter of the string
const capitalizeName = function (name) {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);
};

capitalizeName("mArk");

// Comparing emails

const email = "name@email.io";
const loginEmail = " Name@Email.Io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// It can be done in one line
// It is called chaining methods
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing parts of strings
const priceGB = "290,30£";
const priceUS = priceGB.replace("£", "$").replace(",", "."); // 290.30$
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

// .replace method replaces only the first occurrence of the word
console.log(announcement.replace("door", "gate")); // All passengers come to boarding gate 23. Boarding door 23!

// .replaceAll method replaces all occurrences of the word
console.log(announcement.replaceAll("door", "gate")); // All passengers come to boarding gate 23. Boarding gate 23!

// Alternative way to replace all occurrences of the word is to use regular expressions
console.log(announcement.replace(/door/g, "gate")); // All passengers come to boarding gate 23. Boarding gate 23!

// Booleans
// .includes method returns true if the word is in the string, false otherwise
// .startsWith method returns true if the string starts with the word, false otherwise
// .endsWith method returns true if the string ends with the word, false otherwise

const plane2 = "Airbus A320neo";
console.log(plane2.includes("A320")); // true
console.log(plane2.includes("Boeing")); // false

console.log(plane2.startsWith("Airbus")); // true
console.log(plane2.startsWith("Neo")); // false

if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

// Practice exercise

const checkBaggage = function (items) {
  // Start with converting the string to lowercase to avoid case sensitivity when comparing strings
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food, and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

///////////////////////////////////////

// Working with Strings - Part 3

console.log("----- Working with Strings - Part 3 -----");

// Split method

// Split method splits the string into an array of substrings based on a separator (divider)
console.log("a+very+nice+string".split("+")); // ["a", "very", "nice", "string"]
console.log("Joey Tribbiani".split(" ")); // ["Joey", "Tribbiani"]

const [firstName, lastName] = "Joey Tribbiani".split(" ");
console.log(firstName, lastName);

// Join method

// Join method joins the elements of an array into a string

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// Capitalize the first letter of each word in a string

const capitalizeName2 = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};

capitalizeName2("jessica ann smith davis");
capitalizeName2("mark anthony turner");

// Padding a string

// .padStart method adds a certain number of characters to the start of the string

const message = "Go to gate 23!";

// We wwant the string to be 25 characters long
console.log(message.padStart(25, "+")); // ++++++++Go to gate 23!
console.log("Joey".padStart(25, "+")); // +++++++++++++++++++++Joey

// .padEnd method adds a certain number of characters to the end of the string
console.log(message.padEnd(25, "+")); // Go to gate 23!++++++++

// We can use both methods to create a nice-looking header
console.log("Joey".padStart(20, "+").padEnd(40, "+")); // ++++++++++++++++Joey++++++++++++++++++++

// Real-world example
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(4337846386464738));
console.log(maskCreditCard("4337846386461234"));

// Repeat method
const message2 = "Bad weather... All departures delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️ ".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

///////////////////////////////////////
