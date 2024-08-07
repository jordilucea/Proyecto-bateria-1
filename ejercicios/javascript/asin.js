"use strict";

// Crea un programa que incremente cada segundo un contador (incremento de 1) y que imprima en la consola cada 5 segundos el valor del contador.

// Ejemplo de lo que debería imprimir en la consola:

// Valor del contador: 5
// Valor del contador: 10
// ...

// Cuando tengas eso hecho, crea una función que se encargue de parar el temporizador anterior después de un tiempo arbitrario. Esta función recibirá dos parámetros: un número y una letra, que corresponderán al tiempo y la unidad de tiempo (S/M/H) (ej: 2, "S" === 2 segundos). Cuando pare el temporizador, debe mostrar un mensaje en la consola indicando que se paró.

let contador = 0;
let interval;
let printInterval;

function iniciarContador() {
  // Incrementar el contador cada segundo
  interval = setInterval(() => {
    contador+=2;
  }, 1000);

  // Imprimir el valor del contador cada 5 segundos
  printInterval = setInterval(() => {
    console.log(`Valor del contador: ${contador}`);
  }, 2000);
}

function detenerContador(tiempo, unidad) {
  let tiempoMs;

  // Convertir el tiempo a milisegundos según la unidad
  switch (unidad) {
    case 'S': // Segundos
      tiempoMs = tiempo * 1000;
      break;
    case 'M': // Minutos
      tiempoMs = tiempo * 60 * 1000;
      break;
    case 'H': // Horas
      tiempoMs = tiempo * 60 * 60 * 1000;
      break;
    default:
      console.error('Unidad de tiempo no válida. Usa "S" para segundos, "M" para minutos o "H" para horas.');
      return;
  }

  // Detener el contador después del tiempo especificado
  setTimeout(() => {
    clearInterval(interval);
    clearInterval(printInterval);
    console.log('El contador se ha detenido.');
  }, tiempoMs);
}

// Iniciar el contador
iniciarContador();

// Ejemplo de uso: detener el contador después de 10 segundos
detenerContador(10, 'S');
