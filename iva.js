//let ivaNormal = 10;
let precio = 50;

//let importe;
//importe = precio + (precio * ivaNormal) / 100;
// console.log ("el precio del producto  es " + precio);

function calcularSinIva(){
    console.log("el precio sin iva es " + precio);
}
calcularSinIva();

function calcularConIva(precio,ivaNormal=10){
  const importe = precio + (precio * ivaNormal) / 100;
return importe;
}

let importe = calcularConIva(precio);
console.log( "el precio con iva es " + importe);
