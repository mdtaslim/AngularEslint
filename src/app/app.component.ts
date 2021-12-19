import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEslint';
  Title1 = 'test';

  MyVar = 'Test';

  x1: string[] = ['a', 'b'];

  te = false;

  myMap = ['foo', 'bar'];
}
