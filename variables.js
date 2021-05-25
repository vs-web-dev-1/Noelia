let radio = 40;

const PI = 3.14;

let rueda = 2 * PI * radio;

console.log( "La rueda mide : " + rueda );


const bici = {
    marca: "BH",
    precio: 89,
    radio: radio,
    rueda: 2 * PI * radio,
};

console.log("Mi bici " + bici.marca + " tiene una rueda de " + bici.rueda + "cm.");
 
bici.marca = "Orbea"; 
console.log( " He comprado una bici nueva " + bici.marca + " porque la anterior estaba vieja"); 
