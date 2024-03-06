// Tipos de datos primitivos
// string
let nameUser ='Peter Pan';
console.log( nameUser );
console.log( typeof( nameUser ) );

// number
nameUser = 123;
console.log( typeof( nameUser ) );

// JavaScript infiere el tipo de datos
// undefined es una variable sin un valor o no inicializada
// En javaScript todo es de tipo objeto excepto los primitivos

let soyNull = null;
console.log( typeof soyNull );

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1 );

console.log( symbol1 === symbol2 );

