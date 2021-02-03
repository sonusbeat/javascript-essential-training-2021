/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let fruits = [
  "orange",
  "bannana",
  "coconut",
  "pineapple",
  "avocado",
  "pear",
  "guava",
  "grapes",
];

// Remove last item
let lastItem = fruits.pop();

// Add the item at the beggining of the array
fruits.unshift(lastItem);
fruits.sort();

// let fruitFounded = fruits.find(fruit => fruit === "orange");
// console.log("Fruit Founded:", fruitFounded);

fruits.find(function(fruit) {
  if(fruit === "orange") {
    console.log("Fruit Founded:", fruit);
  }
});

console.log("Index of Guava:", fruits.indexOf("guava"));

fruits.splice(fruits.indexOf("guava"), 1);

fruits.forEach(function(item, id) {
  console.log(id, item);
});

