/*
Los ciclos nos permiten repetir la ejecución de un código varias veces.
 Imagina que quisiéramos repetir la frase "Hola mundo" 5 veces. Podríamos
  hacerlo manualmente. Crea un archivo llamado ciclos.js y escribe el siguiente código:
*/ 

//esto es una mala practica
/**
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
 */

/*un ciclo en javascript tiene la siguiente sintaxis:
while (<condicion>) {
acá va el cuerpo del ciclo, el código que se va a repetir mientras la condición se cumpla
}
*/

var i = 0;
while (i < 850) {
    console.log("Hola mundo");
    i = i + 1;
}
 
/*
Primero declaramos una variable i que inicia en 0. Cada vez que ingresa en el ciclo la 
vamos a incrementar en 1 hasta que lleguemos a 850. En ese momento la condición va a
 dejar de ser verdadero y el ciclo se detendrá.

var i = 0;
while (i < 850) {
  console.log("Hola mundo");
  i++;
}

*/
