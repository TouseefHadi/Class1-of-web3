"use strict";
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer,
        modelName
    };
    for (let option of options) {
        const [key, value] = option;
        car[key] = value;
    }
    return car;
}
// Calling the function with required and optional information
const carInfo = createCar("Tesla", "Model S", ["color", "red"], ["sunroof", true]);
console.log(carInfo);
