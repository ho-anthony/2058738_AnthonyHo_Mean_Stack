import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskTracker';
  taskList = new Array;

  addTask(taskForm:NgForm):void {
    let tasks = taskForm.value;
    let taskJson = {
      "id":tasks.taskID,
      "name":tasks.taskName,
      "task":tasks.taskTask,
      "deadline":tasks.taskDeadline,
    }
    this.taskList.push(taskJson);
  }

}
