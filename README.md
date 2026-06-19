# 📋 Task Manager AI

Gestionnaire de tâches intelligent développé avec **Angular 21** et un back-end **Node.js**, intégrant une couche d'**IA** qui suggère automatiquement la priorité de chaque tâche.

## 🚀 Fonctionnalités

- ✅ Création, suppression et complétion de tâches
- 🤖 **Suggestion automatique de priorité** (haute / moyenne / basse) par analyse du contenu
- 🎨 Composant bouton **réutilisable** (logique Design System)
- ⚡ Gestion d'état réactive avec les **Signals d'Angular 21**

## 🛠️ Stack technique

**Front-end**
- Angular 21 · TypeScript
- Angular Signals (`signal`, `input`, `output`)
- Composants standalone

**Back-end**
- Node.js · Express
- API REST (GET / POST / PUT / DELETE)
- CORS

**IA**
- Algorithme de classification par mots-clés pour l'attribution de priorité

## 🧠 Logique IA

Le système analyse le titre et la description de chaque tâche pour détecter des mots-clés (urgent, deadline, optionnel...) et attribue automatiquement un niveau de priorité.

## ⚙️ Installation

**Front-end**
```bash
cd task-manager-ia
npm install
ng serve
```
➡️ http://localhost:4200

**Back-end**
```bash
cd task-manager-api
npm install
node server.js
```
➡️ http://localhost:3000

## 👩‍💻 Auteur

**Damarice MENGBA NKOA**
Développeuse Full-Stack & IA.