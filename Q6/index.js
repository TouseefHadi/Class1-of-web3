"use strict";
const nameWithWhitespace = "\t   \n  John Doe    \t\n";
console.log("Name with whitespace:");
console.log(nameWithWhitespace);
const nameStripped = nameWithWhitespace.trim();
console.log("\nName stripped of whitespace:");
console.log(nameStripped);
