const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de données en mémoire (liste de tâches)
let tasks = [];
let nextId = 1;

// 🤖 Logique IA : suggère une priorité selon des mots-clés
function suggestPriority(title, description) {
  const text = (title + ' ' + description).toLowerCase();
  const urgentWords = ['urgent', 'important', 'deadline', 'critique', 'asap', 'immédiat'];
  const lowWords = ['plus tard', 'optionnel', 'peut-être', 'éventuellement'];

  if (urgentWords.some(word => text.includes(word))) return 'haute';
  if (lowWords.some(word => text.includes(word))) return 'basse';
  return 'moyenne';
}

// GET — Récupérer toutes les tâches
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// POST — Créer une tâche (avec priorité suggérée par l'IA)
app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Le titre est obligatoire' });
  }
  const newTask = {
    id: nextId++,
    title,
    description: description || '',
    priority: suggestPriority(title, description || ''),
    completed: false,
    createdAt: new Date()
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT — Marquer une tâche comme terminée/non terminée
app.put('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Tâche introuvable' });
  }
  task.completed = !task.completed;
  res.json(task);
});

// DELETE — Supprimer une tâche
app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: 'Tâche supprimée' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ API Task Manager démarrée sur http://localhost:${PORT}`);
});