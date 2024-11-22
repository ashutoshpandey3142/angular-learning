// It involves hiding the complex implementation details of a system and exposing only the necessary and relevant parts to the user. 

abstract class Animal {
    // Abstract method (must be implemented by subclasses)
    abstract makeSound(): void;
  
    // Concrete method (can be used by subclasses as is)
    move(): void {
      console.log('Moving...');
    }
  }
