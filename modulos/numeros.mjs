const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// función que devuelve los num pares , le paso numeros que es un array y hago un for para recorrerlo
export function obtenerPares(numeros) {
  const pares = [];
  for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    // si un num es par lo mete en un array nuevo llamado pares
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  }
  return pares;
}
// una manera más funcional de programar hace lo mismo que la otra
// numeros es un array . Tiene funciones de primer orden que puede tener en su argumento otras funcionaes .
export function obtenerParesFuncional(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}
// otra manera de escribirlo 
export function obtenerParesFuncionalGrande(numeros) {
  return numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
}

export function obtenerCuadrados(numeros) {
  // map opera con el array pero ahora no devuelve un booleano , si no lo que quiero , en este caso los cuadrados
  return numeros.map((numero) => numero * numero);
}

const pares = obtenerPares(numeros);

// console.log(pares); //esto ejecuta la funcion 
//console.log(obtenerCuadrados(numeros));
// lo comento para que al ejecutar el main no me lo pinte 