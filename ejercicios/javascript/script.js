"use strict";

// Crea una función que reciba dos arrays como argumentos y devuelva true si son iguales y false si no.
//Consideramos iguales dos array que tienen los mismos valores en las mismas posiciones.

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
let arr3 = [2, 3, 1];
let arr4 = [1, 2, 3, 4];

function comparadorArrays (array1,array2) {
  if (array1 === array2) { return true } 
  else if (array1.length === array2.length) {return true}
  else return false;
  console.log (comparadorArrays (arr1,arr3));
}