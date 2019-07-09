/* Sin embargo, cómo decíamos antes, leer condiciones anidadas es difícil y, en lo posible, es mejor evitarlas. En cambio, podemos utilizar los operadores lógicos y (&&) y ó (||) para crear condiciones compuestas. El ejemplo anterior lo podemos mejorar con y:
*/

var num = 15;

if (num >= 10 && num <= 20) {
   console.log("El numero esta entre 10 y 20");
}

