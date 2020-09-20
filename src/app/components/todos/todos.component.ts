import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/services/todo.service';

@Component({
  // For mounting the component to the DOM
  // of src/app/app.component.html
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  // todos: Array<object>;

  // for importing services
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // this.todos = [
    //   {
    //     userId: 1,
    //     id: 1,
    //     title: 'a',
    //     completed: true,
    //   },
    //   {
    //     userId: 2,
    //     id: 2,
    //     title: 'b',
    //     completed: true,
    //   },
    //   {
    //     userId: 3,
    //     id: 3,
    //     title: 'c',
    //     completed: false,
    //   },
    // ];

    // this.todos = this.todoService.getTodos();

    // .subscribe is the equivalent of .then in Promises
    this.todoService.getTodos().subscribe((todo) => {
      this.todos = todo;
    });
  }

  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe((fetchTodo) => {
      this.todos.push(fetchTodo);
    });
  }

  // emitting values up the component tree
  deleteTodo(todo: Todo): void {
    // Remove from UI
    this.todos = this.todos.filter((filterTodo) => filterTodo.id !== todo.id);
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }
}
