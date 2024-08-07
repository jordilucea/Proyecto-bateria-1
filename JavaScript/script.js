"use strict";

let hora = prompt("Introduce la hora");

if ((hora >= 6) && (hora < 13)){
    console.log("buenos días");
}
else if ((hora >=13) && (hora < 20)){
    console.log("buenas tardes");
}
else if (((hora >=20) && (hora < 24)) || ((hora < 6) && (hora >= 0))){
    console.log("buenas noches");
}
else { 
    console.log("hora no valida");
};

/* let hora = prompt("Introduce la hora")
let hora = new Date().getHours(); */
// Crear un condicional que de los buenos días, buenas tardes o buenas noches según la hora


//Crear un bucle que vaya de 0 a 100 incrementando de 10 en 10
let contador = 0;
while (/* (contador < 101) */ contador <= 100) {
  console.log("Contador de 10 en 10: " + contador);
  contador += 10;
}
//Crear un bucle que vaya de 50 a 20 de uno en uno
console.log("");
contador = 50;
while (contador <= 50 && contador >= 20) {
  console.log("Contador de 1 en 1: " + contador);
  contador--;
}
// Crear un bucle que recorra todos los números de 1 a 10 y nos diga sin son pares o impares
//Un numero es par si num % 2 === 0
console.log("");
contador = 1;
while (contador <= 10) {
  if (contador % 2 === 0) {
    console.log(contador + " es par.");
  } else {
    console.log(contador + " es impar.");
  }
  contador++;
}