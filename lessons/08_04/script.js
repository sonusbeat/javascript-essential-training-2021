/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

// const main = document.querySelector("main");
// main.append(addPack(greenPack));

// function addition(a, b) {
//   return a + b;
// }

// const addition = (a, b) => {
//   return a + b;
// };

// const addition = (a, b) => (a + b);

// const book = (titleValue, priceValue) => ({ title: titleValue, price: priceValue });

const book = (title) => ({ title });

console.log(book("The big horse"));
