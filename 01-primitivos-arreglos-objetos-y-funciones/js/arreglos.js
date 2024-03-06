// formas de declarar arreglos

const arr = new Array(10);
console.log(arr);

const miArray = []; // creo un arreglo vacio
console.log(miArray);

const videoJuegos = ['Mario 3', 'Megaman', 'Pacman'];
console.log({ videoJuegos });
console.log( videoJuegos[0] );

let arregloCosas = [
    true, 123, 'Hola Mundo', 'Willian', 1+2,
    ['x', 'Pokemon', 'Xero', 'DR. Maqui'],
];

console.log(arregloCosas);
// en los arreglos podemos almacenar funciones, operaciones y un objeto literal

console.log( arregloCosas[5][3] );