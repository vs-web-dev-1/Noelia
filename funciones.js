const PI = 3.14;

function saludar (mensaje="Hola mundo") {
//console.log("Hola mundo");
console.log(mensaje);
}
function saludarPorNombre(nombre, saludo = "Hola") {
    //console.log("Hola " + nombre) ;
    //console.log(`${saludo} ${nombre}`);
    console.log(saludo , nombre); 
   }

   
saludar();
saludar("Bienvenidos");
let da = "Dani";
saludarPorNombre(da);

saludarPorNombre("Noelia");  
saludarPorNombre("Noelia", "Hello");

 let radio = 5;
 // declaro una variable "circunferencia" para almacenar el valor devuelto por
 // la función calcularCircunferencia pasando como argumento el valor de radio
 let circunferencia = calcularCircunferencia(radio);
 //pinto el valor resultante
console.log(" EL valor de la circunferencia es " + circunferencia);

 function calcularCircunferencia (r = 1){
     /*
     declaro una función para calcular la circunferencia con un argumento
     r con valor por defecto =1.
     y devuelvo un valor 
     */
     const cir = 2 * PI * r;
     return cir;

 }

 