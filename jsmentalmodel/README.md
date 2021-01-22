Modèle mental de JS
==

Ex 0
--
Demander le résultat du console.log
```javascript
const reaction = "yikes";
reaction[0] = "l";
console.log(reaction);
```
le résultat est "yikes" car la valeur "yikes" assignée à la variable reaction est un string et est immutable.
Il y a 7 types de valeurs immutables en JS :
* Undefined (undefined), used for unintentionally missing values.
* Null (null), used for intentionally missing values.
* Booleans (true and false), used for logical operations.
* Numbers (-100, 3.14, and others), used for math calculations.
* Strings ("hello", "abracadabra", and others), used for text.
* Symbols (uncommon), used to hide implementation details.
* BigInts (uncommon and new), used for math on big numbers.

Il y a aussi 2 autres types (mutables à leur tour) : 
* Objects ({} and others), used to group related data and code.
* Functions (x => x * 2 and others), used to refer to code.

Elements de langage:
- Valeur : citée ci-dessus
- Variables : ne font que pointer vers des valeurs. Elle ne contiennent pas de valeurs.

Ex 1
--
Demander de le résultat de console.log.
```javascript
const arr = [212, 8, 506];
arr[0] = 100;
const otherArr = arr;

otherArr[0] = 9;

console.log(arr);
console.log(otherArr);
console.log(arr === otherArr);

```
Demander à expliquer les différentes options.
Le résultat est : [9, 8, 506], [9, 8, 506]
Expliquer la réponse en dessinant le modèle mental de l'opération.
Demander que faire pour éviter de muter l'array d'origine (arr) 
Exemples de réponse
```javascript
const otherArr = [...arr];
```
```javascript
const otherArr = []
otherArr[0]=arr[0]
otherArr[1]=arr[1]
otherArr[2]=arr[2]
```
Dernier exemple peut améliorer avec la boucler for

Ex 2
--
Demander de le résultat de console.log.
```javascript
const arr = [212, 8, 506];
arr[0] = 100;
const otherArr = [212, 8, 506];
otherArr[0] = 100;
console.log(arr === otherArr);
console.log(arr[0] === otherArr[0]);
```
Demander d'expliquer les réponses et dessiner le modèle mental en même temps.
En dessinant les participants peuvent se rendre compte que leur réponse est éventuellement fausse.
 
Ex 3
--
Demander le résultat des console.log
```javascript
let sherlock = {
    surname: "Holmes",
    address: {city: "London"},
};

let john = {
    surname: "Watson",
    address: sherlock.address,
};

john.surname = "Lennon";
john.address.city = "Malibu";

console.log(sherlock.surname);
console.log(sherlock.address.city);
console.log(john.surname);
console.log(john.address.city);
```
Le résultat est Holmes, Malibu, Watson, Malibu => Mince on a déménagé Holmes par erreur à Malibu.
On a muté l'objet que nous n'avions pas envie de toucher.
Cela car address de Watson pointait sur le même objet sur lequel pointe la propriété address de sherlock.
Dessiner le schéma en suivant le modèle mental pour expliquer.
Quelles options pour faire d'en sorte que Holmes reste à London.
```javascript
const john2 = {
    surname: "Watson",
    address: {...sherlock.address},
};

const john3 = {
    surname: "Watson",
    address: {city: sherlock.address.city},
};
```
Conclusion : 
Mutabilité en soi n'est pas un souci si elle est maitrisée.
En revanche si celle-ci n'est pas intentionnelle :
- Utiliser const plus que let pour éviter la réassignation des variables (mais n'evite pas la mutation).
- Utiliser assignation par copie ex {...objectDOrigine}
- Faire des fonctions pures : qui ne modifie l'argument passé en paramètre et en sort nouveau en sortie.
Par exemple reducer de redux.


