let array = [];

// Remove last item and return it
array.pop();

// Add the item at the beggining of the array
array.unshift("new-item");

// Sort Alphabetical Order
array.sort();

array.find(function(item) {
  if(item === "item-name") {
    console.log("Item Founded:", item);
  }
});

// Shows the index number of given element
array.indexOf("item-name");

// Deletes the given item from the array
// and the next elements shifts its space
array.splice(array.indexOf("item-name"), 1);

// Iterates and array, like for loop
array.forEach(function(item, id) {
  console.log(id, item);
});

