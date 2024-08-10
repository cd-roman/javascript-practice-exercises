// Importing module
import { addToCart, totalPrice as price, quantity } from "./shoppingCart.js";

// We can import everything from a module and then use it
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 5);

// We can also import default exports
// In this case, we can name the default export anything we want
// import add from "./shoppingCart.js";

// We can mix named and default imports, but it's not recommended
// The reason is that it makes the code more readable
// import add, { addToCart, totalPrice as price, quantity } from "./shoppingCart.js";

// The preferred way to import is to use one default import for one module

console.log("Importing module");

addToCart("bread", 5);
console.log(price, quantity);

///////////////////////////////////////

// Top-level await (ES2022)

// console.log("Start fetching...");

// Top-level await is a feature that allows us to use await outside of an async function
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

// Top-level await blocks the code execution until the promise is resolved
// console.log("Some text");

//Real-world example
const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    title: data[data.length - 1].title,
    body: data[data.length - 1].body,
  };
};

// Not very clean
// const lastPost = getLastPost();
// lastPost.then((post) => console.log(post));

// Better way
const lastPost2 = await getLastPost();
console.log(lastPost2);

///////////////////////////////////////

// The Module Pattern

// The module pattern is a design pattern used to create private and public encapsulation

const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart.addToCart("apple", 4);
ShoppingCart.addToCart("pizza", 2);
console.log(ShoppingCart);
console.log(ShoppingCart.shippingCost); // undefined
