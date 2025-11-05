// TODO: Conversor de temperaturas
// Crea una función que pida una temperatura en °C y devuelva su valor en °F y °K. Usa prompt y alert para mostrar resultados.

// let gradosC = parseInt(prompt("Dime una temperadura en °C:"));

// function convetirTemperatura(gradosC) {
//     let gradosF = ((gradosC * (9/5)) + 32);
//     let gradosK = (gradosC + 273.15);

//     alert(`La temperatura ${gradosC}°C son ${gradosF}°F y ${gradosK}°K.`);
// }

// convetirTemperatura(gradosC);

// TODO: Clase “CuentaBancaria”
// Implementa una clase con métodos para ingresar, retirar y consultar saldo. Controla que no se pueda retirar más dinero del disponible.

// class CuentaBancaria {
//     constructor(saldo, numCuenta) {
//         this.saldo = saldo;
//         this.numCuenta = numCuenta;
//     }

//     ingresar(cantidad) {
//         this.saldo += cantidad;
//         alert(`Has ingresado ${cantidad}€, ahora tienes ${this.saldo}€ en la cuenta.`);
//     }

//     retirar(cantidad) {
//         if (cantidad > this.saldo) {
//             alert(`No puedes retirar ${cantidad}€ porque solo tienes ${this.saldo}€ en el banco.`);
//         } else {
//             this.saldo -= cantidad;
//             alert(`Se han retirado ${cantidad}€ de la cuenta, ahora tienes ${this.saldo}€ en el banco.`);
//         }
//     }

//     consultarSaldo() {
//         alert(`Tu saldo actual es de ${this.saldo}€`);
//     }
// }

// let miCuenta = new CuentaBancaria(200, "AB");

// function ejecucion() {
//     let continuar = true;

//     while (continuar) {
//         let opcion = prompt("Elige una opción:\n1-Ingresar.\n2-Retirar.\n3-Consultar saldo.\n4-Salir.");  
//         switch (opcion) {
//             case "1":
//                 let ingreso = parseFloat(prompt("Cantidad a ingresar:"));
//                 miCuenta.ingresar(ingreso);
//                 break;
//             case "2":
//                 let retiro = parseFloat(prompt("Cantidad a retirar:"));
//                 miCuenta.retirar(retiro);
//                 break;
//             case "3":
//                 miCuenta.consultarSaldo();
//                 break;
//             case "4":
//                 continuar = false;
//                 break;
//             default:
//                 alert(`Opción no válida.`);
//                 break;
//         }
//     }
// }

// ejecucion();

// TODO: Filtrar palabras prohibidas
// Pide al usuario una frase y elimina las palabras “malas” de una lista predefinida antes de mostrarla limpia.

// let array = ["patata", "casa"];

// let palabra = prompt("Dime una palabra:")

// function addPalabra(palabra) {
//     array.push(palabra);
// }

// let frase = prompt("Dime una frase para eliminar patata y casa:");

// split → divide la frase en palabras, sin espacios. filter → Recorre el array palabra por palabra (p como un foreach). Si no está la palabra en el array true, si lo está false, se quita. join → Une las palabras
// let resultado = frase.split(" ").filter(p => !array.includes(p)).join(" ");

// alert(resultado);

// TODO: Ordenar notas
// Pide al usuario una lista de notas separadas por comas y muestra las mismas notas ordenadas de menor a mayor y de mayor a menor.

// let listaNotas = prompt("Dime una lista de notas separadas por comas.");

// let arrayNotasStr = listaNotas.split(","); // con el .join(", "); al contrario de split
// let arrayNotas = arrayNotasStr.map(nota => parseFloat(nota));

// let menorMayor = [...arrayNotas].sort((a, b) => a - b); // Por ejemplo, [5, 9, 2], 5 - 9 da positivo, lo que cambia el orden, si no, se queda tal cual

// let mayorMenor = [...arrayNotas].sort((a, b) => b - a); // Si da negativo cambia el orden, si no se queda tal cual

// alert(`Notas de menor a mayor: ${menorMayor.join(", ")}`);
// alert(`Notas de mayor a menor: ${mayorMenor.join(", ")}`);

// FIXME: Ejercicio completo
// Clase Usuario
// Debe tener: nombre, email, edad y preferencias (un objeto con color y tema: “claro” o “oscuro”).
// Incluye un método que devuelva una cadena tipo:
// "Nombre: Ana | Edad: 25 | Tema: oscuro | Color favorito: azul"
// Gestión de usuarios (Array + map + for...of)
// Usa un array usuarios para guardar varios objetos Usuario.
// Muestra todos los usuarios con for...of.
// Usa .map() para crear un array con solo los nombres de los usuarios.
// Guardar en localStorage
// Cada vez que se añade o modifica un usuario, guarda todo el array usuarios en localStorage.
// Al iniciar el programa, carga los datos desde localStorage si existen.
// Usuario activo (cookies)
// Cuando el usuario inicia sesión (introduce su nombre), guarda su nombre en una cookie llamada usuarioActivo.
// Si la cookie existe al recargar la página, muestra un mensaje tipo:
// "Bienvenida de nuevo, [nombre]".
// Mostrar preferencias del usuario activo
// Si hay cookie activa, busca el usuario correspondiente en el array (por nombre) y muestra sus preferencias.
// Permite modificarlas y actualiza tanto el localStorage como la cookie.
// Opcional (más completo si quieres practicar más):
// Usa un for...in para recorrer las claves del objeto preferencias del usuario y mostrarlas con sus valores.
// Alert cada 1 min para practicar

// FIXME: class Usuario {
//     constructor (nombre, email, edad, preferencias) {
//         this.nombre = nombre;
//         this.email = email;
//         this.edad = edad;
//         this.preferencias = preferencias;
//     }

//     obtenerInfo() {
//         let info = `Nombre: ${this.nombre}<br>`; // <br> si es document.write, si es console.log es \n
//         info += `Email: ${this.email}<br>`;
//         info += `Edad: ${this.edad}<br>`;
//         info += `Preferencia de tema: ${this.preferencias.tema}<br>`;
//         info += `Color preferido: ${this.preferencias.color}<br>`;
//         return info;
//     }
// }

// class Preferencia {
//     constructor (tema, color) {
//         this.tema = tema;
//         this.color = color;
//     }
// }

// let usuarios = [];

// function mostrarPanel() {
//     let continuar = true;
//     while (continuar) {
//         let opcion = prompt(
//             "Elige una opción:\n" +
//             "1- Agregar usuario.\n" +
//             "2- Nombres de todos los usuarios.\n" +
//             "3- Modificar usuario elegido.\n" +
//             "4- Eliminar un usuario.\n" +
//             "5- Mostrar toda la información de un usuario.\n" +
//             "6- Activar todas las alertas.\n" +
//             "7- Desactivar todas las alertas.\n" +
//             "8- Salir del programa."
//         )

//         switch (opcion) {
//             case '1':
//                 agregarUsuario();
//                 break;
//             case '2':
//                 mostrarNombres();
//                 break;
//             case '3':
//                 modificarUsuario();
//                 break;
//             case '4':
//                 eliminarUsuario();
//                 break;
//             case '5':
//                 obtenerInfoPorUsuario();
//                 break;
//             case '6':
//                 activarAlerta();
//                 break;
//             case '7':
//                 desactivarAlerta();
//                 break;
//             case '8':
//                 alert("Saliendo del programa...");
//                 continuar = false;
//                 break;
//             default:
//                 alert("Opción no válida.");
//                 break;
//         }
//     }
// }

// function agregarUsuario() {

//     let continuar = true;

//     while(continuar) {
//         let nombre = prompt("Nombre:");
//         let email = prompt("Email:");
//         let edad = parseInt(prompt("Edad:"));
//         let tema = prompt("Tema preferido (claro/oscuro)");
//         let color = prompt("Color:");

//         let preferencia = new Preferencia(tema, color);
//         let usuario = new Usuario(nombre, email, edad, preferencia);

//         usuarios.push(usuario);

//         alert(`Usuario ${nombre} añadido correctamente.`);

//         continuar = confirm("¿Quieres añadir otro usuario?");
//     }
// }

// function mostrarNombres() {
//     let nombres = usuarios.map(u => u.nombre);
    
// }

// function obtenerInfoPorUsuario() {
//     let nombreUsuario = prompt("Dime el nombre del usuario:")

//     let usuario = usuarios.find(u => u.nombre === nombreUsuario);

//     if (usuario) {
//         alert(usuario.obtenerInfo());
//     } else {
//         alert("Usuario no encontrado.");
//         mostrarPanel();
//     }
// }


// TODO:

// Muestra los números del 1 al 10 con un for.

// Muestra los pares del 0 al 20 con un while.

// Crea un array con tres nombres y recórrelo con for...of mostrando un saludo personalizado.

// FIXME: let valor = 0;

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// while (valor <= 20) {
//     if (valor % 2 === 0) {
//         console.log(valor);
//     }
//     valor++;
// }

// const nombre = ["Pepe", "Juana", "Jose Luisa"];

// for (const elemento of nombre) {
//     document.write(`Hola, ${elemento}.<br>`);
// }

// TODO:

// Crea un script con un error a propósito (por ejemplo, variable no definida).

// Abre la consola del navegador, revisa el error y corrígelo.

// Añade mensajes con console.log() y console.error() para comprobar el flujo del programa.

// console.log("Inicio del programa");

// try {
//   console.log("Intentando usar una variable...");
//   console.log(variableInexistente);
// } catch (error) {
//   console.error("¡Ocurrió un error!", error);
// }

// console.log("El programa continúa normalmente después del error.");

// TODO:

// Crea un objeto Date con la fecha actual.

// Muestra el día, mes y año por separado.

// Muestra la hora actual cada segundo con setInterval().

// FIXME: let fechaActual = new Date();

// console.log(`Día: ${fechaActual.getDate()}`);
// console.log(`Mes: ${fechaActual.getMonth() + 1}`);
// console.log(`Año: ${fechaActual.getFullYear()}`);

// setInterval(() => {
//     let horaActual = new Date();
//     console.log(
//         `Hora actual: ${horaActual.getHours()}:${horaActual.getMinutes()}:${horaActual.getSeconds()}` // Obtenemos la hora exacta
//     );
// }, 1000); // 1000 es 1 sec


// TODO:

// Genera un número aleatorio entre 1 y 100.

// Pide al usuario que adivine el número (con prompt).

// Usa una estructura if para indicar si el número es mayor o menor.

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max) + 1;
// }

// let numeroRandom = getRandomInt(100);

// let continuar = true;

// while (continuar) {
//     let numeroUsuario = parseInt(prompt("Averigua el número que es. Entre 1 y 100."));

//     if (numeroUsuario > numeroRandom) {
//         alert(`No has acertado. El número correcto es menor.${numeroRandom}`);
//     } else if (numeroRandom > numeroUsuario) {
//          alert(`No has acertado. El número correcto es mayor.${numeroRandom}`);
//     } else {
//         console.log(`¡Has acertado!`);
//         break;
//     }
//     continuar = confirm("¿Quieres intentarlo otra vez?");
// }

// TODO:

// Pide al usuario su nombre y guárdalo en localStorage.

// Si el usuario vuelve a cargar la página, recupéralo y muéstrale un mensaje de bienvenida.

// Añade un botón que borre los datos guardados.

// FIXME: let nombreGuardado = localStorage.getItem("nombre");

// if (nombreGuardado) {
//     alert(`Bienvenido/a de nuevo, ${nombreGuardado}`);

//     if (confirm("¿Quieres borrar tu nombre guardado?")) {
//         localStorage.removeItem("nombre");
//         alert("Eliminado!");
//     }
// } else {
//     let nombreUsuario = prompt("¿Cómo te llamas?");

//     if (nombreUsuario) {
//         localStorage.setItem("nombre", nombreUsuario);
//         alert(`Tu primera vez, ${nombreUsuario}`);
//     } else {
//         alert(`No hay nombre.`);
//     }
// }

// FIXME: class UsuarioClass {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
// }

// let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

// if (usuarioGuardado) {
//     alert(`Hola de nuevo, ${usuarioGuardado.nombre}`);

//     if (confirm("¿Quieres borrar tus datos?")) {
//         localStorage.removeItem("usuario");
//         alert("Eliminado");
//     }
// } else {
//     let nombre = prompt("¿nombre?");
//     let edad = parseInt(prompt("¿Edad?"));

//     let usuarioNuevo = new UsuarioClass(nombre, edad);
//     localStorage.setItem("usuario", JSON.stringify(usuarioNuevo));
//     alert(`Tu primera vez, ${usuarioNuevo.nombre}`);
// }

// TODO:

// Crea una función tradicional que calcule el área de un triángulo.

// Crea una función flecha que calcule el área de un rectángulo.

// Llama a ambas funciones y muestra los resultados por consola.

// FIXME: function calcularTrianguloTradicional(base, altura) {
//     return (base * altura) /2;
// }

// let areaTriangulo = (base, altura) => (base * altura) / 2;

// console.log(`Función tracicional: ${calcularTrianguloTradicional(10, 4)}`);
// console.log(`Función flecha: ${areaTriangulo(10, 4)}`);

// TODO:

// Crea un array con 5 números.

// Calcula la suma total usando un bucle for.

// Usa métodos de array (push, pop, map, filter, reduce) al menos en dos casos distintos.

// FIXME: 
let numeros = [5, 2, 6, 8, 1];
let suma = 0;

numeros.push(2, 4, 8);

let eliminado = numeros.pop();

console.log(`Numero eliminado: ${eliminado}`);

let nuevoArray = numeros.map((num) => {
    return num*2;
});

let nuevoArrayCorto = numeros.map((num) => num * 2);

for (const numero of numeros) {
    // suma += numero;
    console.log(numero);
}
// console.log(suma);

console.log("Map array.");

for (const numero of nuevoArray) {
    console.log(numero);
}

let nuevoFilter = numeros.filter((num) => {
    return num > 5;
});

let nuevoFilterCorto = numeros.filter((num) => num > 5);

console.log("Filter array");

for (const numero of nuevoFilter) {
    console.log(numero);
}

let reduceSuma = numeros.reduce((acumulador, num) => {
    return acumulador + num;
}, 0); // Acumulador, guarda el número que va sumando; num, el número que suma; 0, opcional, desde qué valor empieza la acumulación, si no se pone, es el primer elemento del array, FIXME: IMPORTANTE

let reduceSumaCorto = numeros.reduce((acumulador, num) => acumulador + num, 0)

console.log(`Suma con reduce: ${reduceSuma}`);

// TODO:

// Crea un objeto llamado coche con propiedades (marca, modelo, año) y un método que muestre su información.

// Llama al método desde la consola.

// FIXME: class Coche {
//     constructor (marca, modelo, year) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.year = year;
//     }

//     mostrarInformacion() {
//         return console.log(`Marca: ${this.marca}. Modelo: ${this.modelo}. Año: ${this.year}`);
//     }
// }

// let coche1 = new Coche("patata", "bolsa", 1990);
// let coche2 = new Coche("Lechuga", "Cepillo", 2000);

// let arrayCoche = [];

// arrayCoche.push(coche1, coche2);

// arrayCoche.forEach((coche, indice) => {
//     // console.log(`${indice + 1}:`);
//     // coche.mostrarInformacion(); // Con esto, no necesitaríamos el return en el método de mostrar información, pero sí lo necesitamos al usuar document.write
//     document.write(`${indice + 1}: ${coche.mostrarInformacion()}`);
// });

// TODO:

// Define una clase Persona con propiedades (nombre, edad) y un método saludar().

// Crea dos instancias de Persona y llama a sus métodos.

// Añade una propiedad o método nuevo desde fuera de la clase y comprueba que funciona.

// FIXME: class Persona {
//     constructor (nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar() {
//         console.log(`Hola, ${this.nombre}`);
//     }
// }

// let persona1 = new Persona("Patata", 22);
// let persona2 = new Persona("Lechuga", 30);

// for (let clave in persona1) {
//     console.log(`${clave}: ${persona1[clave]}`);
// }

// let array = [];

// array.push(persona1, persona2);

// console.log("For each:");
// array.forEach((persona, i) => {
//     console.log(`Persona ${i + 1}: ${persona.nombre}, ${persona.edad}`);
// })

// console.log("Con map:");
// let nombres = array.map(p => p.nombre);
// console.log(nombres);

// console.log("Con for of:");
// for (const persona of array) {
//     console.log(persona.nombre, persona.edad);
// }


// function mostrarEdad() {
//     console.log(`Edad de ${this.nombre}: ${this.edad}`);
// }

// persona1.saludar();
// mostrarEdad.call(persona2);

// persona1.nacionalidad = "Española";
// console.log(persona1.nacionalidad);

// TODO:

// Reto combinado:
// Crea un pequeño programa que:

// Pida el nombre del usuario.

// Lo guarde en localStorage.

// Cree un objeto Usuario con nombre y fecha de último acceso (usando Date).

// Muestre un mensaje personalizado en el documento y por consola.

// Use una función para calcular cuántos días pasaron desde la última visita.

// FIXME: class UsuarioLS {
//     constructor (nombre, fechaUltimoAcceso) {
//         this.nombre = nombre;
//         this.fechaUltimoAcceso = fechaUltimoAcceso;
//     }

//     mostrarInformacion() {
//         console.log(`El usuario con nombre ${this.nombre}, entró por última vez el ${this.fechaUltimoAcceso}`);
//     }
// }

// function calcularDias(fechaAnterior) {
//     const fechaActual = new Date();
//     const diferenciaMs = fechaActual - new Date(fechaAnterior); // diferencia en ms
//     const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
//     return dias;
// }

// let datosGuardados = localStorage.getItem("usuario");

// if (datosGuardados) {
//     let usuarioData = JSON.parse(datosGuardados);
//     let usuario = new UsuarioLS(usuarioData.nombre, usuarioData.fechaUltimoAcceso);

//     usuario.mostrarInformacion();

//     let dias = calcularDias(usuario.fechaUltimoAcceso);
//     document.write(`Hola, ${usuario.nombre}! Han pasado ${dias} dia(s) desde tu última visita.`);

//     usuario.fechaUltimoAcceso = new Date();
//     localStorage.setItem("usuario", JSON.stringify(usuario));
// } else {
//     let nombreUsuario = prompt("Nombre:");

//     let nuevoUsuario = new UsuarioLS(nombreUsuario, new Date());
//     localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));

//     document.write(`Hola, ${nombreUsuario}. Es tu primera visita.`);
//     nuevoUsuario.mostrarInformacion();
// }

// FIXME: Recordamos que tenemos que pegar esto en el html <body onload="checkCookie()"> para las cookies

// let contador = 0;
// let intervalo = setInterval(() => {
//   contador++;
//   console.log(`Segundos transcurridos: ${contador}`);

//   if (contador === 5) {
//     clearInterval(intervalo);
//     console.log("Fin del conteo");
//   }
// }, 1000);

// FIXME:
// setTimeout(() => {
//   alert("¡Han pasado 3 segundos!");
// }, 3000);


// FIXME: Guardar y leer
// localStorage.setItem("nombre", "Lore");
// let user = localStorage.getItem("nombre");
// console.log(`Usuario guardado: ${user}`);

//FIXME: Borrar
// localStorage.removeItem("nombre");

// FIXME:

// let precio = 19.987;
// let descuento = 15; // %
// let precioFinal = precio - (precio * descuento / 100);

// console.log(`Precio final (sin redondear): ${precioFinal}`);
// console.log(`Precio final (redondeado): ${Math.round(precioFinal * 100) / 100}€`);

// FIXME:

// let aleatorio = Math.floor(Math.random() * 6) + 1;
// alert(`Has sacado un ${aleatorio} en el dado 🎲`);

// FIXME:"

// let ahora = new Date();
// console.log(ahora.toString());
// console.log(ahora.toLocaleDateString());
// console.log(ahora.toLocaleTimeString());

// let dia = ahora.getDate();
// let mes = ahora.getMonth() + 1; // (0 = enero)
// let año = ahora.getFullYear();
// let hora = ahora.getHours();

// console.log(`Hoy es ${dia}/${mes}/${año}, y son las ${hora}h`);

// let inicio = new Date("2025-01-01");
// let hoy = new Date();
// let diferencia = hoy - inicio; // milisegundos

// let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
// console.log(`Han pasado ${dias} días desde el inicio del año`);

// FIXME: Pedir nombre y guardar en localStorage
// let nombre = localStorage.getItem("usuario");
// if (!nombre) {
//   nombre = prompt("¿Cómo te llamas?");
//   localStorage.setItem("usuario", nombre);
// }

// // Contador de visitas
// let visitas = Number(localStorage.getItem("visitas")) || 0;
// visitas++;
// localStorage.setItem("visitas", visitas);

// // Fecha y saludo
// let fecha = new Date();
// let hora = fecha.getHours();
// let saludo = hora < 12 ? "Buenos días" : hora < 20 ? "Buenas tardes" : "Buenas noches";

// // Número aleatorio de la suerte
// let suerte = Math.ceil(Math.random() * 10);

// // Mostrar info
// alert(`${saludo}, ${nombre}!\nLlevas ${visitas} visitas.\nTu número de la suerte es ${suerte}.`);

// // Mostrar por consola el día exacto
// console.log(`Hoy es ${fecha.toLocaleDateString()} a las ${fecha.toLocaleTimeString()}`);

// FIXME: Mostrar mensaje inicial
// document.write("Cargando...<br>");
// console.log("Cargando...");

// // Cambiar mensaje tras 2 segundos
// setTimeout(() => {
//   document.write("Listo!<br>");
//   console.log("Listo!");
//   alert("Proceso terminado");
// }, 2000);

// setTimeout(() => {
//   document.write("<br><br>");
//   console.log("Mensaje eliminado");
// }, 4000);
