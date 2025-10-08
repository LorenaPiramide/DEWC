
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
// Si lo pones solo con el = , sustituye el contenido, le puedes poner += para ponerlo al final y no sustituir el otro contenido

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


// EJERCICIO 13: Crea un programa  utilizando la sentencia if else  que pida al usuario que introduzca una edad y muestre el siguiente mensaje en función del número introducido:
//0-12: Niño
//13-26: Joven
//27-65: Adulto
//>65: Jubilado

/* let edad = prompt('Dime tu edad');

if (edad <= 12) {
    console.log('0-12: Niño')
} else if (edad > 12 && edad < 27) {
    console.log('13-26: Joven');
} else if (edad > 26 && edad < 66) {
    console.log('27-65: Adulto');
} else {
    console.log('+65: Jubilado');
} */

// EJERCICIO 14: Mejora el ejercicio anterior de manera que le pregunte al usuario si quiere introducir otra edad. 
// También debe comprobar si es un número mayor que cero y en caso contrario pedir al usuario que lo intente otra vez hasta que sea correcto.

/* function decirEdad() {
    return Number(prompt('Dime tu edad:'));
}

function comprobarEdad(edad) {
    while (edad < 0) {
        edad = Number(prompt('La edad no es válida. Dime de nuevo tu edad.'));
    }

    if (edad <= 12) {
        console.log('0-12: Niño')
    } else if (edad > 12 && edad < 27) {
        console.log('13-26: Joven');
    } else if (edad > 26 && edad < 66) {
        console.log('27-65: Adulto');
    } else {
        console.log('+65: Jubilado');
    }
}

// Se repite 1 vez al menos
let repetir = 's';

while (repetir === 's') {
    let edad = decirEdad();
    comprobarEdad(edad);
    repetir = prompt('Quieres decir tu edad de nuevo? s/n')
} */

// EJERCICIO 15: Construye un programa que pida un número del 1 al 10 al usuario, luego muestra por pantalla la tabla de multiplicar de ese número hasta 10.
// Para ello muestra en líneas diferentes el siguiente mensaje: “8 por 1 = 8” y así sucesivamente. Suponiendo que el usuario hubiera introducido un 8.

/* function decirNumero() {
    return Number(prompt('Dime un número del 1 al 10.'));
}

function mostrarTablaMultiplicar() {
    let numero = decirNumero();

    for (let i = 0; i <= 10; i++) {
        console.log(numero + " * " + i + " = " + (numero * i));
    }
}

mostrarTablaMultiplicar(); */

// EJERCICIO 16: Crea un programa que sea un “pequeño traductor” de nombres de frutas. 
// A partir de una lista de 5 Frutas en español (“Pera”, “Manzana”,”Piña”,”Fresa”,”Naranja”) el programa pedirá al usuario el nombre de una fruta, 
// en el caso de que corresponda al listado le mostrará en un cuadro de diálogo la traducción al Inglés. En el caso de otro texto mostrará “Fruta desconocida”. 
// Para este ejercicio debes usar una estructura switch. 

/* let frutasEs = ["Pera", "Manzana", "Piña", "Fresa", "Naranja"];
let frutasIngles = ["Pear", "Apple", "Pineaple", "Strawberry", "Orange"];

let frutaUsuario = prompt('Dime una fruta.');

let index = frutasEs.indexOf(frutaUsuario);

if (index !== -1) {
    console.log(frutasIngles[index]);
} else {
    console.log('No hay una fruta con ese nombre.');
} */

// EJERCICIO 17: Mejora el anterior ejercicio de manera que el programa traduzca correctamente a pesar de que la primera letra esté indistintamente 
// en mayúscula o en minúscula. ¿Y si cualquier letra está en mayúscula o minúscula indistintamente?

/* let frutasEs = ["Pera", "Manzana", "Piña", "Fresa", "Naranja"];
let frutasIngles = ["Pear", "Apple", "Pineaple", "Strawberry", "Orange"];

let frutaUsuario = prompt('Dime una fruta.');

let frutasMinus = frutasEs.map(frutasEs => frutasEs.toLocaleLowerCase())

let index = frutasMinus.indexOf(frutaUsuario);

if (index !== -1) {
    console.log(frutasIngles[index]);
} else {
    console.log('No hay una fruta con ese nombre.');
} */

// EJERCICIO 20: Escribe tres funciones suma que acepte un número indeterminado de argumentos y devuelva la suma de todos ellos.
// Debes evitar que la función devuelva “undefined” si no se le pasa ningún argumento, en cuyo caso el valor que devuelva tiene que ser 0.
// Debes escribir cada versión de la función  de las tres formas que hemos visto.
// suma1 , declaración tradicional de una función
// suma2, función como expresión.
// suma3, función flecha.

/* function sumaTradicional(...valores) {
    let suma = 0;

    for (let valor of valores) {
        suma += valor;
    }

    return suma;
}

let resultadoTradicional = sumaTradicional();
console.log(resultadoTradicional);

let sumaExpresion = function(...valores) {
    let suma = 0;

    for (let valor of valores) {
        suma += valor;
    }

    
} */

// EJERCICIO 27: Define una función a la que le pasaremos un número y el tipo de redondeo a realizar. 
// La función devolverá el resultado del redondeo y además mostrará el valor del redondeo en el documento junto a un mensaje indicando el tipo de redondeo.

/* let numero = 4.6;

let redondeo = function(numero) {
    return Math.round(numero);
}

document.body.innerHTML = "<p>Resultado del redondeo del número " + numero + " es " + redondeo(numero) + ". Su tipo de redondeo es round, el entero más cercano.</p>"; */

// EJERCICIO 28: Define una función a la que le pasaremos dos enteros (limite inferior y límite superior) y la función nos devolverá un entero aleatorio 
// en el rango [limiteInferior,limiteSuperior). Además mostrará en el documento un mensaje indicando el número aleatorio y el rango en el que se encuentra.

/* let numeroInferior = 4;
let numeroSuperior = 15;

let random = function(numeroInferior, numeroSuperior) {
    return Math.floor(Math.random() * (numeroSuperior - numeroInferior)) + numeroInferior;
}

document.body.innerHTML = "<p>Número random entre el " + numeroInferior + " y el " + numeroSuperior + " es " + random(numeroInferior, numeroSuperior) + ".</p>"; */

// EJERCICIO 29: Define una función a la que le pasaremos un ángulo y la función trigonométrica a aplicar 
// y nos devolverá el resultado de aplicar la función trigonométrica  y mostrará en el documento la operación aplicada con el resultado.

/* let angulo = 90;

let seno = function(angulo) {
    console.log(Math.sin(angulo))
    return Math.sin(angulo);
}

let coseno = function(angulo) {
    return Math.cos(angulo);
}

document.body.innerHTML = "<p>El seno de " + angulo + " es " + seno(angulo) + ", y el coseno es " + coseno(angulo) + ".</p>"; */

// EJERCICIO 30: Define una función que muestre la fecha actual en diferentes formatos
//5/10/2021
//Wed Oct 06 2021.
//Wed, 06 Oct 2021 15:54:47 GMT

let fechaActual = new Date();

let fechaActualFormatos = function(fechaActual) {
    let soloFecha = fechaActual.toDateString();
    let regional = fechaActual.toLocaleDateString();
    let hora = fechaActual.toTimeString();
    let horaRegional = fechaActual.toLocaleTimeString();
    let iso = fechaActual.toISOString();
    let utc = fechaActual.toUTCString();

    return document.body.innerHTML = "<p>Solo fecha: " + soloFecha + ". Hora regional: " + regional + ". Hora: " + hora + ". Hora regional: " + horaRegional + 
    ". ISO: " + iso + ". UTC: " + utc + ".</p>"
}

fechaActualFormatos(fechaActual);
