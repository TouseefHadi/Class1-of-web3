function describeCity(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Calling the function for three different cities
  describeCity("Karachi", "Pakistan");
  describeCity("New York", "United States");
  describeCity("Sydney"); // Using the default country value
  