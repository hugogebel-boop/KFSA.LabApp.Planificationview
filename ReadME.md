# 📊 KFSA LabApp — Prototype Vue Planification

Ce projet est une **proposition de design** pour la **vue de planification** de l’application **KFSA LabApp**.  
Il s’agit d’un prototype front-end (React + Vite + Tailwind) destiné à explorer différentes manières de représenter et organiser les échantillons et essais en laboratoire.

---

## 🎯 Objectif

- Offrir une **expérience visuelle claire et moderne** pour suivre la planification des essais.
- Tester plusieurs **vues complémentaires** :
  - **Kanban** : suivi par statut (*À faire, En cours, Terminé, Validé*).
  - **Semaine** : planning hebdomadaire compact avec ressources et indicateurs de surcharge.
  - **Liste** : tableau filtrable et triable avec toutes les informations détaillées.

---

## 🖼️ Aperçu

### Kanban
Organisation des essais par statut, avec badges *Affaire* et *Échantillon*.

### Vue Semaine
Planning compact par ressource et par jour.  
Affiche jusqu’à 3 essais par cellule avec un badge `+N` pour les débordements.

### Liste
Vue tabulaire simple pour rechercher, trier et exporter les données.

---

## 🛠️ Stack technique

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) ⚡
- [Tailwind CSS](https://tailwindcss.com/) 🎨
- Icônes [Lucide](https://lucide.dev/) 🖌️

---

## 🚀 Lancer en local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run dev
````

Puis ouvrir [http://localhost:5173](http://localhost:5173).

---

## 🌐 Déploiement GitHub Pages

Le projet est configuré pour être publié via **GitHub Actions** sur Pages.
Il suffit de pousser sur `main` et le workflow build + déploiement se lance automatiquement.

---

## 📌 Note

Ce projet est **uniquement un prototype de design**.
Il ne contient pas la logique métier (EF Core, SQLite, import Excel, etc.) de l’application **KFSA LabApp**.

---
