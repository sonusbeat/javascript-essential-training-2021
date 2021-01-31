/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  changeName: function (value) {
    this.name = value;
  },
  changeVolume: function (value) {
    this.volume = value;
  },
  changeColor: function (value) {
    this.color = value;
  },
  changePocketNumber: function (value) {
    this.pocketNum = value;
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  changeStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("Name:", backpack.name);
console.log("Volume:", backpack.volume);
console.log("Color:", backpack.color);
console.log("Pocket Number:", backpack.pocketNum);
console.log("Strap Length Left:", backpack.strapLength.left);
console.log("Strap Length Right:", backpack.strapLength.right);

backpack.changeName("School Backpack");
backpack.changeVolume(20);
backpack.changeColor("Green");
backpack.changePocketNumber(20);
backpack.changeStrapLength(20, 20);

console.log("Name:", backpack.name);
console.log("Volume:", backpack.volume);
console.log("Color:", backpack.color);
console.log("Pocket Number:", backpack.pocketNum);
console.log("Strap Length Left:", backpack.strapLength.left);
console.log("Strap Length Right:", backpack.strapLength.right);
