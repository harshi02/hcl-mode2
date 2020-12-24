import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line:no-inferrable-types
  // userLoggedIn: boolean = false; // for input example

  title = 'lab3';

  greet(ob: any) {
    alert(`The customer ${ob.name} is location at ${ob.address}`);
  }
}
