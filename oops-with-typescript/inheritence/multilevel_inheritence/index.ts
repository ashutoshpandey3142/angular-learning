class Vehicle {
    start(): void {
      console.log("Vehicle started...");
    }
  }
  
  class Car extends Vehicle {
    drive(): void {
      console.log("Driving...");
    }
  }
  
  class SportsCar extends Car {
    turboBoost(): void {
      console.log("Turbo boost activated...");
    }
  }
  
  const sportsCar = new SportsCar();
  sportsCar.start(); // Output: Vehicle started...
  sportsCar.drive(); // Output: Driving...
  sportsCar.turboBoost(); // Output: Turbo boost activated...
  