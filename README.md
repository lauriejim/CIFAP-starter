# CIFAP starter project

> Guide d'installation et d'utilisation du starter. Cela marche que ce soit un windows ou un mac. Ce starter est à utiliser au début de votre projet afin de gagner du temps de développement.

## Installation

### Node.js

Pour pouvoir utiliser ce starter vous avez besoin d'installer Node.js sur votre ordinateur. Pour cela il faut se rendre sur le site de [- Node.js -](https://nodejs.org/en/) et télécharger la version `v.4.4.7 LTS`.

Une fois téléchargé cliquer sur l'executable afin de lancer l'installation. Faite `suivant - suivant ... terminer/installer` jusque au bout du processus.

Une fois Node.js installé ouvrir le `terminal` et taper `node -v` puis appyer sur la touche `entrer`. Le numéro de version de Node.js doit apparaître. Faire de même avec `npm -v`.

### Projet

Pour télécharger le projet aller à l'adresse suivante: `https://github.com/lauriejim/CIFAP-starter` puis cliquer sur le bouton vert `Clone or download` puis sur `Download ZIP`. Cela va télecharger le projet sur votre ordinateur.

Récuperer le dossier contenant les fichiers du projet et le mettre là où vous voulez travailler sur votre ordinateur.

Retourner dans le `terminal` puis taper `cd` avec un espace à la fin. Puis faite un cliquer déposer du dossier dans le `terminal`. Puis appuyer sur `enter`.

Taper `npm install` dans le terminal puis appuyer sur `entrer`. Cela va installer tous les modules necesssaire au bon fonctionnement du projet.

Une fois terminé vous n'avez plus qu'a taper `npm start` pour lancer le projet. Une fenêtre va s'ouvrir et c'est parti il n'y a plus qu'a coder.

## Architecture du projet

### `package.json`

Dans le fichier `package.json` ce trouve les informations du projet. S'y trouve principalement le nom du projet `name` et les dépendance du projet `devDependencies`.

### `gulpfile.js`

Dans se fichier ce trouve toutes les tâches d'automatisation:
- `serve` - Lancement du serveur et des watchers
- `sass` - Transformation du `scss` en `css`
- `min-css` - Minification de fichiers `css`
- `inject` - Injection automatique des fichers `css` dans les pages `html`

Toutes les tâches sont commentées, il vous suffit de les lires pour en savoir plus sur le découpage.

### `app/pages`

Dans se dossier se trouve toute les pages de votre site. Il faut absolument garder les balises inject dans toutes les nouvelles pages
`html` que vous créerais pour bénéfichier de l'injection automatique
des fichiers `css`. Ce baser sur le fichier `index.html`.

### `app/styles`

__build__: C'est là ou se situe le fichier `main.css` et `main.min.css`. Il ne faut donc pas toucher à ce dossier car il est créé automatiquement par `gulp`.

__libs__: Dans ce dossier ce trouve tout les fichiers `css` que vous voulez charger dans vos pages. Comme `bootstrap` par exemple. Ces fichiers sont automatiquement chargé dans les pages `html`

__scss__: Dans se dossier on y trouve plusieur fichiers et dossiers. Le fichier `mains.scss` ne fait que importer les autres fichier `scss`, il ne faut rien mettre d'autre que des `import` d'autre fichier. Vous trouverez dans `globals` le fichier `initialize.scss`, il ne faut pas y toucher - le fichier `_variables.scss` qui doit comporter les variables de votre site (les couleurs par exemple) - le fichier layout qui comporte les régle css du layout de toutes vos pages. Vous metterez le reste dans des dossier que `pages` ou `components` mais vous pouvez créer les votres aussi. N'oublier pas de les importer dans `main.scss` si non il ne seront pas pris en compte. Il faut aussi que vos fichier soir préfixer d'un `_` si non l'utilisation de variable dans les fichier `scss` ne marcherons pas.

### `app/index.html`

Alors ce fichier n'a qu'un but c'est que quand on tape `npm start` une page s'ouvre automatiquement, fichier redirige vers le fichier de page d'accueil de votre choix qui se trouve dans le dossier `pages`.
