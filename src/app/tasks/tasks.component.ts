import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTasksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUsersTasks(this.id);
  }



  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(task: NewTask) {
    this.tasksService.addTask(task, this.id);
    this.isAddingTask = false;
  }

}
