/**
 * Arithmetic operators
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

let a = 5;
let b = 4;
let c = 3.2;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);
console.log(`let c: ${c} (${typeof c})`);

console.log("Addition: ", a + b);
console.log("Substraction: ", a - b);
console.log("Multiply: ", a * b);
console.log("Division: ", a / b);
console.log((a * b) / c);
console.log("Modulus:", 5 % 2);
console.log("Exponetiation:", 2 ** 2);

let d = 0;
console.log("Increment:", d++);
console.log("Increment:", d++);
console.log("Increment:", d++);
console.log("Decrement:", d--);
console.log("Decrement:", d--);
console.log("Decrement:", d--);

console.log("");

console.log("Increment:", ++d);
console.log("Decrement:", --d);
