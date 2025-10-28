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
    const agenda = [...agendaLS].map((evento) => new Evento(evento));
}

// Creo que con eso puedo mirar si hay una agenda y cargar la agenda ??
function crearAgenda() {
    let agenda = [];
}

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
            salirSinGuardar();
            break;
        case '7':
            guardarMostrarEvento();
            break;
    }
}

function addEvento() {
    let nombreEvento = prompt("Dime el nombre del evento.");
    let textoEvento = prompt("Dime el texto del evento.");
    let fechaHoraEvento = prompt("Dime la fecha y la hora del evento (AAAA-MM-DDTHH:MM).");
    let lugarEvento = prompt("Dime el lugar del evento.");

    let numInvitadosEvento = parseInt(prompt("¿Cuántos invitados quieres en el evento?"));
    const invitados = [];
    for (var i = 0; i < numInvitadosEvento; i++) {
        let nombreInvitado = prompt("Dime el nombre del invitado.");
        let emailInvitado = prompt("Dime el email del invitado.")

        if (!emailInvitado.includes("@")) {
            alert("No es un correo electrónico. Vuelve a intentarlo.");
            emailInvitado = prompt("Dime el email del invitado.");
        }
        
        let nuevoInvitado = new Invitado(nombreInvitado, emailInvitado);

        invitados.push(nuevoInvitado);
    }

    let nuevoEvento = new Evento(nombreEvento, textoEvento, fechaHoraEvento, lugarEvento, invitados);

    // No sé cómo comprobar si es un evento vacío o no
    if (nuevoEvento != null) {
        alert("Se ha creado el evento correctamente.");
        crearOtroEvento();
    } else {
        alert("No se ha podido crear el evento.");
        crearOtroEvento();
    }
    return nuevoEvento;
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
    let nombreEvento = prompt("Dime el nombre del evento que deseas borrar.");
}

function modificarEvento() {
    let nombreEvento = prompt("Dime el nombre del evento que deseas eliminar.");
}

function desactivarAlertas() {
    let nombreEvento = prompt("Dime el nombre del evento del que deseas desactivar las alertas.")
}

function borrarEventoAnterior() {

}

function salirSinGuardar() {

}

function guardarMostrarEvento() {
    
}
