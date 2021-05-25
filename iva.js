//let ivaNormal = 10;
let precio = 50;

//let importe;
//importe = precio + (precio * ivaNormal) / 100;
// console.log ("el precio del producto  es " + precio);

//declaro una función para calcular el precio sin iva

function calcularSinIva(){
    console.log("el precio sin iva es " + precio);
}
calcularSinIva();

//declaro una función para calcular el precio con iva

function calcularConIva(precio,ivaNormal=10){
  const importe = precio + (precio * ivaNormal) / 100;
  console.log( "el precio con iva del " + ivaNormal + "% es " + importe);
return importe;
}
// declaro una variable  para calcular el precio con iva reducido
let ivaReducido = 5;
// recupero el valor  de la función y lo guardo en la variable importe , me recupera el valor ivaNormal 10
let importe = calcularConIva(precio);
//console.log( "el precio con iva del 10% es " + importe);
// en importe guardo el valor de la función calcularConIva cambiando el iva por iva reducido
 importe = calcularConIva(precio,ivaReducido);
//console.log( "el precio con iva del " + ivaReducido + " es " + importe);
// en importe guardo el valor de la función con iva supereducido. También podría haber declarado una variable 
//let ivaSuperReducido = 3.5;
importe = calcularConIva(precio,3.5);
//console.log( "el precio con iva del 3.5% es " + importe);





