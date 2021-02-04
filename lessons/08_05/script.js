/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

window.price = 5.25;

const book = {
  name: "Pinoccio",
  price: 2.25,
  quantity: 25,
  state: "new",
  active: true,

  /**
   * Set total price
   * @param {number} tax Tax percentage
   * @returns {number} Price with tax included
   */
  setTotal: function(tax) {
    // (function(){
    //   console.log("Product price:", this.price);
    // })()

    (() => console.log("Product price:", this.price))();
    
    return ((tax / 100) * this.price) + this.price;
  }
};


console.log(book.setTotal(12));

// Define a default volume for the window (the entire DOM):
// window.volume = 20;

// const greenPack = {
//   name: "Frog Pack",
//   color: "green",
//   volume: 8,
//   pocketNum: 3,
//   newVolume: function (volume) {
//     console.log("this.volume in the method:", this.volume);
//     this.volume = volume;
//     console.log("this.volume after update:", this.volume);
//     // (function () {
//     //   console.log("this.volume in nested function:", this.volume);
//     // })();
//   },
// };

// console.log(greenPack.newVolume(5));
