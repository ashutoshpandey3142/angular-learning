import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service/student-service.service';
import { IStudent } from '../utils/interface';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
  // providers: [StudentServiceService]
})
export class StudentListComponent {
  // public students = [
  //   { name: "Alice", age: 18, std: "12th" },
  //   { name: "Bob", age: 17, std: "11th" },
  //   { name: "Charlie", age: 16, std: "10th" },
  //   { name: "David", age: 18, std: "12th" },
  //   { name: "Eva", age: 17, std: "11th" },
  //   { name: "Frank", age: 16, std: "10th" }
  // ];

  public students: IStudent[];

  constructor(private std: StudentServiceService) {
    this.students = std.getStudents();
    console.log(this.students)
  }
  
}
