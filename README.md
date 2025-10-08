# 🍽️ GoodFood UI

**GoodFood UI** est une bibliothèque de composants React réutilisables construite avec **TypeScript**, **Tailwind CSS v4** et **Storybook**.  
Elle sert de base commune pour les projets GoodFood (Next.js, applications internes, etc.), afin de garantir une cohérence visuelle et une maintenance simplifiée.

---

## 🚀 Caractéristiques principales

- ⚛️ **React + TypeScript** : composants typés et réutilisables.  
- 🎨 **TailwindCSS v4** : styles modulaires basés sur des *tokens CSS* (couleurs, radius, spacing, etc.).  
- 🧩 **Storybook** : documentation et test visuel de chaque composant.  
- 🪄 **Compatible ShadCN UI** : possibilité d’importer des composants ShadCN et de les personnaliser selon la charte GoodFood.

---

## 📦 Installation

**Commande :**  
npm install  
ou  
yarn install

---

## 🧰 Structure du projet

src/  
├─ components/              → Tous les composants React  
│  ├─ button/  
│  │  ├─ GoodFoodButton.tsx       → Composant principal  
│  │  └─ GoodFoodButton.stories.tsx → Storybook associé  
│  ├─ input/  
│  │  ├─ GoodFoodInput.tsx  
│  │  └─ GoodFoodInput.stories.tsx  
│  └─ ...  
│  
├─ styles/  
│  ├─ tailwind.css          → Point d’entrée unique des styles  
│  ├─ tokens/               → Variables globales (couleurs, radius, spacing...)  
│  │  ├─ colors.css  
│  │  ├─ radius.css  
│  │  ├─ spacing.css  
│  │  └─ typography.css  
│  ├─ utilities.css         → Classes utilitaires custom  
│  └─ components/           → Styles spécifiques à un composant  
│     └─ button.css  
│  
└─ lib/  
   └─ utils.ts              → Fonctions utilitaires partagées

---

## 🧱 Nomenclature des composants

Chaque composant doit suivre cette structure :

src/components/nom/  
├── GoodFoodNom.tsx  
└── GoodFoodNom.stories.tsx

✅ Exemple :  
src/components/button/  
├── GoodFoodButton.tsx  
└── GoodFoodButton.stories.tsx

**Convention :**
- Les composants commencent toujours par `GoodFood` (ex: `GoodFoodButton`, `GoodFoodInput`).
- Les stories portent le même nom et définissent les variantes (`Solid`, `Outline`, etc.).

---

## 🎨 Thème et Tokens

Toutes les couleurs, radius, espacements et typos sont définis dans :
src/styles/tokens/

Utilisation des variables dans un composant :
className="bg-[var(--button-bg-default)] text-[var(--button-text-alt)]"

---

## 🧪 Lancer Storybook

Storybook permet de visualiser et tester chaque composant individuellement dans un environnement isolé.

**Commande :**  
```bash
npm run storybook
```

Ensuite ouvre l’URL :  
http://localhost:6006

---

## 🧱 Ajouter un nouveau composant

1. Créer un dossier dans `src/components/` (ex: `card/`)  
2. Ajouter :  
   - GoodFoodCard.tsx  
   - GoodFoodCard.stories.tsx  
3. Ajouter les styles ou tokens nécessaires dans `src/styles/tokens/`  
4. Ajouter les styles spécifiques dans `src/styles/components/`

---

## 🧾 Bonnes pratiques

- ✅ Typage systématique avec `React.ComponentProps`.  
- 🎨 Toujours utiliser les variables CSS (`var(--nom-variable)`) plutôt que des couleurs fixes.  
- 🧱 Aucun import CSS dans les fichiers `.tsx` (centralisation via `tailwind.css`).  
- 🧩 Tester chaque composant dans Storybook avant publication.

---

## 🏁 Commandes utiles

**Ouvrir Storybook**  
```bash
npm run storybook
```

**Build de la librairie pour publication**  
```bash
npm run build
```

**Lint du code**  
```bash
npm run lint
```

---

## 🧠 À venir

- Déploiement Storybook via CI/CD GitHub Actions.
- Dockerfile
- compose.yml
- Publication npm sous `@goodfood/ui`.
- Tuto sur comment utiliser la lib
