import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Button } from '../ui/button';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, Button],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  private taskService = inject(TaskService);
  tasks = this.taskService.getTasks();
  newTitle = '';
  newDescription = '';

  addTask() {
    if (this.newTitle.trim()) {
      this.taskService.addTask(this.newTitle, this.newDescription);
      this.newTitle = '';
      this.newDescription = '';
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  toggleComplete(id: number) {
    this.taskService.toggleComplete(id);
  }
}