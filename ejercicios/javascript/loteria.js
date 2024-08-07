"use strict";

/**
 * Crea una función que devuelva un array de números aleatorios para jugar a la Primitiva y muestra el resultado por la consola.
 * A tener en cuenta:
 * - Los números admitidos en la lotería Primitiva son del 1 al 49
 * - El array de los `números de la suerte` debe contener 6 elementos y no pueden repetirse.
 * - Cada vez que se refresque la página, los números de la consola deben cambiar.
 *
 * Consejos:
 * - Puedes crear una función para que devuelva un único número permitido,
 * y comprobar si dicho número existe en el array de los `números de la suerte`
 * y, si no existe, añadirlo.
 *
 *
 * Bonus: Ordena numéricamente el array antes de devolverlo.
 *
 */

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 49) + 1;
  }

  function generarNumerosDeLaSuerte() {
    let numerosDeLaSuerte = [];
  
    while (numerosDeLaSuerte.length < 6) {
      let numero = generarNumeroAleatorio();
  
      if (!numerosDeLaSuerte.includes(numero)) {
        numerosDeLaSuerte.push(numero);
      }
    }
  
    // Ordenar el array numéricamente
    numerosDeLaSuerte.sort((a, b) => a - b);
  
    return numerosDeLaSuerte;
  }
  
  // Mostrar los números de la suerte por la consola
  let numerosDeLaSuerte = generarNumerosDeLaSuerte();
  console.log(numerosDeLaSuerte);
  

/**
 * // Función para generar un único número aleatorio entre 1 y 49
        
function generarNumeroAleatorio() {
            return Math.floor(Math.random() * 49) + 1;
        }
        // Función para generar un array de 6 números aleatorios únicos y ordenarlos
        function generarNumerosPrimitiva() {
            let numerosSuerte = [];
            while (numerosSuerte.length < 6) {
                let numeroAleatorio = generarNumeroAleatorio();
                // Verifica que el número no esté ya en el array
                if (!numerosSuerte.includes(numeroAleatorio)) {
                    numerosSuerte.push(numeroAleatorio);
                }
            }
            // Ordena los números en orden ascendente
            numerosSuerte.sort((a, b) => a - b);
            return numerosSuerte;
        }
        // Evento que se ejecuta cuando el documento HTML ha sido completamente cargado y analizado
        document.addEventListener('DOMContentLoaded', (event) => {
            // Genera los números de la Primitiva
            let numerosPrimitiva = generarNumerosPrimitiva();
            // Muestra los números generados en la consola
            console.log("Números de la Primitiva:", numerosPrimitiva);
        });
 */