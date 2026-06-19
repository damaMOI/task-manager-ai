import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Signal qui contient la liste des tâches (Angular 21)
  private tasks = signal<Task[]>([]);
  private nextId = 1;

  // Récupérer toutes les tâches
  getTasks() {
    return this.tasks;
  }

  // Ajouter une tâche avec priorité suggérée par l'IA
  addTask(title: string, description: string) {
    const priority = this.suggestPriority(title, description);
    const newTask: Task = {
      id: this.nextId++,
      title,
      description,
      priority,
      completed: false,
      createdAt: new Date()
    };
    this.tasks.update(tasks => [...tasks, newTask]);
  }

  // Supprimer une tâche
  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(t => t.id !== id));
  }

  // Marquer une tâche comme terminée
  toggleComplete(id: number) {
    this.tasks.update(tasks =>
      tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }

  // 🤖 Logique IA simple : suggère une priorité selon des mots-clés
  private suggestPriority(title: string, description: string): 'haute' | 'moyenne' | 'basse' {
    const text = (title + ' ' + description).toLowerCase();
    const urgentWords = ['urgent', 'important', 'deadline', 'critique', 'asap', 'immédiat'];
    const lowWords = ['plus tard', 'optionnel', 'peut-être', 'éventuellement'];

    if (urgentWords.some(word => text.includes(word))) {
      return 'haute';
    }
    if (lowWords.some(word => text.includes(word))) {
      return 'basse';
    }
    return 'moyenne';
  }
}
