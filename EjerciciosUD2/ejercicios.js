
// Mayus + alt + a -> Comentario

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

// let primerString = prompt("Dime una palabra:");
// let segundoString = prompt("Dime lo que quieres intercambiar de tu palabra:");
// let tercerString = prompt("Dime las nueva letras:");

// let nuevoString = primerString.replace(segundoString, tercerString);

// console.log(primerString);
// console.log(nuevoString);

//EJERCICIO 6: Amplía el ejercicio anterior a todas las ocurrencias.

/* let primerString = prompt("Dime una palabra:");
let segundoString = prompt("Dime lo que quieres intercambiar de tu palabra:");
let tercerString = prompt("Dime las nueva letras:");

let nuevoString = primerString.replaceAll(segundoString, tercerString);

console.log(primerString);
console.log(nuevoString); */

//EJERCICIO 7: Pide dos strings al usuario. Debes mostrar el número de veces que el segundo string está incluido en el primero. Es la cadena exacta consecutiva.

// let string1 = prompt("Dime un primer String:");
// let string2 = prompt("Dime un segundo String:");

// console.log([...string1.matchAll(string2)].length);

// EJERCICIO 8: ¿Cuáles son los resultados de estas expresiones? Anotalo en un comentario antes de ejecutarlo y luego compruébalo mostrándolo por consola.

// let expresion = "" + 1 + 0; → 10
// let expresion = "" + 1 - 0; → 1
// let expresion = true + false; // → 1
// let expresion = 6 / "3"; // → 2
// let expresion = "2" * "3"; // → 6
// let expresion = 5 + 4 + "px"; // → 9px
// let expresion = "$" + 4 + 5; // → $45
// let expresion = "4" - 2; // → 2
// let expresion = "4px" -  2; // → NaN
// let expresion = "   -9  " + 5; // →   -9   5
//let expresion = "   -9  " - 5; // → -14
// let expresion = null + 1; // → 1
// let expresion = undefined + 1; // → NaN
// let expresion = "\t \n" - 2; // → -2

// console.log(expresion);

// EJERCICIO 9: Arregla el código para que el resultado sea 3

// let a = Number(prompt("¿Primer número?", 1));
// let b = Number(prompt("¿Segundo número?", 2));

// alert(a + b);

// EJERCICIO 10: ¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?

// let a = 1, b = 1;
// let c = ++a; // 2. Incrementa el valor y luego lo muestra
// let d = b++; // 1 Primero muestra el valor y luego lo incrementa

// console.log(c);
// console.log(d);

// EJERCICIO 11: ¿Cuál será el resultado de las siguientes expresiones?

// let expresion = 5 > 4; // → True
// let expresion = "apple" > "pineapple"; // → false
// let expresion = "2" > "12"; // → true. Comparara el carácter 2 con el 1(2), aunque sea 12, es true, 2 > 1
// let expresion = undefined == null; // → true. Convierte undefined a null, por lo que, ahora, es null es igual a null, true
// let expresion = undefined == null; // → false. Compara pero sin hacer la conversión
// let expresion = null == "\n0\n"; // → false. En este caso, al usar un comparador con un String, estos se comportan igual que con ===
// let expresion = null === "\n0\n"; // → false. Aunque no fuera un String, daría false igual.

// console.log(expresion);

// EJERCICIO 12: Usa el operador “?” para escribir un código que nos pida un número y nos muestre un mensaje si es mayor o igual que cero y otro mensaje si es menor estricto que cero.

// let numeroUsuario = Number(prompt("Dime un número o negativo o positivo."));

// let comparador = (numero) => {
//     return numero > 0 ? "Es mayor." : "Es menor.";
// }

// console.log(comparador(numeroUsuario));

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



// LOS EJERCICIOS QUE FALTAN AQUÍ SON LOS QUE NO HAY QUE HACER




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

// EJERCICIO 21: Escribe una función denominada “operacionesEncadenadas” con los siguientes argumentos
// Dos valores que actuarán de datos para las operaciones.
// El tercero y cuarto dos funciones callback que definiremos aparte. La primera devolverá la suma de los dos datos. La segunda el producto
// El último argumento será una función callback que pasaremos en la llamada a la función como función flecha con un mensaje por pantalla al usuario

/* let a = parseInt(prompt("Dime un número:"));
let b = parseInt(prompt("Dime otro número:"));

let operacionesEncadenadas = function(x, y, operacion1, operacion2, final) {
    document.writeln("Operación suma: " + operacion1(x, y));
    document.writeln("Operación producto: " + operacion2(x, y));
    final();
}

function suma(op1, op2) {
    return op1 + op2;
}

let producto = (x = 1, y) => x * y;

operacionesEncadenadas(a, b, suma, producto, () => alert("Hasta luego.")); */

// EJERCICIO 22: Crea una función que sume todos los elementos de un array numérico.(Sin recorrer el Array)

/* function sumaArray(array) {
    return array.reduce((suma, valorActual) => suma + valorActual); // Suma es como un acumulador, suma y almacena los números sumados. Con String sería una concatenación, por ejemplo
}

document.writeln(sumaArray([1, 2, 3])); */

// Por ejemplo, aquí buscaríamos el máximo valor del array numérico. let maximo = numeros.reduce((max, val) => val > max ? val : max);

// EJERCICIO 23: Encuentra y muestra todos los números pares de un array. (Sin recorrer el Array)

/* const array = [1, 2, 3, 4, 5, 6];

let buscarPares = (numeroActual) => {
    numeroActual % 2 == 0 ? document.writeln(`${numeroActual}<br>`) : "";
}

let numerosPares = array.reduce(buscarPares);  */// Ejecuta la función en todos los elementos del array. No se pasa el número porque el reduce se encarga de poner número a número

// EJERCICIO 24: Encuentra la palabra más larga en un array de palabras.

/* let array = ["patata", "lechuga", "perejil", "alcachofa"];

let palabraMasLarga = array.reduce(
    (palabraLarga, palabraActual) => palabraActual.length >= palabraLarga.length ? palabraActual : palabraLarga
);

document.writeln("La palabra más larga es: " + palabraMasLarga); */

// EJERCICIO 25: Elimina los elementos duplicados de un array. (Usa la estructura Set como ayuda)

/* const array = ["patata", "patata", "lechuga", "alcachofa", "Alcachofa"];
const arraySet = new Set(array); // Podemos convertir un array normal en un array sin duplicados
const arraySinDuplicados = Array.from(arraySet); // Convierte el nuevo Set en un array normal sin los duplicados para poder leerlo
console.log(arraySinDuplicados); */

// EJERCICIO 26: Usando el siguiente array que contiene una lista de nombres de países vamos a crear una serie de funciones para realizar diferentes operaciones sobre ese array. 
const paises = ["México", "Japón", "Italia", "Australia", "Brasil", "Canadá", "Francia", "Alemania", "India", "Argentina", "España", "China", "Sudáfrica", "Rusia", "Corea del Sur", "Reino Unido", "Estados Unidos", "Indonesia", "Egipto", "Turquía"];
// Función mostrarArray. Nos muestra en el documento HTML el número de elementos del array y a continuación el contenido del array en una lista numerada (ol)
// Función mostrarArrayAlreves. Igual que la anterior pero antes de mostrarlo lo ordena en sentido inverso. El array queda modificado.
// Función añadirElemento. Nos debe pedir un elemento y preguntarnos si lo queremos añadir al principio, al final o en una posición concreta. Después lo añadimos en dicha posición y lo mostramos con la función mostrarArray.
// Función eliminarElementoPosicion. La función debe dar la opción de eliminar al principio, al final o en una posición dada por el usuario. Después mostramos el array modificado con la función mostrarArray
// Función buscarPais. La función nos devuelve la posición de una país, o -1 si no lo encuentra.
// Función añadirPais. La función nos comprueba si un país que nos pasa el usuario existe y en caso de que no exista lo inserta al final. Si existe lo indica con un mensaje indicando la posición. La función devuelve la posición en la que está el país, o la posición en la que lo ha insertado.
// Función eliminar Pais. La función elimina un país que le pasamos como parámetro. Nos indica la posición en la que lo ha encontrado y borrado. La función devuelve la posición o -1 si no lo ha podido borrar. El array no debe quedar con espacios vacíos tras la eliminación

/* function mostrarArray(array) {
    document.writeln(`<p>El array tiene ${array.length} elementos</p><ol>`);
    array.forEach(element => {
        document.writeln(`<li>${element}`);
    });
    document.writeln("</ol>")
} */

//mostrarArray(paises);
//mostrarArray(paises.reverse());

/* function addPais(array) {
    let posicion = prompt("¿En que posición quieres añadir el país?");
    let pais = prompt("¿Qué país quieres añadir?");

    array.splice(posicion, 0, pais); // Con splice puedes borrar también, por lo que el 0 significa "borrar 0", si quisieramos borrar 2 elementos, debería ir un 2 ahí. posición tiene que ser un número, que es el lugar a insertar o eliminar
    mostrarArray(paises);
} */

/* function addPais(array) {
    let pais = prompt("¿Qué país quieres añadir?");
    let posicion = array.indexOf(pais);

    if(posicion == -1) {
        array.push(pais);
        document.writeln(`El país ${pais} ha sido añadido al final del array.`);
    } else {
        document.writeln(`El país ${pais} ya estaba en la posición ${posicion + 1}.`);
    }
}

addPais(paises);
mostrarArray(paises); */

/* function eliminarPais(array) {
    let paisAEliminar = prompt("¿Qué país quieres eliminar?");
    let posicion = array.indexOf(paisAEliminar);

    if(posicion == -1) {
        document.writeln(`El país ${paisAEliminar} no se puede eliminar, no está en la lista.`);
    } else {
        array.splice(posicion, 1);
        document.writeln(`El país ${paisAEliminar} estaba en la posición ${posicion + 1} y ha sido eliminado.`)
    }
}

eliminarPais(paises);
mostrarArray(paises); */


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

/* let fechaActual = new Date();

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

fechaActualFormatos(fechaActual); */

// EJERCICIO 31: Define una función que muestre la hora actual en diferentes formatos
// 14:35:07 (hora detallada con minutos y segundos)
// 02:35 PM o 02:35 AM (hora con minutos y AM o PM según sea antes o después del medio día).

/* let fechaActual = new Date();

let horaActual = function(fechaActual) {

    let hora = fechaActual.getHours();
    let min = fechaActual.getMinutes();
    let secs = fechaActual.getSeconds();

    let horas12 = 12 % hora;

    if (horas12 === 12) {
        horas12 = 12;
    }

    let am_pm;

    if (hora > 12) {
        am_pm = "PM";
    } else {
        am_pm = "AM";
    }

    //return document.body.innerHTML = "<p>Hora detallada -> " + hora + ":" + min + ":" + secs + ".</p>";
    return document.body.innerHTML = "<p>Hora detallada -> " + hora + ":" + min + ":" + secs + ". Hora AM/PM -> " + horas12 + ":" + min + " " + am_pm + ".</p>";

}

horaActual(fechaActual); */

// EJERCICIO 32: Define una función que muestre el número de días que quedan desde hoy hasta el fin de curso (el 23 de junio). 1000 → 1sec 1000 milisegundos, etc

// let hoy = new Date().getTime();
// let finCurso = new Date("2026-06-21").getTime();

// let fechas = function(finCurso, hoy) {
//     let diferencia = finCurso - hoy;
//     let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
//     return dias;
// }

// console.log("Días hasta fin de curso: ", fechas(finCurso, hoy));

// EJERCICIO 33: Crea un programa que pida por parámetro tu cumpleaños (sin año) y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100. 
// Por ejemplo, introducir el 05/23 para el día 23 de mayo.

/* let yearActual = new Date().getFullYear();
let cumpleUsuario = prompt("Dime la fecha de tu cumplaños, sin el añoo (dd/mm)."); // Hay que partir la fecha para que funcione porque js no reconoce ese formato

let parteFecha = cumpleUsuario.split("/");

let dia = parseInt(parteFecha[0]);
let mes = parseInt(parteFecha[1]) -1; // Porque el mes empieza en 0 Enero

for (let year = yearActual; year <= 2100; year++) {
    let fechaAComprobar = new Date(year, mes, dia); // Creamos el cumpleaños a partir de este año, porque nos dan igual los años anteriores

    if (fechaAComprobar.getDay() === 0) { // 0 → Domingo
        console.log(year);
    }
} */

// EJERCICIO 34: Escribe una función para mostrar el día de la semana en formato corto: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

/* let fechaUsuario = prompt("Dime una fecha (dd/mm/yyyy):");

let parteFecha = fechaUsuario.split("/");

let dia = parseInt(parteFecha[0]);
let mes = parseInt(parteFecha[1]) - 1;
let year = parseInt(parteFecha[2]);

let fecha = new Date(year, mes, dia);

let diaSemana = fecha.getDay();

let mostrarDiaSemana = (numeroDia) => {
    switch (numeroDia) {
        case 0:
            console.log("SU");
            break;
        case 1:
            console.log("MO");
            break;
        case 2:
            console.log("TU");
            break;
        case 3:
            console.log("WE");
            break;
        case 4:
            console.log("TH");
            break;
        case 5:
            console.log("FR");
            break;
        case 6:
            console.log("SA");
            break;
    }
}

mostrarDiaSemana(diaSemana); */

// EJERCICIO 35: Escribe una función que devuelva el último día del mes dado para un año dado. A veces es 30, 31 o incluso 28/29 para febrero.

/* let mesYear = prompt("Dime un mes y un año (mm/yyyy):");

let parteFecha = mesYear.split("/");

let mes = parseInt(parteFecha[0]) -1;
let year = parseInt(parteFecha[1]);

let ultimoDia = (mes, year) => {
    let ultimoDia = new Date(year, mes + 1, 0); // Obtenemos el día 0 del mes siguiente, lo que es el último día del mes anterior

    console.log(ultimoDia.getDate()); // Devuelve el día del mes
}

ultimoDia(mes, year); */

// EJERCICIO 36: Escribe una función que devuelva la cantidad de segundos transcurridos desde el comienzo del día.

// let segundosTranscurridos = () => {
//     let actual = new Date();

//     let inicioDia = new Date();
//     inicioDia.setHours(0, 0, 0, 0); // 0h 0min 0secs 0ms

//     let diferencia = actual - inicioDia;

//     let segundos = Math.floor(diferencia/1000);

//     return segundos;
// }

// console.log(segundosTranscurridos() + " segundos transcurridos.");
