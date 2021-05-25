const PI = 3.14;

function saludar () {
console.log("Hola mundo");
}
function saludarPorNombre(nombre, saludo = "Hola") {
    console.log("Hola " + nombre) ;
   }
saludar();


 saludarPorNombre("Noelia");  

 let radio = 5;
 let circunferencia = calcularCircunferencia(radio);
console.log(circunferencia);

 function calcularCircunferencia (r = 1){
     const cir = 2 * PI * r;
     return cir;

 }


