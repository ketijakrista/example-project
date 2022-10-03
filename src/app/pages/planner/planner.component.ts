import { Component } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  plannerTasks = [{ description: 'Task 1', done: true }];
  inputValue = '';

  addTask(): void {
    const newTask = { description: this.inputValue, done: false };
    this.plannerTasks.push(newTask);
  }
}
