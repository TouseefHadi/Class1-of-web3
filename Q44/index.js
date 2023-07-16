"use strict";
function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (let item of items) {
        console.log(item);
    }
    console.log("Bread\n");
}
// Calling the function with different number of arguments
makeSandwich("Cheese", "Lettuce", "Tomato");
makeSandwich("Ham", "Mustard");
makeSandwich("Turkey", "Mayonnaise", "Avocado", "Bacon");
