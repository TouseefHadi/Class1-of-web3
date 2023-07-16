"use strict";
function describeCity(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("New York", "United States");
describeCity("Sydney"); // Using the default country value
