class Invitado {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Alerta {
    constructor(fechaHora, mensajeAlerta, timerID = null) {
        this.fechaHora = fechaHora;
        this.mensajeAlerta = mensajeAlerta;
        this.timerID = timerID;
    }
}

class Evento {
    constructor(nombre, texto, fechaHora, lugar, invitados, alertas) {
        this.nombre = nombre;
        this.texto = texto;
        this.fechaHora = fechaHora;
        this.lugar = lugar;
        this.invitados = invitados;
        this.alertas = alertas;
    }
}

function cargarAgenda() {
    const agendaLS = JSON.parse(localStorage.getItem("agenda")) || [];
    return agendaLS.map((evento) => {
        const alertasConvertidas = evento.alertas.map(alerta => {
            return new Alerta(
                new Date(alerta.fechaHora),
                alerta.mensajeAlerta,
                alerta.timerID
            );
        });
        
        return new Evento(
            evento.nombre,
            evento.texto,
            new Date(evento.fechaHora),
            evento.lugar,
            evento.invitados,
            alertasConvertidas
        );
    });
}

const agenda = cargarAgenda();
// Cuando inicia el programa, las alertas se vuelven a activar, porque cuando el programa se cierra, las alertas se desactivan
for (const evento of agenda) {
    activarAlertasEvento(evento);
}

menuAgenda();

function menuAgenda() {
    let continuar = true;
    while (continuar) {
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
                borrarEventosPasados();
                break;
            case '6':
                // No hace falta función, el break se encarga de salir del programa
                continuar = false;
                break;
            case '7':
                guardarMostrarEvento();
                continuar = false;
                break;
        }
    }
}

function addEvento() {
    let nombreEvento = prompt("Dime el nombre del evento.");
    let textoEvento = prompt("Dime el texto del evento.");
    let fechaHoraEvento = new Date(prompt("Dime la fecha y la hora del evento (AAAA-MM-DDTHH:MM)."));
    let lugarEvento = prompt("Dime el lugar del evento.");

    const invitados = [];
    let continuar = true;
    while (continuar) {
        let nombreInvitado = prompt("Dime el nombre del invitado.");
        let emailInvitado = "";
        while (!emailInvitado.includes("@")) {
            emailInvitado = prompt("Dime el email del invitado.");
            if (!emailInvitado.includes("@")) {
                alert("El email debe llevar una @");
            }
        }
        invitados.push(new Invitado(nombreInvitado, emailInvitado));

        if (prompt("¿Quieres otro invitado? (s/n)") !== "s") {
            continuar = false; // Aquí pararía el while
        }
    }

    const alertas = [];

    let confirmacion = prompt("¿Quieres añadir una alerta? (s/n)")
    while (confirmacion === "s") {
        let fechaHoraAlerta = new Date(prompt("Dime la fecha y hora de la nueva alerta (AAAA-MM-DDTHH:MM)."));
        let mensajeAlerta = prompt("Dime el mensaje de la nueva alerta.");
        alertas.push(new Alerta(fechaHoraAlerta, mensajeAlerta));

        confirmacion = prompt("¿Quieres otra alerta? (s/n)");
    }

    let nuevoEvento = new Evento(nombreEvento, textoEvento, fechaHoraEvento, lugarEvento, invitados, alertas);
    console.log(nuevoEvento.alertas);
    activarAlertasEvento(nuevoEvento);
    agenda.push(nuevoEvento);
}

function activarAlertasEvento(evento) {
    const ahora = new Date();
    for (const alerta of evento.alertas) {
        const tiempoRestante = alerta.fechaHora - ahora;
        if (tiempoRestante > 0) {
            alerta.timerID = setTimeout(() => {
                alert(`${evento.nombre}: ${alerta.mensajeAlerta}`);
            }, tiempoRestante);
        }
    }
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

    const indice = agenda.findIndex((evento) => evento.nombre === nombre);

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

    // const eventoActual = agenda.find((evento) => evento.nombre === nombre); // Así si queremos obtener el evento a buscar

    // if (eventoActual !== undefined) { // undefined porque si no lo encuentra devuelve undefined
    //     alert("Se va a modificar el evento " + nombre + ".");
    // }

    const indice = agenda.findIndex((evento) => evento.nombre === nombre);

    if (indice !== -1) {
        alert("Se va a modificar el evento " + nombre + ".");

        let copiaEvento = { ...agenda[indice] }; // Obtiene el objeto en esa posición. Las llaves y los 3 puntos sirven para obtener un nuevo objeto desglosado en la copia

        // nombre, texto, fechaHora, lugar, invitado
        copiaEvento.nombre = prompt("Dime el nuevo nombre del evento. Actual: " + copiaEvento.nombre);
        // agenda[indice].nombre = prompt...
        copiaEvento.texto = prompt("Dime el nuevo texto del evento. Actual: " + copiaEvento.texto);
        copiaEvento.fechaHora = prompt("Dime la nueva fecha y hora del evento (AAAA-MM-DDTHH:MM). Actual: " + copiaEvento.fechaHora);
        copiaEvento.lugar = prompt("Dime el nuevo lugar del evento. Actual: " + copiaEvento.lugar);

        let continuarInvitados = prompt("¿Quieres añadir más invitados? (s/n)");

        while (continuarInvitados === "s") {
            let nombreInvitado = prompt("Dime el nombre del invitado.");

            let emailInvitado = "";
            while (!emailInvitado.includes("@")) {
                emailInvitado = prompt("Dime el email del invitado.");
                if (!emailInvitado.includes("@")) {
                    alert("El email debe llevar una @");
                }
            }

            copiaEvento.invitados.push(new Invitado(nombreInvitado, emailInvitado));
            continuarInvitados = prompt("¿Quieres otro invitado? (s/n)");
        }

        let continuarAlertas = prompt("¿Quieres añadir nuevas alertas? (s/n)");
        while (continuarAlertas === "s") {
            let fechaHoraAlerta = new Date(prompt("Dime la fecha y hora de la nueva alerta (AAAA-MM-DDTHH:MM)."));
            let mensajeAlerta = prompt("Dime el mensaje de la alerta.");
            copiaEvento.alertas.push(new Alerta(fechaHoraAlerta, mensajeAlerta));

            continuarAlertas = prompt("¿Quieres otra alerta? (s/n)");
        }

        agenda[indice] = copiaEvento;
        activarAlertasEvento(copiaEvento);
        alert("Evento modificado.");
    } else { 
        alert("No se ha encontrado el evento " + nombre + ".");
    }
}

function desactivarAlertas() {
    let nombre = prompt("Dime el nombre del evento del que deseas desactivar las alertas.");

    const indice = agenda.findIndex((evento) => evento.nombre === nombre);

    if (indice !== -1) {
        for (const alerta of agenda[indice].alertas) {
            if (alerta.timerID) {
                clearTimeout(alerta.timerID);
                alerta.timerID = null;
            }
        }
        alert("Se han desactivado las alertas del evento " + nombre + ".");
    } else { 
        alert("No se ha encontrado el evento " + nombre + ".");
    }
}

function borrarEventosPasados() {
    const ahora = new Date();
    const eventosPasados = agenda.filter(evento => new Date(evento.fechaHora) < ahora);

    if (eventosPasados.length === 0) {
        alert("No hay eventos pasados.");
        return;
    }

    for (const evento of eventosPasados) {
        const indice = agenda.findIndex(e => e.nombre === evento.nombre);
        if (indice !== -1) {
            for (const alerta of agenda[indice].alertas) {
                if (alerta.timerID) {
                    clearTimeout(alerta.timerID);
                }
            }
            agenda.splice(indice, 1);
        }
    }

    alert("Se han eliminado todos los eventos pasados.")
}

function guardarMostrarEvento() {
    localStorage.setItem("agenda", JSON.stringify(agenda)); // Convertimos agenda en un texto, porque en el localstorage solo se guardan cadenas de texto
    document.write(
        `<h1>AGENDA</h1>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Texto</th>
                <th>Fecha y hora</th>
                <th>Lugar</th>
                <th>Invitados</th>
                <th>Alertas</th>
            </tr>`
    );
    for (const evento of agenda) {
        document.write(
            `<tr>
                <td>${evento.nombre}</td>
                <td>${evento.texto}</td>
                <td>${evento.fechaHora}</td>
                <td>${evento.lugar}</td>
                <td>`
            );
        for (const invitado of evento.invitados) {
            document.write(`<ul>${invitado.nombre} - ${invitado.email}</ul>`);
        }
        document.write(
            `</td>
            <td>`
        );
        for (const alerta of evento.alertas) {
            document.write(`<ul>${alerta.fechaHora} - ${alerta.mensajeAlerta}</ul>`);
        }
        document.write(
            `</td>
            </tr>`
        );
    }
    document.write("</table>");
}
