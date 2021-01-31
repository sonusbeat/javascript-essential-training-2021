/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  "--size": "large",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Dot Notation
console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

// Bracket Notation
console.log("The color value:", backpack["color"]);

var query = "color";
console.log("The color value:", backpack[query]);

// Variables without javascript convention
console.log("The size value:", backpack["--size"]);
