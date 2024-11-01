import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css',
})
export class NewTasksComponent {
  @Input({ required: true }) id!: string;
  @Output() close = new EventEmitter<void>();
  private taskService = inject(TasksService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onClose() {
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.id
    );
    this.close.emit();
  }
}
