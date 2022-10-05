import { Component } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  plannerTasks = [
    { description: 'Task 1', done: true },
    { description: 'Task 2', done: true },
  ];
  inputValue = '';

  addTask(): void {
    if (this.inputValue) {
      const newTask = { description: this.inputValue, done: false };
      this.plannerTasks.push(newTask);
      this.inputValue = '';
    }
  }

  deleteTask(index: number): void {
    // this.plannerTasks = this.plannerTasks.filter((task, i) => i !== index);

    this.plannerTasks.splice(index, 1);
  }

  get tasksDoneCount(): number {
    const doneTasks = this.plannerTasks.filter((task) => task.done);
    return doneTasks.length;
  }
}
