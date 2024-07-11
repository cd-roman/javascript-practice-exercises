"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// Fake always logged in
// To be removed
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
//

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Converting and Checking Numbers

// All numbers are floating point numbers in JS, no matter how they are written
console.log(23 === 23.0);

// Numbers are represented in binary format in JS
// It means that all numbers are represented in base 2, not base 10

// Base 10 - 0 to 9
// Base 2 - 0, 1

// There are some numbers that cannot be represented accurately in binary format
// For example, 0.1 + 0.2 = 0.30000000000000004
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false which is error in JS

// Two ways to convert string to number
console.log(Number("23")); // 23
console.log(+"23"); // 23

// Parsing
// parseInt - converts string to integer
// In other words, it converts string to number without decimal points
console.log(Number.parseInt("30px")); // 30

// parseInt accepts two arguments: string and radix. Radix is the base of the numeral system
// To avoid some bugs, always use radix 10
console.log(Number.parseInt("30px", 10)); // 30

// parseFloat - converts string to floating point number
console.log(Number.parseFloat("2.5rem")); // 2.5

// isNaN - checks if the value is not a number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20X")); // true
console.log(Number.isNaN(23 / 0)); // false

// isFinite - checks if the value is a finite number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20X")); // false
console.log(Number.isFinite(23 / 0)); // false

// isFinite is better way to check if the value is a number

// isInteger - checks if the value is an integer, not a floating point number
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.0)); // true
// It will return false for floating point numbers
console.log(Number.isInteger(20.5)); // false

/////////////////////////////////////////////////

// Math and Rounding

// Math.sqrt - square root
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
// Cubic root
console.log(8 ** (1 / 3)); // 2

// Math.max - maximum value
console.log(Math.max(5, 18, 23, 11, 2)); // 23
// Mat.max make conversion to number
console.log(Math.max(5, 18, "23", 11, 2)); // 23
// However, it will not parse the string to number
console.log(Math.max(5, 18, "23px", 11, 2)); // NaN

// Math.min - minimum value
console.log(Math.min(5, 18, 23, 11, 2)); // 2

// Math.PI - PI value
console.log(Math.PI); // 3.141592653589793
// We can use PI value to calculate area of circle
console.log(Math.PI * Number.parseFloat("10px") ** 2); // 314.1592653589793

// Math.random - random number between 1 and 6
console.log(Math.trunc(Math.random() * 6) + 1); // 1 to 6 (inclusive)

// Random number between min and max
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomInt(10, 20)); // 10 to 20 (inclusive)

// Rounding integers
// Math.trunc - removes decimal points
console.log(Math.trunc(23.3)); // 23

// Math.round - rounds to nearest integer
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// Math.ceil - rounds up
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// Math.floor - rounds down
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// For negative numbers, Math.trunc and Math.floor work differently
// Math.trunc removes decimal pointsm while Math.floor rounds down
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals
// toFixed - rounds to specified number of decimal points and returns string
// The default number of decimal points is 0, so toFixed() is same as toFixed(0)
console.log((2.7).toFixed()); // 3
console.log((2.7).toFixed(0)); // 3

console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
// to convert string to number, use +
console.log(+(2.345).toFixed(2)); // 2.35

/////////////////////////////////////////////////

// Remainder Operator
// Remainder operator is same as modulo operator

console.log(5 % 2); // 1
console.log(8 % 3); // 2

// Remainder operator is used to check if the number is even or odd
console.log(6 % 2); // 0
console.log(7 % 2); // 1

const isEven = (n) => n % 2 === 0;

console.log(isEven(6)); // true
console.log(isEven(7)); // false
console.log(isEven(527)); // false

// The remainder operator is used to check if the number is divisible by another number

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "orangered";
    if (i % 3 === 0) row.style.backgroundColor = "blue";
  });
});

/////////////////////////////////////////////////

// Numeric Separators
// Numeric separators are used to separate numbers for better readability

const diameter = 287460000000;
console.log(diameter); // 287460000000

// Numeric separators are underscore that can be used to separate numbers
const diameter1 = 287_460_000_000;
console.log(diameter1); // 287460000000

const price = 345_99;
console.log(price); // 34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;
console.log(transferFee1, transferFee2); // 1500 1500

const PI = 3.14_15;
console.log(PI); // 3.1415

// Numeric separators can't be used with strings, and will return NaN
// It means that numeric separators can't be used with Number function, for example for API
console.log(Number("230_000")); // NaN

// parseInt also doesn't work with numeric separators, and will return only the number before the separator
console.log(Number.parseInt("230_000")); // 230

/////////////////////////////////////////////////

// Working with BigInt

// BigInt is a new primitive in JS that allows to work with large numbers, presened in 2020

// This is the maximum number that can be represented in JS
// It is 2 to the power of 53 - 1
console.log(2 ** 53 - 1); // 9007199254740991

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// BigInt can store numbers larger than the maximum safe integer
// To create BigInt, add n at the end of the number
console.log(9007199254740991135n); // 9007199254740991n

// Operations with BigInt
console.log(10000n + 10000n); // 20000n
console.log(10000n * 10000n); // 100000000n

// BigInt and regular numbers can't be mixed
// console.log(10000n + 10000); // Error

// We can use comparison operators with BigInt and regular numbers
// Except for strict equality operators, which will return false
console.log(10000n > 10000); // false
console.log(20n > 15); // true
console.log(10000n === 10000); // false
console.log(20n == 20); // true
console.log(typeof 20n); // bigint
console.log(20n == "20"); // true
console.log(20n + " is a big number"); // 20 is a big number

// Divisions with BigInt
console.log(10n / 3n); // 3n

/////////////////////////////////////////////////

// Dates and Times

// Create a date
// There are four ways to create a date in JS

// 1. Constructor
const now2 = new Date();
console.log(now2); // current date and time

// 2. Parse the date from a Date string
console.log(new Date("Aug 02 2021 18:05:41"));

// This option is not recommended, because it is not consistent across browsers
console.log(new Date("December 24, 2015"));

// Parse the date from the object
console.log(new Date(account1.movementsDates[0]));

// 3. Pass the date as arguments
// Year, Month, Day, Hour, Minute, Second, Millisecond
console.log(new Date(2037, 10, 19, 15, 23, 5)); // November 19, 2037, 15:23:05
// The month is zero based, so 10 is November

// 4. Pass the number of milliseconds since Unix time (January 1, 1970)
console.log(new Date(0)); // January 1, 1970

// 3 days, 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // January 4, 1970

// 3 * 24 * 60 * 60 * 1000 which is 259200000 milliseconds is a timestamp

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 is November
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4 is Thursday
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0

// Format the date
console.log(future.toISOString()); // 2037-11-19T14:23:00.000Z

// Convert the date to a string
console.log(future.toString());

// Get the timestamp for the date
console.log(future.getTime()); // 2142251380000

// We can reverse the process and create a date from the timestamp
console.log(new Date(2142253380000)); // November 19, 2037, 15:23:00

// Get the current timestamp
console.log(Date.now());

// Set the date
future.setFullYear(2040);
console.log(future); // November 19, 2040, 15:23:00

// We can also set the month, day, hour, minute, second, and millisecond

/////////////////////////////////////////////////
