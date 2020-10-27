/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------ 
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin

var neighbourAge = 30;

// 2. Créer une variable myAge qui contient votre âge

var myAge = 32;


// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".

console.log("Comparateurs - Exercice 1")
console.log(neighbourAge < myAge);
console.log(neighbourAge > myAge);
console.log(neighbourAge <= myAge);
console.log(neighbourAge >= myAge);
console.log(neighbourAge === myAge);
console.log(neighbourAge == myAge);
console.log(neighbourAge !== myAge);

// ------ TODO 2 ------ 
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

console.log("Comparateurs - Exercice 2")

// Solution 1

function showGreaterNumber(number1, number2) {
    console.log(Math.max(number1, number2));
}

// Solution 2

function showGreaterNumberBis(number1, number2) {
    if (number1 > number2) {
        console.log(number1)
    }
    else if (number1 < number2) {
        console.log(number2)
    } else {
        console.log("Les deux nombres sont égaux")
    }
}

// 2. L'exécuter avec les paramètres de votre choix.

console.log("Comparateurs - Exercice 2 - Solution 1")
showGreaterNumber(1000, 3000);
showGreaterNumber(1000, 3);
showGreaterNumber(500, 500);

console.log("Comparateurs - Exercice 2 - Solution 2")
showGreaterNumberBis(1000, 3000);
showGreaterNumberBis(1000, 3);
showGreaterNumberBis(1000, 1000);


// ------ TODO 3 ------ 
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.

function isBetween1000And3000(number) {
    return number >= 1000 && number <= 3000;
}

// 2. L'exécuter avec le paramètre de votre choix.

console.log("Comparateurs - Exercice 3")

isBetween1000And3000(10);
isBetween1000And3000(1500);
isBetween1000And3000(3000);
isBetween1000And3000(10000)