import { Injectable } from '@angular/core';
import { dummyTasks } from './dummyTasks';
import { NewTask } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUsersTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: NewTask, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      ...task,
    });
    this.saveTasks();
  }

  deletingTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
  
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
