const url = "https://api.frankfurter.app/latest";// la llamada que tenemos que hacer. La respuesta nos la dá el API
// creamos una constante url a la que vamos a llamar
//la llamada la hago con la función fetch, recibe entre parentesis la url a la que vamos a llamar
fetch(url)
  .then((respose) => respose.json())// cuando llega la respuesta, procesala usando sus datos json. 
  .then((data) => {
    console.log(data);
    const fechaCadena = data.date;
    console.log(fechaCadena);
    const fechaNumber = Date.parse(fechaCadena);
    console.log("Unix:" + fechaNumber);
    const fecha = new Date(fechaNumber);
    console.log("ISO:" + fecha.toISOString());
    const fechaEuropea = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
    console.log("Europa:" + fechaEuropea);
    const spanFecha = document.getElementById("fecha");
    spanFecha.innerText = fechaEuropea;
    const objetoCotizaciones = data.rates;
    const ulCotizaciones = document.getElementById("cotizaciones");
    ulCotizaciones.innerText = "";// (2)
    // ulCotizaciones.childNodes.forEach((child) => {
    //   console.log(child);
    //   ulCotizaciones.removeChild(child.textContent);// para eliminar un nodo pero haremos otra opción (2) porque asi
    // no puedo eliminarlo , asi que hago un innerText a vacío y asi lo elimina
    // });
    console.log(ulCotizaciones.childNodes);
    // ulCotizaciones.innerText = JSON.stringify(objetoCotizaciones);
    const divisas = Object.keys(objetoCotizaciones);
    divisas.forEach((divisa) => {// recorro con el forEach y creo elementos li. Estos li llevan 2 spam
      // para agregarlos clases css y darles un contenido.Cotización es más complejo porque tengo que buscar el objeto 
      // con el nombre de la clave
      const liDivisa = document.createElement("li");// crea nodos , diciendo el tipo , li, h...
      // ese nodo creado es el que puedo agregar a otro nodo con el apendchild(del nodo creado)

      const spanDivisa = document.createElement("span");// creo nodo spam que crea nodo de la divisa
      spanDivisa.classList.add("divisa");
      spanDivisa.innerText = divisa + " : "; // span divisa lleva en su innertext el texto divisa

      const spanCotizacion = document.createElement("span");// necesito crear otro nodo para la cotizacion
      spanCotizacion.classList.add("contravalor");
      const cotizacion = objetoCotizaciones[divisa];
      spanCotizacion.innerText = cotizacion;

      // liDivisa.innerText = divisa + " : " + cotizacion;
      liDivisa.appendChild(spanDivisa);// al li divisa agrego el spam divisa 
      liDivisa.appendChild(spanCotizacion);//  agrego el spam cotizacion
      ulCotizaciones.appendChild(liDivisa);// luego  agrego el li  al ul
    });
  });

// async function obtenerDatos() {
//   // esperas
//   const response = await fetch(url);
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//   } else {
//     console.log("Error: " + response.status);
//   }
// }
// obtenerDatos();