const ivaNormal = 21;
const precio = 50;
const iva = 21;

console.log("El precio sin IVA es: " + precio);

function calcularCouta(base, tipo = ivaNormal) {
  const cuota = (base * tipo) / 100;
  return cuota;
}

const cuota = calcularCouta(precio, 10);
console.log("La cuota de IVA es: " + cuota);

function calcularImporte(base, tipo = ivaNormal) {
  const cuota = calcularCouta(base, tipo);
  const importe = base + cuota;
  return importe;
}

const importe = calcularImporte(precio, 10);
console.log("El importe IVA incluido es: " + importe);

function obtenerDesglose(base, tipo = ivaNormal) {
  const desglose = {
    base: base,
    tipo: tipo,
    cuota: calcularCouta(base, tipo),
    importe: calcularImporte(base, tipo),
    formaDePago: {
      medio: "tarjeta",
      cambio: 0,
    },
  };
  return desglose;
}
console.log(obtenerDesglose(precio));

// creo un array de productos con iva y sin iva

let productos = [{nombre:"Libreta",base:2,exento:false}, {nombre:"Curso",base:300,exento:true}, {nombre:"Bolígrafo",base:1.5,exento:false}];
// recorro el array y si tienen iva lo calculo
// item = i
for (let item=0; item < productos.length; item++) {
    console.log ("Artículo: " + productos[item].nombre);
    console.log ("Base: " + productos[item].base + " €");
    if (productos[item].exento==true) {
        console.log ("Producto exento de IVA");
        console.log ("Total: " + productos[item].base + " €");
    } else {
        console.log ("Tipo de IVA: " + iva + " %");
        console.log ("Total: " + (productos[item].base * (1.00 + (iva/100))) + " €");
    }
}