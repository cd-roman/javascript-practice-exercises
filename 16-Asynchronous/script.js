"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

// API URL
// https://countries-api-836d.onrender.com/countries/name/{countryName}

///////////////////////////////////////

// Old way of making AJAX calls

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     "GET",
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//           <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(1)}M people</p>
//               <p class="country__row"><span>🗣️</span>${
//                 data.languages[0].name
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies[0].name
//               }</p>
//           </div>
//           </article>
//       `;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("portugal");
// getCountryData("usa");

///////////////////////////////////////

// Sequence of AJAX calls (Callback Hell)

const renderCountry = function (data, className = "") {
  const html = `
            <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
            </div>
            </article>
        `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  );
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (country 2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open(
      "GET",
      `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
    );
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      //   console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};

// getCountryAndNeighbour("portugal");
// getCountryAndNeighbour("usa");

// Another example of callback hell

// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 seconds passed");
//     setTimeout(() => {
//       console.log("3 seconds passed");
//       setTimeout(() => {
//         console.log("4 seconds passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

///////////////////////////////////////

// Promises and Fetch API (Escape callback hell)

// Modern way of making AJAX calls using Fetch API

const request = fetch(
  `https://countries-api-836d.onrender.com/countries/name/portugal`
);
// console.log(request); // Promise {<pending>}

// Consuming promises

const getCountryData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then((response) => {
      // response.json() returns a promise
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
    });
};

// getCountryData("portugal");

///////////////////////////////////////

// Chaining promises

const getCountryDataChain = function (country) {
  // Country 1
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then((response) => {
      // response.json() returns a promise
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
      );
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderCountry(data, "neighbour");
    });
};

// getCountryDataChain("portugal");

///////////////////////////////////////

// Handling rejected promises (Handling errors)

const getCountryDataError = function (country) {
  // Country 1
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then((response) => {
      // response.json() returns a promise
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
      );
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderCountry(data, "neighbour");
    })
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong! ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener("click", function () {
//   getCountryDataError("portugal");
// });

///////////////////////////////////////

// Throwing errors manually

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

const getCountryDataThrowError = function (country) {
  // Country 1
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    "Country not found"
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found!");

      // Country 2
      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => {
      renderCountry(data, "neighbour");
    })
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong! ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener("click", function () {
//   getCountryDataThrowError("portugal");
// });

// getCountryDataThrowError("notexistingcountry");

///////////////////////////////////////

// Coding Challenge #1

const useJSON = function (url) {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`Problem with geocoding (${res.status})`);
    }

    return res.json();
  });
};

const whereAmI = function (lat, lng) {
  useJSON(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return useJSON(
        `https://countries-api-836d.onrender.com/countries/name/${data.country}`
      );
    })
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong! ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener("click", function () {
//   whereAmI(52.508, 13.381);
//   // whereAmI(19.037, 72.873);
//   // whereAmI(-33.933, 18.474);
// });

// Promise methods overview

// Promise is an object representing the eventual completion or failure of an asynchronous operation
// .then method is used to consume the promise and return a new promise

// .then method is called when the promise is fulfilled
// .catch method is called when the promise is rejected
// .finally method is called when the promise is settled (fulfilled or rejected

// Event loop in practice

// Event loop is a mechanism that makes JavaScript non-blocking
// Event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks

// Example of event loop
// First, console.log("Test start") is executed
// Then, console.log("Test end") is executed since it is synchronous
// Promise.resolve will be executed before setTimeout since microtask queue has higher priority than callback queue
// setTimeout is executed in the next event loop iteration after the microtask queue is empty

// The order of execution is as follows:
// 1 - synchronous code
console.log("Test start");
// 5 - callback queue
setTimeout(() => console.log("0 sec timer"), 0);
// 3 - microtask queue
Promise.resolve("Resolved promise 1").then((res) => console.log(res));
// 4 - microtask queue
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});
// 2 - synchronous code
console.log("Test end");

///////////////////////////////////////

// Building a simple promise

// Promise is an object representing the eventual completion or failure of an asynchronous operation
// It takes an executor function with two arguments: resolve and reject

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lottery draw is happening 🔮");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN 💰");
//     } else {
//       reject(new Error("You lost"));
//     }
//   }, 2000);
// });

// Consuming promises

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2)
//   .then(() => {
//     console.log("I waited for 2 seconds");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("I waited for 1 second");
//     return wait(3);
//   })
//   .then(() => {
//     console.log("I waited for 3 second");
//     return wait(2);
//   })
//   .then(() => {
//     console.log("I waited for 2 second");
//   });

// Create a promise that immediately resolves
Promise.resolve("abc").then((x) => console.log(x));
// Create a promise that immediately rejects
Promise.reject(new Error("Problem!")).catch((x) => console.error(x));

///////////////////////////////////////

// Promisifying the Geolocation API

// Getting the current position using the callback-based API
// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.error(err)
// );

// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((pos) => console.log(pos));

const whereAmIPromise = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Problem with geocoding (${response.status})`);
      }

      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(
        `https://countries-api-836d.onrender.com/countries/name/${data.country}`
      );
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Country not found (${res.status})`);
      }

      return res.json();
    })
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong! ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", whereAmIPromise);

///////////////////////////////////////

// Error handling with try...catch statement

// A schematic example of try...catch statement

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

///////////////////////////////////////

// Consuming promises with async/await
// And error handling with try...catch statement

const whereAmIAsync = async function () {
  try {
    // Geolocation using getPosition function above
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) {
      throw new Error("Problem getting location data");
    }

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
    );
    if (!res.ok) {
      throw new Error("Problem getting country data");
    }

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    renderError(`💥💥💥 ${err.message}`);

    // Reject promise returned from async function to handle error outside of the function
    throw err;
  }
};

// Returning values from async functions

// console.log("1: Will get location");

// whereAmIAsync()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => {
//     console.error(`2: ${err.message}`);
//   })
//   .finally(() => {
//     console.log("3: Finished getting location");
//   });

// IIFE to immediately invoke the async function

// (async function () {
//   try {
//     const city = await whereAmIAsync();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}`);
//   }
//   console.log("3: Finished getting location");
// })();

///////////////////////////////////////

// Running promises in parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // Parallel promise
    // Promise.all takes an array of promises and returns a new promise
    // If one of the promises is rejected, the whole promise is rejected
    const data = await Promise.all([
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries("portugal", "italy", "france");

///////////////////////////////////////

// Other promise combinators: race, allSettled, any

// Promise.race
// Returns an array of promises and the first settled promise (fulfilled or rejected) is returned

(async function () {
  const res = await Promise.race([
    getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/usa`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/germany`),
  ]);
  console.log(res[0]);
})();

// Timeout promise that automatically rejects after a certain time
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://countries-api-836d.onrender.com/countries/name/spain`),
  timeout(0.2),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// Promise.allSettled
// Takes an array of promises and returns an array of all settled promises (fulfilled or rejected)

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.any
// Takes an array of promises and returns the first fulfilled promise, ignoring rejected promises

Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
