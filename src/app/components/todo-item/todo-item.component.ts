// Input is imported to pass down the prop
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from 'src/services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  // emitting values up the component tree
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  // Set Dynamic Classes
  setClasses(): object {
    return {
      // always add todo class
      todo: true,
      // conditionally add is-complete class
      'is-complete': this.todo.completed,
    };
  }

  onToggle(todo: Todo): void {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle in server
    this.todoService.toggleCompleted(todo).subscribe((logTodo) => {
      console.log(logTodo);
    });
  }

  onDelete(todo: Todo): void {
    // emitting values up the component tree
    this.deleteTodo.emit(todo);
  }
}
