/* Array.prototype.filter - Exercice 2

Ecrire une fonction getMultiplesOf qui reçoit deux arguments:
1. un tableau de nombres.
2. un nombre.
En utilisant filter, elle doit renvoyer un tableau ne contenant que les
nombres du 1er argument qui sont multiples du nombre passé en 2ème.

Exemple d'entrée: 
Sortie attendue:
  [-10, 5, 15, 20]*/
  const argument1=[-12, -10, -7, -1, 5, 8, 11, 15, 20, 27]
  const argument2 =5

  function getMultiplesOf(numbers, n) {
    return numbers.filter(function(x){
      return x % n === 0
    })
}
console.log(getMultiplesOf(argument1,argument2))
// Ne pas modifier l'export
module.exports = getMultiplesOf;
