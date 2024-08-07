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
