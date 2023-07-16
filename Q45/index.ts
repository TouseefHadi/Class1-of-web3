function createCar(manufacturer: string, modelName: string, ...options: any[]): any {
    const car: any = {
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
  