//let ivaNormal = 21;
let precio = 50;

//let importe;
//importe = precio + (precio * ivaNormal) / 100;
// console.log ("el precio del producto  es " + precio);

console.log(
  "************Cálculo del precio de un producto cualquiera con los distintos tipos de iva"
);

//declaro una función para calcular el precio sin iva

function calcularSinIva() {
  console.log("el precio sin iva es " + precio);
}
calcularSinIva();

//declaro una función para calcular el precio con iva

function calcularConIva(precio, ivaNormal = 21) {
  const importe = precio + (precio * ivaNormal) / 100;
  console.log("el precio con iva del " + ivaNormal + "% es " + importe);
  return importe;
}
// declaro una variable  para calcular el precio con iva reducido
let ivaReducido = 10;
// recupero el valor  de la función y lo guardo en la variable importe , me recupera el valor ivaNormal 21
let importe = calcularConIva(precio);
//console.log( "el precio con iva del 21 % es " + importe);
// en importe guardo el valor de la función calcularConIva cambiando el iva por iva reducido
importe = calcularConIva(precio, ivaReducido);
//console.log( "el precio con iva del " + ivaReducido + " es " + importe);
// en importe guardo el valor de la función con iva supereducido. También podría haber declarado una variable
//let ivaSuperReducido = 3.5;
importe = calcularConIva(precio, 3.5);
//console.log( "el precio con iva del 3.5% es " + importe);

// declaro un array de productos con distintos tipos de iva
let productos = [
  { nombre: "Libreta", iva: 21, tieneIva: true, precio: 5 },
  { nombre: "pan", iva: 3.5, tieneIva: true, precio: 0.8 },
  { nombre: "curso", iva: 0, tieneIva: false, precio: 200 },
];

console.log(
  "******************En mi cesta de la compra he añadido los siguientes productos :"
);
// recorro el array y si el producto lleva iva lo calculo

for (let i = 0; i < productos.length; i++) {
  console.log("Artículo: " + productos[i].nombre);
  console.log("Precio: " + productos[i].precio + " €");
  if (productos[i].tieneIva == false) {
    console.log("Producto exento de IVA");
    console.log(" El importe Total es : " + productos[i].precio + " €");
  } else {
    console.log("Tipo de IVA: " + productos[i].iva + " %");
    console.log(
      "El importe Total ( precio más el iva que corresponda al producto) es : " +
        (productos[i].precio + (productos[i].precio * productos[i].iva) / 100) +
        " €"
    );
  }
}
