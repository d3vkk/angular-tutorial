import { Injectable } from '@angular/core';
// for HTTP Requests
import { HttpClient, HttpHeaders } from '@angular/common/http';
// equivalent of fetch API/axios library
import { Observable } from 'rxjs';

import { Todo } from 'src/app/models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosURL = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';
  //

  constructor(private http: HttpClient) {}

  // getTodos(): Array<object>{
  //   return [
  //     {
  //       userId: 1,
  //       id: 1,
  //       title: 'a',
  //       completed: true,
  //     },
  //     {
  //       userId: 2,
  //       id: 2,
  //       title: 'b',
  //       completed: true,
  //     },
  //     {
  //       userId: 3,
  //       id: 3,
  //       title: 'c',
  //       completed: false,
  //     },
  //   ];
  // }

  // Making a HTTP request
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }

  // Updating the boolean completed using a PUT request
  toggleCompleted(todo: Todo): Observable<any> {
    console.log('TodoService -> constructor -> todo.id', todo.id);
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(this.todosURL, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<any>{
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }
}
