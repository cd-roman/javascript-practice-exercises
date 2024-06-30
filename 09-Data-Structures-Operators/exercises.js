"use strict";

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/* 
    1. Destructuring Arrays
*/

// 1.1 Destructure the books array into two variables called firstBook and secondBook.
const [firstBook, secondBook] = books;

// 1.2 Destructure the books array into a variable called thirdBook. You must skip the first two books.
const [, , thirdBook] = books;

// 1.3 Destructure the nested ratings arrays into two variables called rating and ratingsCount.
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount); // 4.19 144584

// 1.4 Destructure ratingStars array into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings); // 63405 1808 0

/* 
    2. Destructuring Objects
*/

// 2.1 Destructure the first book object from the books array into variables called title, author and ISBN.
const { title, author, ISBN } = books[0];

// 2.2 Destructure the first book object from the books array into a variable called tags
const { keywords: tags } = books[0];

// 2.3 Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'
const { languange, programmingLanguage = "unknown" } = books[6];

// 2.4 Reassign the variables below with the values of the title and author properties of the first book object from the books array.
let bookTitle = "unknown";
let bookAuthor = "unknown";
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor); // Algorithms [ 'Robert Sedgewick', 'Kevin Wayne' ]

// 2.5 Each book object has a deeply nested rating property
// Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

// 2.6 Write a function called printBookInfo that has three parameters called title, author and year
// This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}"
function printBookInfo({ title, author, year = "year unknown" }) {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick",
  year: "2011",
}); // Algorithms by Robert Sedgewick, 2011

printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" }); // Algorithms by Robert Sedgewick, unknown

///////////////////////////////////////

/*
    3. Spread Operator
*/

// 3.1 Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays)
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors); // [ 'Robert Sedgewick', 'Kevin Wayne', 'Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)' ]

// 3.2 Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.
const spellWord = (word) => {
  console.log(...word);
};

spellWord("JavaScript");

///////////////////////////////////////

/*
    4. Rest Operator and Parameters
*/

// 4.1 Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest.
// The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

// 4.2 Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object.
// Assign the rest of the properties to the restOfTheBook variable.
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher);

// 4.3 Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments.
// This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".
const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
};

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne"); // The book "Algorithms" has 2 authors

///////////////////////////////////////

/*
    5. Short Circuiting (&& and ||)
*/

// 5.1 Write a function called hasExamplesInJava that takes a book object from the books array as an argument.
// This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

const hasExamplesInJava = function (book) {
  console.log(book.programmingLanguage === "Java" || "no data available");
};

hasExamplesInJava(books[0]);

// Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`${books[i].title} provides online content`);
}

/* 
    6. The Nullish Coalescing Operator (??)
*/

// 6.1 There are objects in the books array that don't have the onlineContent property at all.
// Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(`${books[i].title} provides no data about its online content`);
}

///////////////////////////////////////

/*
    Logical Assignments Operators
*/

// 7.1 Some of the book objects from the books array are missing the edition property.
// Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}

// 7.2 Some of the book objects from the books array have the highlighted property, which by default is set to true.
// Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}

///////////////////////////////////////

// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1
// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

// Task 2
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// Task 3
// Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Task 4
// During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// Task 5
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Task 6
// Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// Test data: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// Then, call the function again with players from game.scored
printGoals(...game.scored);

// Task 7 The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary operator.
team1 < team2 && console.log(`${game.team1} is more likely to win`);
team2 < team1 && console.log(`${game.team2} is more likely to win`);

/*
  8. Looping Arrays: The for-of Loop
*/

// 8.1 Use the for-of loop to loop over the books array and sum the pages of all books.
// Use the pageSum variable below, and the pages property of the book objects.

let pageSum = 0;
for (let book of books) {
  pageSum += book.pages;
  console.log(pageSum);
}

// 8.2 Below is the allAuthors variable which stores an empty array.
// Use the for-of loop to fill allAuthors with the authors of each book from the books array.

const allAuthors = [];

for (const book of books) {
  typeof book.author === "string"
    ? allAuthors.push(book.author)
    : allAuthors.push(...book.author);
}

console.log(allAuthors);

// 8.3 Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.
for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}. ${author}`);
}

///////////////////////////////////////

/*
  9. Enhanced Object Literals
*/

// 9.1 Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already.
const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

// 9.2 Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.
const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};

///////////////////////////////////////

/*
 10. Optional Chaining (?.)
*/

// 10.1 Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist).
// It shouldn't throw an error. Use optional chaining for that.

function getFirstKeyword(book) {
  return book.keywords?.[0];
}

console.log(getFirstKeyword(books[0]));
console.log(getFirstKeyword(newBook2));

///////////////////////////////////////

/*
  11. Looping Objects: Object Keys, Values and Entries
*/

// 11.1 Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array.
// For each key, push a new array that contains that key to the entries array.

const entries = [];

const thirdPartyRatings = Object.keys(books[0].thirdParty.goodreads);
for (const key of thirdPartyRatings) {
  entries.push([key]);
}

// 11.2 Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.
// Push each value to the appropriate inner array in the entries array (use index from entries()).

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}

console.log(entries);

// 11.3 Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.
const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);

///////////////////////////////////////

// Coding Challenge #2

/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.

GOOD LUCK 😀
*/

// Task 1
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// Task 2
// Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(`Average odd: ${average}`);

// Task 3
// Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Task 4
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

///////////////////////////////////////

/*
 12. Sets
*/

// 12.1 Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object.
// The allKeywords array should have just one level (no nested arrays).
const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

// 12.2 The allKeyword array contains duplicates. Remove them by creating a Set out of that array.
// Assign the newly created set to the uniqueKeywords variable.
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

// 12.3 Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.
uniqueKeywords.add("coding").add("science");
console.log(uniqueKeywords);

// 12.4 Delete 'business' from the uniqueKeywords set.
uniqueKeywords.delete("business");
console.log(uniqueKeywords);

// 12.5 Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

// 12.6 Delete all items from the uniqueKeywords set.
uniqueKeywords.clear();
console.log(uniqueKeywords);

///////////////////////////////////////

/*
 13. Maps: Fundamentals
*/

// 13.1 Create a new book, but this time, as a Map. Assign it to the bookMap variable.
const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);

console.log(bookMap);

// 13.2 Set a new key in bookMap called pages, and assign it with a number 464.
bookMap.set("pages", 464);
console.log(bookMap);

// 13.3 Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".
console.log(`"${bookMap.get("title")}" by ${bookMap.get("author")}`);

// 13.4 Get the size of bookMap, and log it to the console.
console.log(bookMap.size);

// 13.5 Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.
bookMap.has("author")
  ? console.log(`The author of the book is known`)
  : console.log(`The author of the book is unknown`);

///////////////////////////////////////

/*
 14. Maps: Iteration
*/

// 14.1 Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

// 14.2 Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.
for (const [key, value] of firstBookMap) {
  if (typeof value === "number") console.log(key);
}

///////////////////////////////////////

// Coding Challenge #3

/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).

GOOD LUCK 😀

*/
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Task 1
//  Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2
// After the game has finished, it was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// Task 3
// Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// Task 4
// Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
// ⚽
// GOAL
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

///////////////////////////////////////

/*
 15. Working with Strings - Part 1
*/

// 15.1 Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8.
// Use bracket notation to access individual characters.
console.log(
  books[0].ISBN["6"],
  books[0].ISBN["4"],
  books[0].ISBN["9"],
  books[0].ISBN[8]
);

// 15.2 Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";
console.log(quote.indexOf("chess"));

// 15.3 Extract the word "boxing" from the same quote string, and log it to the console.
console.log(quote.slice(quote.lastIndexOf(" ") + 1));

// 15.4 Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor).
// The string "(Contributor)" is always the last part of the author's name string.
const isContributor = (author) => {
  console.log(author.endsWith("(Contributor)"));

  // or
  // return author.lastIndexOf('(Contributor)') !== -1;
};

isContributor("Julie Sussman (Contributor)");
isContributor("Robert Sedgewick");

///////////////////////////////////////

/*
 16. Working with Strings - Part 2
*/

// 16.1 Write a function called normalizeAuthorName that takes an author's name (string) as an argument,
// and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

const normalizeAuthorName = (author) => {
  const authorName = author
    .toLowerCase()
    .replaceAll("(contributor)", "")
    .trim();
  const [firstName, lastName] = authorName.split(" ");
  const normalizedAuthor = `${firstName[0].toUpperCase()}${firstName.slice(
    1
  )} ${lastName[0].toUpperCase()}${lastName.slice(1)}`;
  console.log(normalizedAuthor);
};

normalizeAuthorName("  JuliE sussMan (Contributor)");

// 16.2 Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.
const newBookTitle = books[1].title.replace("Programs", "Software");
console.log(newBookTitle);

// 16.3 Write a function called logBookTheme that takes book's title (string), and logs to the console various messages

const logBookTheme = (title) => {
  title = title.toLowerCase();

  if (title.startsWith("computer")) console.log("This book is about computers");
  else if (title.includes("algorhithms") && title.includes("structures"))
    console.log("This book is about algorithms and data structures");
  else if (
    title.endsWith("system") ||
    (title.endsWith("systems") && !title.includes("operating"))
  )
    console.log(
      "This book is about some systems, but definitely not about operating systems"
    );
};

logBookTheme("Computer Systems: A Programmer's Perspective");
logBookTheme("Algorhithms and Data Structures");
logBookTheme("Engineering systems");

///////////////////////////////////////

/*
 17. Working with Strings - Part 3
*/

// 17.1 Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).
const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics";

function logBookCategories(str) {
  const categories = str.split(";");

  for (let category of categories) {
    console.log(category);
  }
}

logBookCategories(bookCategories);

// 17.2 Now, the opposite. Each book from the books array has the keywords property.
// Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates,
// and then joins them to create a single string where keywords are separated by a semicolon.

function getKeywordsAsString(books) {
  const keywords = [];

  for (const book of books) {
    keywords.push(...book.keywords);
  }

  const uniqueKeywords = [...new Set(keywords)];

  return uniqueKeywords.join(";");
}

getKeywordsAsString(books);

// 17.3 Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number.
// The page number should be separated from the chapter's name with underscores (take a look at the example below).
// Use the padEnd method.

const bookChapters = [
  ["The Basics", 14],
  ["Sorting", 254],
  ["Searching", 372],
  ["Graphs", 526],
  ["Strings", 706],
];

function logBookChapters(chapters) {
  for (const [chapter, pages] of chapters) {
    console.log(`${chapter.padEnd(20, "_")} ${pages}`);
  }
}

logBookChapters(bookChapters);
