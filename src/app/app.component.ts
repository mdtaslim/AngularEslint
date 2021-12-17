import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1: string;

  title = 'AngularEslint';
  MyVar = 'Test';

  x1: string[] = ['a', 'b'];

  hero = {
    firstName: 'Ada',
    lastName: 'Lovelace',
    birthYear: 1815,
    superPower: 'computers'
  };

  te = false;

  myMap = ['foo', 'bar'];
}
