# Correction J3 – Router

![plan du site](./router.png)

## Préambule

En définissant nos besoins en terme d'écrans, il parait judicieux
de gérer les favoris dans un contexte.

Cela permettra de partager une seule source de vérité dans toute notre application.

### Contexte : Favoris

1. création : on gère nos favoris dans un tableau d'ID

2. _Provider_ :
   - je stocke mes favoris dans un état
   - je récupère mes favoris depuis le LocalStorage

3. _hook_ personnalisé pour garantir la non-nullité des favoris

4. diffusion du contexte

5. je veux pouvoir ajouter/supprimer un favori
    - je crée une fonction `toggleFavorite`
    - je la diffuse pour la rendre accessible dans l'application

6. utilisation dans `<FavoriteButton />`

## Router

J'ai 2 pages principales : Accueil et Favoris.  
Je les veux sous forme d'onglets :

1. layout principal pour prévenir que j'aurai des onglets
2. un layout `(tabs)/_layout.tsx` pour définir mes écrans
3. les fichiers pour l'affichage

### Layout principal

Je renseigne mes routes principales ;
et j'en profite pour charger mes polices de caractères et
mes contextes.

> **NOTE** je n'ai plus besoin de mon fichier `app/index.tsx`,
> tout son contenu sera dans le layout… Ne manquera que l'appel
> à `<HomeScreen />`

### Page d'accueil

Suivant la structure, doit se trouver dans `app/(tabs)/index.tsx`.

Je veux afficher ma liste, c'est à dire le contenu de `HomeScreen` ;
je déplace le fichier depuis `screen/` et je renomme…

### Page favoris

Ressemble beaucoup à l'accueil : je dois juste filtrer la liste des restaurants
en fonctions de mon tableau de favoris.
