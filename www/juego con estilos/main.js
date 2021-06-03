const frase = "en un lugar de la mancha";
let inicio = Date.now();
let haTerminado = false;
//buscamos elemento por su id
const nodoMensaje = document.getElementById("mensaje");
const nodoFrase = document.getElementById("frase");
const botonEmpezar = document.getElementById("empezar");
const inputLoTecleado = document.getElementById("lo-tecleado");
// cuando se encuentra el id se devuelve un nodo, podemos ver que contiene, modificarlo , escuchar los eventos q tiene
//
nodoMensaje.innerText = "";
nodoFrase.innerText = frase;
// click es el nombre del evento, se pasa una funcion anonima llamada arrow
// no necesitamos pasarle argumentos en este caso
// 
botonEmpezar.addEventListener("click", () => {
  inputLoTecleado.classList.remove("mal");
  inputLoTecleado.value = "";
  inicio = Date.now();
  haTerminado = false;
});
// informamos al usuario  lo que pasa a través de los nodos innerText y cambiamos las frases según lo que pase
//el header no tiene innerText , tiene innerHtml , text es un string
// 
inputLoTecleado.addEventListener("input", () => {
  if (haTerminado) return;
  const ahora = Date.now();
  let tiempo = (ahora - inicio) / 1000;
  const loTecleado = inputLoTecleado.value;
  if (loTecleado === frase) {
    nodoMensaje.innerText = "Felicidades ✨🎉🎈🌈 has tardado " + tiempo;
    haTerminado = true;
  } else {
    if (frase.startsWith(loTecleado)) {
      inputLoTecleado.classList.remove("mal");
      nodoMensaje.innerText = "aún no está completa ❌👀🐱‍🐉 llevas " + tiempo;
    } else {
      inputLoTecleado.classList.add("mal");// agregamos la clase dinamicamente porque no está presente inicialmente 
      // tambien la puedo quitar con el remove
      nodoMensaje.innerText = "vas mal ❌🐱‍🐉💣🔥 llevas " + tiempo;
    }
  }
});