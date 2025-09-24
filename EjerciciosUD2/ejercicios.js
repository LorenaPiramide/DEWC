
// Mayus + ctrl + a -> Comentario

//EJERCICIO 1: Declara 6 variables a las que asignaremos los siguientes valores. 1357, 135.7, 135e7, 0b1010, 0o1357 y 0x1A57.
//Una vez creadas muestra por consola los valores almacenados y el tipo de dato que nos indica el operador typeof.

//Todos son números porque e significa elevado, b es binario, etc, no son números y letras random

//number
/* let valor1 = 1357;
alert(typeof valor1); */

//number
/* let valor2 = 135.7;
console.log(typeof valor2); */

//number
/* let valor3 = 135e7;
console.log(typeof valor3); */

//number
/* let valor4 = 0b1010;
console.log(typeof valor4); */

//number
/* let valor5 = 0o1357;
console.log(typeof valor5); */

//number
/* let valor6 = 0x1A57;
console.log(typeof valor6); */

// Prueba para saber el valor real, salen todos números.
/* let valor =  0x1A57;
console.log(valor); */

// EJERCICIO 2: Pide al usuario un  número utilizando el método prompt(), guarda ese dato en una variable. OJO guardarlo de manera que sea un tipo Number no un String.
// Compruébalo mostrando por consola el tipo de dato guardado  con el operador typeof.

// Si no pones el parseInt, siempre lo guardará como un string
/* let numero = parseInt(prompt("Dime un número."));
console.log(numero);
console.log(typeof numero); */

// EJERCICIO 3: Pide al usuario que te indique su nombre, apellidos, edad y un número del 1 al 10. Almacena cada dato en una variable diferente. 
// A continuación muestra la siguiente información:
//      A) Por consola una frase que incluya su nombre , apellidos y la edad.
//      B) En el documento html incluye con formato h3 la misma información.
//      C) En un alert muestra la siguiente información “Dentro de número años tendras x años”. 
// Ayuda: usa los backticks para crear un template literal que te permita hacer este ejercicio

/* let nombre = prompt(`Dime tu nombre.`);
let apellidos = prompt(`Dime tus apellidos.`);
let edad = parseInt(prompt(`Dime tu edad.`)); */

/* let frase = `Nombre y apellidos: ${nombre} ${apellidos}. Edad: ${edad}`;
console.log(frase); */

// Para que esto funcione el script en el html tiene que estar en el body, pero si no, el script se puede poner en el head, todo depende de lo que necesites.
/* document.body.innerHTML = "<h3>Nombre y apellidos: " + nombre + " " + apellidos + ". Edad: " + edad + "</h3>";

let numeroYears = 10;
alert(`Dentro de ${numeroYears} años tendrás ${edad + numeroYears} años.`); */

// EJERCICIO 4: Pide al usuario un string, Muestra en el documento la posición que ocupa la primera “a”

/* let texto = prompt("Dime una palabra o frase.");
console.log(texto.indexOf('a')); recordamos que la primera posición es 0 */

// EJERCICIO 5: Pide al usuario tres strings, debes sustituir en el primer string la primera ocurrencia del segundo string por el contenido del tercer string. ejemplo
// string 1 “Hola caracola”
// string 2 “cara”
// string 3 “era”
// resultado a mostrar con un alert “Hola eracola”.
