/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Notebook from "./Notebook.js";
import Pen from "./Pen.js";

const notebook = new Notebook("Math", 100, 2.25);

console.log(`"Notebook"`);
console.log("Name:", notebook.name);
console.log("Sheets Quantity:", notebook.sheetsQty);
console.log("Price:", notebook.price);
notebook.changePrice(1.25);
console.log("New Price:", notebook.price);

console.log("");

console.log(`"Pen"`);
const pen = new Pen("Bic", "red", 15);
console.log("Name:", pen.name);
console.log("Color:", pen.color);
console.log("Quantity:", pen.quantity);

pen.changeColor("green");
console.log("New Color:", pen.color);
