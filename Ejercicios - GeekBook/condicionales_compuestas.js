/* Imagina que queremos escribir un programa que imprima "El número está entre 10 y 20" si el valor de una variable está efectivamente entre 10 y 20. ¿Cómo te imaginas que lo podríamos solucionar?
Una opción es usar condiciones anidadas, de esta forma: */

var num = 15;

if (num >= 10) {
   if (num <= 20) {
     console.log ("El numero está entre 10 y 20");
    }
}
