/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Book from "./Book.js";

const book1 = new Book("Learning Javscript", 12.95, "Programming");
book1.toggleActive(true);
console.log("Name:", book1.name);
console.log("Price:", book1.price);
console.log("Topic:", book1.topic);
console.log("Active:", book1.active);

console.log("");

const book2 = new Book("Node.js", 8.25, "Programming");
console.log("Name:", book2.name);
console.log("Price:", book2.price);
console.log("Topic:", book2.topic);
console.log("Active:", book2.active);

console.log("");

const book3 = new Book("UI and UX", 5.25, "Design");
book3.toggleActive(true);
console.log("Name:", book3.name);
console.log("Price:", book3.price);
console.log("Topic:", book3.topic);
console.log("Active:", book3.active);

console.log("");

const book4 = new Book("Learning Mysql", 8.25, "Backend Programming");
book4.toggleActive(true);
console.log("Name:", book4.name);
console.log("Price:", book4.price);
console.log("Topic:", book4.topic);
console.log("Active:", book4.active);

console.log("");

const book5 = new Book("How to make a cake", 5.25, "Cooking");
book5.toggleActive(true);
console.log("Name:", book5.name);
console.log("Price:", book5.price);
console.log("Topic:", book5.topic);
console.log("Active:", book5.active);
