const frase = "en un lugar de la mancha";
let inicio;
let haTerminado = false;
// accedo al documento y a través de sus propiedades al texto , botón o lo que necesitemos a través del id que le pusimos en el html

const nodoMensaje = document.getElementById("mensaje"); // accedo al texto felicidades
const nodoFrase = document.getElementById("frase"); // accedo al elemento con id frase
// para llegar al botón y que lo encuentre
const botonEmpezar = document.getElementById("empezar");
// para acceder al input
const inputLoTecleado = document.getElementById("lo-tecleado");

//creamos uno vacío para comprobar si lo tecleado coincide con el control y cuando esté completo mostramos el tiempo 

nodoMensaje.innerText = "";
// para que aparezca en la pantalla es  lo mismo que un console.log
nodoFrase.innerText = frase; // para que pinte en un lugar de la mancha

// cuando se ha encontrado el botón se añade un escuchador de eventos que lleva unos argumentos
// uno es el click y el otro es una función que dirá lo que ocurre cuando se hace click
//primero creamos una variable inicio para que nos cuente el tiempo . Es un número
// con date.now() nos da la fecha de ahora 
botonEmpezar.addEventListener("click", () => {
    // cuando dé en el botón  empieza a contar y se guarda el valor en la variable inicio
  inicio = Date.now();
  
  haTerminado = false; // cada vez que le dé a iniciar y cuando ha terminado nos salimos
}); 

// pongo un escuchador en el input 
inputLoTecleado.addEventListener("input", () => {
  if (haTerminado) return;  // para que se deje de ejecutar la función porngo un return
  const ahora = Date.now(); // obtiene el tiempo inicial 
  const tiempo = (ahora - inicio) / 1000; // obtiene el tiempo que has tardado en miliseg , lo dicido entre 1000 para que sean seg
  const loTecleado = inputLoTecleado.value; // E botón empezar vacía lo que introduce el usuario asi que pongo que el value sea vacío
  // veo si lo tecleado coincide y saco mensaje felicidades. Luego de terminar hay que volver a iniciar inicio
  if (loTecleado === frase) {
    nodoMensaje.innerText = "Felicidades ✨🎉🎈🌈 has tardado " + tiempo;
    haTerminado = true;
  } else {
    nodoMensaje.innerText = "aún no va bien ❌👀🐱‍🐉 llevas " + tiempo;
  }
});