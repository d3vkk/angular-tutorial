// Entry point for components. Just like App.vue
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// for HTTP Requests
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  // For components
  declarations: [AppComponent, TodosComponent, TodoItemComponent, HeaderComponent, AddTodoComponent, AboutComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  // For services
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
