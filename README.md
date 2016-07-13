# CIFAP starter project

> Guide d'installation et d'utilisation du starter. Cela marche que ce soit un windows ou un mac. Ce starter est à utiliser au début de votre projet afin de gagner du temps de développement.

## Installation

### Node.js

Pour pouvoir utiliser ce starter vous avez besoin d'installer Node.js sur votre ordinateur. Pour cela il faut se rendre sur le site de [- Node.js -](https://nodejs.org/en/) et télécharger la version `v.4.4.7 LTS`.

Une fois téléchargé cliquer sur l'exécutable afin de lancer l'installation. Faites `suivant - suivant ... terminer/installer` jusqu'au bout du processus.

Une fois Node.js installé ouvrir le `terminal` et taper `node -v` puis appuyer sur la touche `entrer`. Le numéro de version de Node.js doit apparaître. Faire de même avec `npm -v`.

### Projet

Pour télécharger le projet aller à l'adresse suivante: `https://github.com/lauriejim/CIFAP-starter` puis cliquer sur le bouton vert `Clone or download` puis sur `Download ZIP`. Cela va télécharger le projet sur votre ordinateur.

Récupérer le dossier contenant les fichiers du projet et le mettre là où vous voulez travailler sur votre ordinateur.

Retourner dans le `terminal` puis taper `cd` avec un espace à la fin. Puis faites un cliquer déposer du dossier dans le `terminal`. Puis appuyer sur `enter`.

Taper `npm install` dans le terminal puis appuyer sur `entrer`. Cela va installer tous les modules nécessaires au bon fonctionnement du projet.

Une fois terminé vous n'avez plus qu'à taper `npm start` pour lancer le projet. Une fenêtre va s'ouvrir et c'est parti il n'y a plus qu'à coder.

## Architecture du projet

### `package.json`

Dans le fichier `package.json` se trouvent les informations du projet. S'y trouve principalement le nom du projet `name` et les dépendances du projet `devDependencies`.

### `gulpfile.js`

Dans se fichier se trouve toutes les tâches d'automatisation:
- `serve` - Lancement du serveur et des watchers
- `sass` - Transformation du `scss` en `css`
- `min-css` - Minimification de fichiers `css`
- `inject` - Injection automatique des fichers `css` dans les pages `html`

Toutes les tâches sont commentées, il vous suffit de les lire pour en savoir plus sur le découpage.

### `app/pages`

Dans ce dossier se trouvent toutes les pages de votre site. Il faut absolument garder les balises `inject` dans toutes les nouvelles pages
`html` que vous créerez pour bénéfichier de l'injection automatique des fichiers `css`. Se baser sur le fichier `index.html`.

### `app/styles`

__build__: C'est là où se situe le fichier `main.css` et `main.min.css`. Il ne faut donc pas toucher à ce dossier car il est créé automatiquement par `gulp`.

__libs__: Dans ce dossier se trouvent tous les fichiers `css` que vous voulez charger dans vos pages. Comme `bootstrap` par exemple. Ces fichiers sont automatiquement chargés dans les pages `html`

__scss__: Dans ce dossier on y trouve plusieurs fichiers et dossiers. Le fichier `mains.scss` ne fait que importer les autres fichiers `scss`, il ne faut rien mettre d'autre que des `import` d'autre fichier. Vous trouverez dans `globals` le fichier `initialize.scss`, il ne faut pas y toucher - le fichier `_variables.scss` qui doit comporter les variables de votre site (les couleurs par exemple) - le fichier layout qui comporte les régles `css` du layout de toutes vos pages. Vous metterez le reste dans des dossier que `pages` ou `components` mais vous pouvez créer les votres aussi. N'oubliez pas de les importer dans `main.scss` sinon il ne seront pas pris en compte. Il faut aussi que vos fichiers soient préfixés d'un `_` si non l'utilisation de variable dans les fichiers `scss` ne marcheront pas.

### `app/index.html`

Alors ce fichier n'a qu'un but c'est que quand on tape `npm start` une page s'ouvre automatiquement et le fichier redirige vers le fichier de page d'accueil de votre choix qui se trouve dans le dossier `pages`.

## MIT License

> Copyright © 2016 Jim LAURIE.

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
