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
    let opcion = prompt("¿Qué quieres hacer?");

    switch (opcion) {
        case '1':
            //función
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

    }

}

function crearPanelOpciones() {
    // 1 Add evento, 2 borrar evento, 3 modificar evento, 4 desactivar alertas evento, 5 borrar evento pasado, 6 salir sin guardar, 7 salir guardando y mostrando la agenda
}


