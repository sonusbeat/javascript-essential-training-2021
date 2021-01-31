/* 
  (this)
  refers to the current object itself,
  the context of the current object.
*/

const backpack = {
  // Strings
  name: "School Backpack",
  color: "gray",
  // Numbers
  volume: 30,
  // Objects
  strapLength: {
    left: 26,
    right: 26,
  },
  // Boolean
  lidOpen: false,
  // Methods
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};
