'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Simple Array Methods //

// Slice method

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']

// Slice method does not mutate the original array
console.log(arr); // ['a', 'b', 'c', 'd', 'e']

// Negative slice method returns elements from the end of the array
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']

// We can mix positive and negative values in slice method
console.log(arr.slice(1, -2)); // ['b', 'c']

// Create a shallow copy of the array
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
// It is the same as using spread operator
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// Splice method

// Splice method mutates the original array
// It returns the removed elements
console.log(arr.splice(2)); // ['c', 'd', 'e']

// The original array is now ['a', 'b']
console.log(arr); // ['a', 'b']

// A common use case of splice method is to remove the last element of an array
arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(-1);
console.log(arr); // ['a', 'b', 'c', 'd']

// The second argument of splice method is the number of elements to remove
// For example, arr.splice(1, 2) removes 2 elements starting from index 1

// Reverse method

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
// Reverse method mutates the original array
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// Concat method

const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// Concat method does not mutate the original arrays
console.log(arr); // ['a', 'b', 'c', 'd', 'e']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// Alternatively, the spread operator can be used to concatenate arrays
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// Join method

// Returns a string with the elements of the array separated by a delimiter
console.log(letters.join(' - ')); // 'a - b - c - d - e - f - g - h - i - j'

/////////////////////////////////////

// at method

const arr3 = [16, 95, 38];
console.log(arr3[0]); // 16
console.log(arr3.at(0)); // 16

// The at method is useful when we want to get the element at a negative index
// For example, arr3[-1] would return undefined
// The old way to get the last element of an array was arr3[arr3.length - 1] or arr3.slice(-1)[0]
console.log(arr3[arr3.length - 1]); // 38
console.log(arr3.slice(-1)[0]); // 38

// The at method is a more concise way to get the last element of an array
console.log(arr3.at(-1)); // 38

// The at method also works with strings
console.log('Joey'.at(0)); // 'J'

/////////////////////////////////////

// forEach method

// The forEach method is a higher-order function that takes a callback function as an argument

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using a for-of loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----------forEach----------');
// Using the forEach method
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

console.log('----------forEach with index of the elements----------');
// The forEach method can take up to three arguments: the current element, the index, and the array
// The order of the arguments matters and they must be in this order
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// The forEach method can't be used to break out of the loop
// It means that we can't use the break statement or continue statement inside the callback function

/////////////////////////////////////

// forEach with Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log('----------forEach method with Maps----------');

// The forEach method for maps takes a callback function with three arguments: the value, the key, and the map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Similar to maps, when using with sets, the forEach method takes a callback function with three arguments: the value, the key, and the map

const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR']);

console.log('----------forEach method with Sets----------');

console.log(currenciesUnique); // Set(3) {'USD', 'EUR', 'GBP'}

// We don't have keys in sets, so the key argument is the same as the value argument
// We use an underscore to indicate that we are not going to use the key argument
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});

/////////////////////////////////////
