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

// Cuando hagamos un evento y le pidamos al creador del evento que nos diga el nombre y el email de los invitados por el prompt, podremos pasarle los atributos juntos {nombre, email}

function cargarAgenda(){
    const agendaLS = JSON.parse(localStorage.getItem("agenda")) || []; //Esto último siempre va a ser true, si no funciona lo primero, haz un array vacío
    const agenda = [...agendaLS].map((evento) => new Evento(evento));
}

/* function crearAgenda() {
    let agenda = [];
} */

function menuAgenda() {
    let opcion = prompt(
        "Bienvenido a la agenda, elige una opción.\n" +
        "1- Añadir evento.\n" +
        "2- Borrar evento.\n" +
        "3- Modificar evento.\n" +
        "4- Desactivar alertas del evento.\n" +
        "5- Borrar evento pasado.\n" +
        "6- Salir sin guardar.\n" +
        "7- Salir, guardar y mostrar agenda."
    );

    switch (opcion) {
        case '1':
            addEvento();
            break;
        case '2':
            // función
            break;
        case '3':
            //funcion
            break;
        case '4':
            // funcion
            break;
        case '5':
            // funcion
            break;
        case '6':
            // funcion
            break;
        case '7':
            // funcion
            break;
    }

}

function addEvento() {
    let nombreEvento = prompt("Dime el nombre del evento.");
    let textoEvento = prompt("Dime el texto del evento.");
    let fechaHoraEvento = prompt("Dime la fecha y la hora del evento (AAAA-MM-DDTHH:MM).");
    let lugarEvento = prompt("Dime el lugar del evento.");

    let numInvitadosEvento = prompt(parseInt("¿Cuántos invitados quieres en el evento?"));
    const invitados = [];
    for (var i = 0; i < numInvitadosEvento; i++) {
        let nombreInvitado = prompt("Dime el nombre del invitado.");
        let emailInvitado = prompt("Dime el email del invitado.")
        
        let nuevoInvitado = new Invitado(nombreInvitado, emailInvitado);

        invitados.push(nuevoInvitado);
    }

    let nuevoEvento = new Evento(nombreEvento, textoEvento, fechaHoraEvento, lugarEvento, invitados);

    if (nuevoEvento != null) {
        // Poner alerta de que se ha creado correctamente
    } else {
        // Poner alerta de que no se ha creado correctamente
    }

    return nuevoEvento;
}
