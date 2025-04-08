# O'resto – React Native

## Objectif

Créer une application mobile simple permettant d'afficher une liste
de restaurants partenaires et leurs informations.

Dans un second temps, on créera une API GraphQL pour fournir les données.

---

## Environnement de développement

- [React Native](https://reactnative.dev/docs/environment-setup)
- Framework [Expo](https://docs.expo.dev/get-started/create-a-project/)
- Affichage de l'application
  - [Expo GO](https://expo.dev/go)
  - simulateur/émulateur → <https://docs.expo.dev/get-started/set-up-your-environment/>

---

## Planning

### Jour 1 : Interface utilisateur

**Objectifs :**

- Initialiser une application **Expo**

- Créer une interface simple avec :
  - un **formulaire de recherche** (non fonctionnel)
  - une **liste de restaurants** grâce à la liste fournie dans le fichier `./data/restaurants.ts`

**À faire** :

1. Créer un projet avec Expo

    > **NOTE** Expo ne permet pas d'initialiser un projet dans un dossier
    > qui contient des fichiers…  
    > Crée un projet puis déplace les dossiers/fichiers à la racine

    - créer un projet → `pnpx create-expo-app@latest my-app`
    - mettre le tout à la racine → déplacer le contenu de `./my-app/` à la racine
    - démarrer de zéro → `pnpm reset-project` (+ `Enter`)
    - mettre en place le linter :
      - choix 1 : **ESLint** → `pnpm lint` (Expo s'occupe de tout…)
      - choix 2 : **Biome** → `pnpm add --save-dev --save-exact @biomejs/biome` (la config est fournie)

2. Créer une page d'accueil avec :
   - Un **header** contenant le nom de l'application
   - Un **TextInput** pour rechercher une ville et un **Pressable** (ne pas écouter d'évènement à cette étape)
   - Une [**FlatList**](https://reactnative.dev/docs/flatlist) affichant une liste de restaurants statiques

   > **NOTE** des [maquettes](./__docs/screenshots/) sont proposées à titre indicatif, sens-toi libre de les utiliser ou non
   >
   > Polices utilisées :
   > [Brutal Solid](https://freedafonts.com/brutal-solid-font/) et
   > [Chivo](https://gwfh.mranftl.com/fonts/chivo?subsets=latin) (en 100, regular et 900)
   >
   > **ATTENTION** les fonts doivent être en `.otf` ou `.ttf`
   > ([doc](https://docs.expo.dev/develop/user-interface/fonts/#supported-font-formats)).
   > Pour google-webfonts-helper, clique sur « Legacy Support » à l'étape 3.

3. Styliser l'application pour un affichage propre
   - [**StyleSheet**](https://reactnative.dev/docs/stylesheet)
   - [React Native Paper](https://callstack.github.io/react-native-paper/)
   - [CSS in JS](https://www.4waytechnologies.com/blog/styling-in-react-native-a-guide-to-css-in-js-and-design-principles)

---

### Jour 2 : Gestion d'état et mise en place des favoris

**Objectifs :**  

- Gérer l'état avec **useState** et **useContext**
- Utiliser le _LocalStorage_ avec **AsyncStorage**
- Mettre en place un formulaire fonctionnel

**À faire** :  

1. Gérer les restaurants dans un Context en suivant les bonnes pratiques
2. Ajouter un bouton de **favoris (like/unlike)** sur chaque restaurant
3. Sauvegarder les favoris dans **AsyncStorage**
4. Implémenter la **recherche par ville**

---

### Jour 3 : Navigation avec Expo Router

**Objectifs :**  

- Mettre en place la navigation avec **Expo Router**
- Ajouter un **onglet Favoris** (_tabs_)
- Créer une **page de détails** pour chaque restaurant (_stack_)

**À faire** :

1. Configurer **Expo Router** avec une structure en **tabs** :
   - **Accueil (`/`)** → Liste des restaurants
   - **Favoris (`/favorites`)** → Liste des restaurants favoris
2. Ajouter une navigation **stack** pour les **détails d'un restaurant**
3. Permettre d'accéder aux détails en cliquant sur une **RestaurantCard**
