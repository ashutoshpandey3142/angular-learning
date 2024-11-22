import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, UserDetailsComponent, CommonModule, TodoItemComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-appilcation';
  val="x";
  userDetails = [
    {name: "Lorem", email: "lorem@gmail.com"},
    {name: "Ipsum", email: "ipsum@gmail.com"},
    {name: "Dolor", email: "dolor@gmail.com"},
    {name: "Sit", email: "sit@gmail.com"},
    {name: "Amet", email: "amet@gmail.com"}
  ]
  data=10;



  newTodo: string = '';
  todos: { title: string, completed: boolean }[] = [
    { title: 'Learn Angular', completed: false },
    { title: 'Build Todo App', completed: false },
    { title: 'Master Angular', completed: false }
  ];




  updateChild() {
    this.data = Math.random() * 100;
  }

  updateData(item: string) {
    console.log(item)
    this.val = item
  }
  onUserDetailsChange(index: number, newDetails: { name: string; email: string }) {
    console.log('User details changed:', newDetails);
    this.userDetails[index] = newDetails;
  }


  // Todo

  addTodo() {
    if (this.newTodo.trim().length > 0) {
      this.todos.push({ title: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleTodoComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTodoItem(index: number) {
    this.todos.splice(index, 1);
  }
}
