class Person {
    // Private properties cannot be accessed outside the class
    private _name: string;
    private _age: number;
  
    // Public constructor to initialize the properties
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
  
    // Public method to get the name
    public getName(): string {
      return this._name;
    }
  
    // Public method to set the name with validation
    public setName(name: string): void {
      if (name.length > 0) {
        this._name = name;
      } else {
        console.log('Invalid name');
      }
    }
  
    // Public method to get the age
    public getAge(): number {
      return this._age;
    }
  
    // Public method to set the age with validation
    public setAge(age: number): void {
      if (age > 0) {
        this._age = age;
      } else {
        console.log('Invalid age');
      }
    }
  }
  
  // Creating an instance of the Person class
  const person = new Person('John Doe', 30);
  
  // Accessing the public methods
  console.log(person.getName()); // Output: John Doe
  person.setName('Jane Doe');
  console.log(person.getName()); // Output: Jane Doe
  
  console.log(person.getAge()); // Output: 30
  person.setAge(25);
  console.log(person.getAge()); // Output: 25
  
  // Trying to access the private properties directly (This will cause an error)
  // console.log(person._name); // Error: Property '_name' is private and only accessible within class 'Person'.
  // console.log(person._age);  // Error: Property '_age' is private and only accessible within class 'Person'.
  