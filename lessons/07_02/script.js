/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);

console.log("lenght", collection.length);

for (let i = 0; i < collection.length; i++) {
  console.log(`[${i}]`, collection[i]);
}

collection[4] = "orange";

console.log(collection);

collection[0] = "cat";

console.log(collection);
