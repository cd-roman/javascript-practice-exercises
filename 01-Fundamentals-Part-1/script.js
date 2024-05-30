const country = "Ukraine";
const continent = "Europe";
let population = 36;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "Ukrainian";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 = `${country} is in ${continent} and its ${population} million people speak ${language}`;

console.log(description1);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
        below average`
  );
}

const averagePopulation = 33;

if (population > averagePopulation) {
  console.log(
    `${country}'s population is ${
      population - averagePopulation
    } million above average country population`
  );
}
