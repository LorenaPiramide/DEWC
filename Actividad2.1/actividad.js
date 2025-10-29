class Invitado {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Evento {
    constructor(nombre, texto, fechaHora, lugar, invitado) {
        this.nombre = nombre;
        this.texto = texto;
        this.fechaHora = fechaHora;
        this.lugar = lugar;
        this.invitado = invitado;
    }
}

function cargarAgenda(){
    const agendaLS = JSON.parse(localStorage.getItem("agenda")) || []; //Esto último siempre va a ser true, si no funciona lo primero, haz un array vacío
    return agendaLS.map((evento) => new Evento(evento));
}

// Creo que con eso puedo mirar si hay una agenda y cargar la agenda ??
//function crearAgenda() {}
const agenda = cargarAgenda();

menuAgenda();

function menuAgenda() {
    let opcion = prompt(
        "Bienvenido a la agenda, elige una opción.\n" +
        "1- Añadir evento.\n" +
        "2- Borrar evento.\n" +
        "3- Modificar evento.\n" +
        "4- Desactivar alertas del evento.\n" + // con timeout
        "5- Borrar evento pasado.\n" +
        "6- Salir sin guardar.\n" +
        "7- Salir, guardar y mostrar agenda."
    );

    switch (opcion) {
        case '1':
            addEvento();
            break;
        case '2':
            borrarEvento();
            break;
        case '3':
            modificarEvento();
            break;
        case '4':
            desactivarAlertas();
            break;
        case '5':
            borrarEventoAnterior();
            break;
        case '6':
            // No hace falta función, el break se encarga de salir del programa
            break;
        case '7':
            guardarMostrarEvento();
            break;
    }
}

function addEvento() {
    let nombreEvento = "";
    while (nombreEvento === null || nombreEvento === "") {
        nombreEvento = prompt("Dime el nombre del evento.");
    }

    let textoEvento = "";
    while (textoEvento === null || textoEvento === "") {
        textoEvento = prompt("Dime el texto del evento.");
    }

    let fechaHoraEvento = "";
    while (fechaHoraEvento === null ||  fechaHoraEvento === "") {
        fechaHoraEvento = new Date(prompt("Dime la fecha y la hora del evento (AAAA-MM-DDTHH:MM)."));
    }

    let lugarEvento = "";
    while (lugarEvento === null || lugarEvento === "") {
        lugarEvento = prompt("Dime el lugar del evento.");
    }

    let numInvitadosEvento = parseInt(prompt("¿Cuántos invitados quieres en el evento?"));
    const invitados = [];
    for (var i = 0; i < numInvitadosEvento; i++) {
        let nombreInvitado = "";
        while (nombreInvitado === null || nombreInvitado === "") {
            nombreInvitado = prompt("Dime el nombre del invitado " + (i+1) + ".");
        }

        let emailInvitado = "";
        while (emailInvitado === null || emailInvitado === "" || !emailInvitado.includes("@")) {
            if (!emailInvitado !== null && emailInvitado !== "" && !emailInvitado.includes("@")) {
                alert("El email debe llevar una @");
            }
            emailInvitado = prompt("Dime el email del invitado.");
        }
    
        invitados.push(new Invitado(nombreInvitado, emailInvitado));
    }

    let nuevoEvento = new Evento(nombreEvento, textoEvento, fechaHoraEvento, lugarEvento, invitados);

    agenda.push(nuevoEvento);

    //return nuevoEvento;
}

function crearOtroEvento() {
    let confirmacion = prompt("¿Deseas volver a crear un nuevo evento? (s/n)");
    if (confirmacion === "s") {
        alert("Vas a crear un nuevo evento");
        addEvento();
    } else {
        alert("Volviendo al menú de la agenda.");
        menuAgenda();
    }
}

function borrarEvento() {
    let nombre = prompt("Dime el nombre del evento que deseas borrar.");

    const indice = agenda.find((evento) => evento.nombre === nombre);

    // La función flecha es lo mismo que esto
    /* function buscarNombre(evento) {
        return evento.nombre === nombre;
    }*/

    let confirmacion = prompt("Se va a eliminar el evento " + nombre + ".\n¿Deseas continuar? (s/n)");

    if (confirmacion === "s") {
        agenda.splice(indice, 1); // Eliminamos el elemento de la posición índice, el 1 es la cantidad a eliminar, si ponemos un 2, eliminamos el ínice y el siguiente
        alert("Se ha eliminado el evento " + nombre + ".")
    } else {
        alert("No se va a eliminar el evento " + nombre + ".");
    }

}

function modificarEvento() {
    let nombre = prompt("Dime el nombre del evento que deseas modificar.");

    let indice = agenda.find((evento) => evento.nombre === nombre)

    if (indice !== -1) {
        alert("Se va a modificar el evento " + nombre + ".");
        
    }


}

function desactivarAlertas() {
    let nombre = prompt("Dime el nombre del evento del que deseas desactivar las alertas.");
}

function borrarEventoAnterior() {

}

function guardarMostrarEvento() { // Tenemos que cargar el local storage, guardar los datos actuales y mostrarlos.
    
}
