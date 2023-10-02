<a name="br1"></a> 

*Josh KHEZZANE*

*L3MIAI*

Devoir Maison : CJS / ESM

**1) Que fait le code ?**

Le code permet de calculer la somme totale des ventes faite en provenance de

plusieurs magasins.

Détaillons cela :

On peut observer deux fonctions majeurs :

●

findSalesFiles(folderName) :

Cette première fonction permet de trouver, dans un répertoire “stores”, tous les

fichiers de recette de chaque magasin. Elle scanne le répertoire “Stores” et retourne une

liste de fichier au format .JSON. Lors du scanne, si le fichier n’est pas au format .JSON il est

ignoré et on passe au suivant. Les fichiers de recettes sont simplement des fichier avec la

structure suivante : **{"total": n }** (“total” correspond au choix de nom d’attribut et int

correspond à une valeur de n tel que n ∈ ℝ ).

●

calculateSaleTotale(salesFiles) :

Cette seconde fonction permet de lire un par un tous les fichiers de vente trouvés

dans le répertoire “stores” via la fonction finSalesFiles et fait la somme de toutes les ventes

inscrite dans chaque fichier (représentant les recettes de chaque magasin). C’est ce que l’on

appelle les ventes totales. Enfin la fonction inscrit cette somme (ainsi que la date

d'exécution) dans un fichier au format .txt situé dans un répertoire “salesTotales” créé lors de

l'exécution du main().

L’utilisation de fonction asynchrone dans ces fonctions (avec async et await) est un

choix intelligent du au fait qu’un répertoire contenant énormément de fichier peut-être d’une

part long à être scanné et d’une seconde part tous les fichiers peuvent être très long à être

lu ligne par ligne. Ainsi on laisse la longue exécution avoir lieu sans pour autant que la suite

du code soit bloquée (code non bloquant).

1



<a name="br2"></a> 

*Josh KHEZZANE*

*L3MIAI*

Devoir Maison : CJS / ESM

**2) Monter une structure de fichiers expliquant son fonctionnement.**

Une structure de fichiers permettant de montrer son fonctionnement serait la suivante :

Les fichiers “recette1.json” et “recette2.json” sont deux fichiers représentant les

ventes de deux magasins différents.

Voici le contenue du premier fichier :

Et le contenue du second :

Nous nous attendons donc à avoir dans le fichier totals.txt la somme des ventes de tous les

magasins soit 10 + 20.3 donc 30.3.

Après exécution nous retrouvons dans le fichier totals.txt la ligne suivante :

Ce qui est bien le résultat attendu.

*Remarque : Si on exécute plusieurs fois le scripte, on remarque qu’un historique est créé,*

*c’est-à-dire que les lignes témoins de l'exécution se succèdent : le fichier totals.txt n’est pas*

*remplacé par un nouveau à chaque itération du main().*

2

