"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////

// Page navigation

// Attaching the event listener to each element is not efficient
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// The better way to do this is to use event delegation
// Event delegation is the process of attaching the event listener to a common parent element
// And then determining on which element the event originated

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////

// Tabbed component

// Use event delegation for all tabs
tabsContainer.addEventListener("click", function (e) {
  // Get the clicked tab using matching strategy
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  // If the clicked element is not a tab, then return
  if (!clicked) return;

  // Active tab
  // First, we remove the active class from all of them, and then add it to the clicked tab
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  // Remove active class from content areas
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

///////////////////////////////////////
// LECTURES
///////////////////////////////////////

// Selecting, Creating, and Deleting Elements

// Select the entire document
console.log(document.documentElement);
// Select elements
console.log(document.head);
console.log(document.body);

// Select elements using querySelector
const header = document.querySelector(".header");

const allSections = document.querySelectorAll(".section");
// Logs a NodeList with all sections
console.log(allSections);

// Select elements using getElementById
document.getElementById("section--1");

// Select elements using getElementsByTagName
const allButtons = document.getElementsByTagName("button");
// Logs a HTMLCollection with all buttons
console.log(allButtons);

// If we delete an element from the DOM, it will also be removed from the HTMLCollection
// However, it will not be removed from the NodeList
// For example, if we delete the first button, the HTMLCollection will reflect this change
// But if we delete the section from the DOM, the NodeList will not reflect this change

// Select elements using getElementsByClassName
console.log(document.getElementsByClassName("btn"));
// Logs a live HTMLCollection with all elements with the class name "btn"

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent =
//   "We use cookies for improved functionality and analytics.";
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// Append and prepend methods are used to insert elements into the DOM
// If you use prepend and then apend, then the elemtn will use only the last method
// However, if we want to use the method multiple times, we can use the cloneNode method

// header.prepend(message);
// header.append(message.cloneNode(true));

header.append(message);

// Before and after methods
// Before and after methods are used to insert elements before or after a certain element as a sibling

// For example:
// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
    // or an older method is to select the parent element and then remove the child element
    // message.parentElement.removeChild(message);
  });
// This will remove the message element (cookie message) from the DOM

// Insert elements using insertAdjacentHTML
// This method is used to insert elements into the DOM
// It takes two arguments:
// 1. Position
// 2. The HTML code to insert

// For example:
// header.insertAdjacentHTML("afterbegin", "<h2>Welcome to the bank!</h2>");

///////////////////////////////////////

// Styles, Attributes, and Classes

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color); // This will not work because it is not an inline style
console.log(message.style.backgroundColor); // This will work because it is an inline style

// We can use the getComputedStyle method to get the computed styles, which are the styles that are actually applied to the element
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// We can also set the custom properties using the setProperty method
// It's also called CSS variables
// document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
// We can get the attributes of an element using the getAttribute method or directly on the property
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute("src"));
console.log(logo.className);

// We can set the attributes of an element using the setAttribute method or directly on the property
logo.alt = "Beautiful minimalist logo";

// We can even set the custom attributes
logo.setAttribute("company", "Bankist");
console.log(logo.getAttribute("company")); // This will log the value of the custom attribute

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes
// We can use data attributes to store data in the HTML
// The data attributes always start with "data-"
console.log(logo.dataset.versionNumber);

// Classes
// We can add, remove, and toggle classes using the classList property
logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
console.log(logo.classList.contains("c"));

///////////////////////////////////////

// Types of Events and Event Handlers
const h1 = document.querySelector("h1");

// We can add an event listener to an element using the addEventListener method
// It takes two arguments: the event type and the event handler
// The event handler is a function that will be called when the event occurs

// h1.addEventListener("mouseenter", function (e) {
//   alert("addEventListener: Great! You are reading the heading :D");
// });

// Alternative way to add an event listener to an element is to use the on-event property

// h1.onmouseenter = function (e) {
//   alert("on-event: Great! You are reading the heading :D");
// };

// The addEventListener method is the modern way to add event listeners
// It is the recommended way to add event listeners

// We can create a separate function for the event handler
const alertH1 = function (e) {
  alert("addEventListener: Great! You are reading the heading :D");

  // We can remove the event listener after the first event
  h1.removeEventListener("mouseenter", alertH1);

  // Thus, the event listener will only work once
};

// And then pass the function as the second argument to the addEventListener method
h1.addEventListener("mouseenter", alertH1);

// We can also remove event listeners after some time using the setTimeout method
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

///////////////////////////////////////

// Event Propagation: Bubbling and Capturing

// Event propagation is the process of an event being fired and propagated to the parent elements

// Generate random color

const randomtInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomRGB = () =>
  `rgb(${randomtInt(0, 255)}, ${randomtInt(0, 255)}, ${randomtInt(0, 255)})`;

console.log(randomRGB());

// Use the random color for the background of the sections
// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomRGB();
//   console.log("LINK", e.target, e.currentTarget);
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomRGB();
//   console.log("CONTAINER", e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomRGB();
//   console.log("NAV", e.target, e.currentTarget);
// });

// The event propagation has two phases: capturing and bubbling
// The capturing phase is the phase in which the event is captured by the parent elements
// The bubbling phase is the phase in which the event bubbles up to the parent elements

// The bubbling phase is the default behavior of the event propagation
// The event propagation can be stopped using the stopPropagation method
// But it is not recommended to stop the event propagation unless it is absolutely necessary
// The syntax is e.stopPropagation()

// The capturing phase can be used by passing a third argument to the addEventListener method
// It allows us to listen for events in the capturing phase instead of the bubbling phase
// The third argument is an object with the capture property set to true
// The syntax is element.addEventListener("click", function, true or false)

// For example:
// document.querySelector(".nav").addEventListener(
//   "click",
//   function (e) {
//     this.style.backgroundColor = randomRGB();
//     console.log("LINK", e.target, e.currentTarget);
//   },
//   true
// );

// However, capturing phase is rarely used in practice

///////////////////////////////////////

// Smooth scrolling

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  // Get the current scroll position
  console.log("Current scroll (X/Y)", window.scrollX, window.scrollY);

  // Get the current height and width of the viewport
  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Modern way to scroll
  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////

// DOM Traversing

// The DOM traversing is the process of moving up and down the DOM tree
// It is used to select elements based on their relationship to other elements

// For example, h1 doesn't have a class of highlight, but its children elements do
console.log(h1.querySelectorAll(".highlight"));

// We can see all the children elements of h1 using the childNodes property
// It will give us any single node, including text nodes, comments, etc.
console.log(h1.childNodes);

// Often we want to select only the elements, not the text nodes
// We can use the children property to get only the elements
console.log(h1.children);
// The children property returns an HTMLCollection, which is a live collection
// It works only for direct children

// We can slect first and last child elements using the firstElementChild and lastElementChild properties
// We can also set the property of an element
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards: parents
// We can select the parent element using the parentElement property or parentNode property
console.log(h1.parentNode);
console.log(h1.parentElement);

// We can also select the parent element using the closest method
// h1.closest(".header").style.background = "var(--gradient-secondary)";

// Going sideways: siblings
// We can select the sibling elements using the nextElementSibling and previousElementSibling properties
console.log(h1.previousElementSibling); // null
console.log(h1.nextElementSibling); // h4

// To get all the sibling elements, we can use the children property of the parent element
// It gives us an HTMLCollection of all the sibling elements, including the element itself
console.log(h1.parentElement.children);

// We can use this method to style the sibling elements
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });
