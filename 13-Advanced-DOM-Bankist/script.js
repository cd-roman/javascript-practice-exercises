"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

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
