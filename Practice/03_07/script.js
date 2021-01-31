/**
 * Practice: Building Objects
 *
 * 1- Give each object an identifiable name.
 * 2- Create properties to describe the objects and set their values.
 * 3- Find an object that has another object inside of it to create a
 *    nested object.
 * 4- Test your objects int the browser console by accessing the
 *    entire object and its specific properties.
 */

const mobile = {
  color: "black",
  price: 575,
  brand: "Samsung",
  battery: {
    type: "Lithium",
    cargeTime: "2 hours",
  },
  active: false,
  enable: function () {
    this.active = true;
  },
};

console.log(mobile);
console.log("Color:", mobile.color);
console.log("Brand:", mobile.brand);
console.log("Price:", mobile["price"]);
console.log("Batery Type:", mobile.battery.type);
console.log("Battery Charge Time:", mobile.battery["cargeTime"]);
console.log("Active:", mobile.active);
mobile.enable(true);
console.log("Active:", mobile.active);
