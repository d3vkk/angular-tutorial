import { Component } from '@angular/core';

@Component({
  // For mounting the component to the DOM
  // of src/index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';
  // firstName: string;

  // constructor() {
  //   console.log(123);
  //   this.firstName = 'Felicitas';
  // }

  // // void infers the type of the return value
  // changeFirstName(firstName: string): void {
  //   firstName = 'Maudie';
  // }
}
