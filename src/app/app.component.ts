import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '1.Nodarbība';
  description = '1111';
  a?: number;
  isVisible = false;
  catNames = ['Podziņa', 'Muris', 'Sniedziņš'];
  cats = [
    { name: 'Minka', age: 14, appearance: { color: 'brown' } },
    { name: 'Garfīlds', age: 6, appearance: { color: 'orange' } },
  ];

  hello(): string {
    return 'Hello';
  }

  sayHello(): void {
    console.log('Hello');
    this.description = 'This is a description';
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}
