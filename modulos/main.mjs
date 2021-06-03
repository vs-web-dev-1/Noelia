import { obtenerCuadrados, obtenerPares } from "./numeros.mjs";

const numeros = [11, 12, 13, 14];
// invoco a obtener pares y lo pinto
const pares = obtenerPares(numeros);
console.log(pares);
// invoco a obtener cuadrados y lo pinto
const cuadrados = obtenerCuadrados(pares);
console.log(cuadrados);
// funcion que recorra los pares y calcule los cuadrados
// en el forEach llama a la función que lleva dentro , la que yo quiera, y puedo pasarle hasta 3 argumentos , tb los 
// que yo quiera por eso no hace falta declararlos
// otra forma de escribirlo
// pares.forEach(par,index) => console.log("El cuadrado de " + par + "es" + cuadrados[index]))
pares.forEach((par, index) =>
  console.log(
    `El cuadrado
    de ${par}
    es ${cuadrados[index]}`
  )
);