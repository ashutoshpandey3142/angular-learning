class Shape {
    draw(): void {
      console.log("Drawing shape...");
    }
  }
  
  class Circle extends Shape {
    draw(): void {
      console.log("Drawing circle...");
    }
  }
  
  class Square extends Shape {
    draw(): void {
      console.log("Drawing square...");
    }
  }
  
  const circle = new Circle();
  const square = new Square();
  
  circle.draw(); // Output: Drawing circle...
  square.draw(); // Output: Drawing square...
  