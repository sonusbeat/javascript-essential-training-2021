/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

 /**
  * The result of addition of two numbers
  * @param {number} a First number
  * @param {number} b Second number
  * @return number The result of addition
  */
function math(a, b) {
  return a + b;
}

console.log("Addition:", math(2, 4) );

// Function declaration:
// function doSomeMath(a, b) {
//   let c = a + b;
//   return c;
// }

/**
 * Make addition of two numbers
 * @param {number} a The first number
 * @param {number} b The second number
 * @return {number}
 */
const addition = function(a = 0, b = 0) {
  return a + b;
}

console.log("Addition:", addition(12, 85));

// Function expression:
// const doMoreMath = function (a = 3, b = 2) {
//   let c = a * b;
//   return c;
// };

// console.log("Do some math:", doSomeMath(5, 6));
// console.log("Do more math:", doMoreMath(5, 6));

(function(name) {
  console.log(`Hola ${name}`);
})("javier");

// Immediately Invoked Function Expression (IIFE)
// (function () {
//   let a = 4;
//   let b = 6;
//   let c = doSomeMath(a, b);
//   console.log(`The sum of a and b is: ${c}`);
// })();
