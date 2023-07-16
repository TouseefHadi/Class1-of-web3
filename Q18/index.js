"use strict";
// Store the locations in an array
const locations = ["Tokyo", "Paris", "Machu Picchu", "Bora Bora", "Cairo"];
// Print the array in its original order
console.log("Original order:", locations);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...locations].sort());
// Show that the array is still in its original order
console.log("Original order (again):", locations);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...locations].sort().reverse());
// Show that the array is still in its original order
console.log("Original order (again):", locations);
// Reverse the order of the list
locations.reverse();
// Print the array to show that its order has changed
console.log("Reversed order:", locations);
// Reverse the order of the list again
locations.reverse();
// Print the array to show it's back to its original order
console.log("Original order (again):", locations);
// Sort the array so it's stored in alphabetical order
locations.sort();
// Print the array to show that its order has been changed
console.log("Sorted in alphabetical order:", locations);
// Sort the array to change it to reverse alphabetical order
locations.sort((a, b) => b.localeCompare(a));
// Print the array to show that its order has changed
console.log("Sorted in reverse alphabetical order:", locations);
