interface CanFly {
    fly(): void;
  }
  
  interface CanSwim {
    swim(): void;
  }
  
  class Duck implements CanFly, CanSwim {
    fly(): void {
      console.log("Flying...");
    }
  
    swim(): void {
      console.log("Swimming...");
    }
  }
  
  const duck = new Duck();
  duck.fly(); // Output: Flying...
  duck.swim(); // Output: Swimming...
  