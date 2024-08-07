// Exporting module
console.log("Exporting module");

// Variables inside a module are private to the module
const shippingCost = 10;

// In order to make a variable public, we need to export it
export const cart = [];

// Once we export a variable, we can import it in another module and use it there

// We can also export functions
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// Export can be done only from the top level code, not inside a block of code

// We can exort multiple things from a module using named exports
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as quantity };

// If we want to export only one thing from a module, we can use default export
// We can have only one default export per module
// Default export can be imported without using curly braces

// export default function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// }
