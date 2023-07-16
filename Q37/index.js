"use strict";
function makeShirtt(size = "large", message = "I love TypeScript") {
    console.log(`Size: ${size}`);
    console.log(`Message: ${message}`);
    console.log("T-shirt created successfully!");
}
// Calling the function with default size and message
makeShirtt();
// Calling the function with medium size and default message
makeShirtt("medium");
// Calling the function with a different size and message
makeShirtt("small", "I ❤️ OpenAI!");
