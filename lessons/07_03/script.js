/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

// for (let i = 0; i < backpackContents.length; i++) {
//   console.log(`<li>${backpackContents[i]}</li>`);
// }

backpackContents.forEach(function (item) {
  console.log(`<li>${item}</li>`);
});

let itemFounded = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});

console.log("itemFounded:", itemFounded);

console.log(backpackContents.join(" | "));

backpackContents.pop();
console.log(backpackContents);

backpackContents.push("orange");
console.log(backpackContents);

backpackContents.shift();
console.log(backpackContents);

backpackContents.unshift("raspberry");
console.log(backpackContents);

// Multiple Items

backpackContents.push("kiwi", 1250);
console.log(backpackContents);

backpackContents.unshift("Mexico", "Argentina");
console.log(backpackContents);
