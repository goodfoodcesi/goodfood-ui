# 🍽️ GoodFood UI

**GoodFood UI** est une bibliothèque de composants React réutilisables construite avec **TypeScript**, **Tailwind CSS v4** et **Storybook**.  
Elle sert de base commune pour les projets GoodFood (Next.js, applications internes, etc.), afin de garantir une cohérence visuelle et une maintenance simplifiée.

---

## 🧰 Structure du projet

src/  
├─ components/              → Tous les composants React  
│  ├─ button/  
│  │  ├─ GoodFoodButton.tsx  
│  │  └─ GoodFoodButton.stories.tsx  
│  ├─ input/  
│  │  ├─ GoodFoodInput.tsx  
│  │  └─ GoodFoodInput.stories.tsx  
│  └─ ...  
│  
├─ styles/  
│  ├─ index.css             → Point d’entrée unique des styles exportés  
│  ├─ tokens/               → Variables globales (couleurs, radius, spacing...)  
│  │  ├─ colors.css  
│  │  ├─ radius.css  
│  │  ├─ spacing.css  
│  │  └─ typography.css  
│  ├─ components/           → Styles spécifiques à un composant  
│  │  └─ button.css  
│  └─ utilities.css         → Classes utilitaires custom  
│  
└─ lib/  
   └─ utils.ts              → Fonctions utilitaires partagées

---

## 🚀 Présentation

- ⚛️ **React + TypeScript** : composants typés et réutilisables.  
- 🎨 **TailwindCSS v4** : styles modulaires basés sur des *tokens CSS* (couleurs, radius, spacing, etc.).  
- 🧩 **Storybook** : documentation et test visuel de chaque composant.  
- 🪄 **Compatible ShadCN UI** : possibilité d’importer et de personnaliser les composants ShadCN selon la charte GoodFood.

---

## 🧪 Lancer Storybook

Storybook permet de visualiser et tester chaque composant individuellement dans un environnement isolé.

```BASH
npm run storybook
```

Ensuite, ouvre ton navigateur sur :  
http://localhost:6006

---

## 🧱 Nomenclature des composants

Chaque composant suit cette structure :

src/components/nom/  
├── GoodFoodNom.tsx  
└── GoodFoodNom.stories.tsx

**Convention :**
- Les composants commencent toujours par `GoodFood` (ex: `GoodFoodButton`, `GoodFoodInput`).  
- Les stories portent le même nom et définissent les variantes (`Solid`, `Outline`, etc.).

---

## 🎨 Thème et Tokens

Toutes les couleurs, radius, espacements et typos sont définis dans :  
src/styles/tokens/

Exemple d’utilisation dans un composant :  
className="bg-[var(--button-bg-default)] text-[var(--button-text-alt)]"

---

## 🧾 Bonnes pratiques

- ✅ Typage systématique avec `React.ComponentProps`.  
- 🎨 Toujours utiliser les variables CSS (`var(--nom-variable)`) plutôt que des valeurs fixes.  
- 🧱 Centraliser les styles dans `index.css` (pas d’import CSS dans les `.tsx`).  
- 🧩 Tester chaque composant dans Storybook avant de le publier.

---

# ⚙️ Utilisation dans un autre projet (ex: Next.js)

## 📦 Installation locale

### 1️⃣ Ajouter la dépendance

```BASH
npm install @goodfoodcesi/goodfood-ui
```


---

### 2️⃣ Importer les styles globaux

Dans ton fichier global (souvent `app/globals.css` sous Next.js) :

```CSS
@import "@goodfoodcesi/goodfood-ui/index.css";
```

> Cela applique la charte graphique et les tokens (couleurs, typos, radius, etc.) à ton projet.

---

### 3️⃣ Utiliser un composant

```JSX
import { GoodFoodButton } from "@goodfoodcesi/goodfood-ui";

<GoodFoodButton label="Commander" variant="primary" />

```

---

## 🔄 Mettre à jour la librairie

Quand tu modifies la lib (`goodfood-ui`) et veux propager les changements dans ton projet Next :
---

### 2️⃣ Réinstaller la dépendance dans ton projet Next

```BASH
npm update @goodfoodcesi/goodfood-ui
```
