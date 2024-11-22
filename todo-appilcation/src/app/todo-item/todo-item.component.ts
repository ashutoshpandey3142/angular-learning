import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: { title: string, completed: boolean } = { title: '', completed: false };
  @Input() index: number = 0;

  @Output() toggleComplete = new EventEmitter<number>();
  @Output() deleteTodo = new EventEmitter<number>();

  onToggleComplete() {
    this.toggleComplete.emit(this.index);
  }

  onDeleteTodo() {
    this.deleteTodo.emit(this.index);
  }
}
