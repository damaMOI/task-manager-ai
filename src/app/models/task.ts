export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'haute' | 'moyenne' | 'basse';
  completed: boolean;
  createdAt: Date;
}
