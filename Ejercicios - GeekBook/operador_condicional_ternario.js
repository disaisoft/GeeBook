/* Los operadores ternarios se utilizan con frecuencia como atajos para los condicionales if. Este está compuesto de la siguiente forma <condición> ? <expr1> : <expr2>. Ahora vamos a separar paso a paso para entender un poco mejor como funciona.
Lo primero que se está haciendo y lo que esta antes de ? es la condición que queremos validar; si esto es verdadero se ejecutara la expr1 de lo contrario se ejecutara la expr2.
*/

var num = 10;

num >= 15 ?  console.log('Es mayor o igual de 15') : console.log('Es menor que 15');
