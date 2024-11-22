import { Injectable } from '@angular/core';
import { IStudent } from '../../utils/interface';

// The @Injectable decorator is used to define a class as a service that can be injected into other classes. 
// It is typically used for classes that provide some form of service, such as fetching data from an API, managing state, or performing calculations.
@Injectable({
  providedIn: 'root' // This means the service is available application-wide
})
export class StudentServiceService {

  constructor() { }

  getStudents(): IStudent[] {
    return [
      { name: "Alice", age: 18, std: "12th" },
      { name: "Bob", age: 17, std: "11th" },
      { name: "Charlie", age: 16, std: "10th" },
      { name: "David", age: 18, std: "12th" },
      { name: "Eva", age: 17, std: "11th" },
      { name: "Frank", age: 16, std: "10th" }
    ];
  }
}
