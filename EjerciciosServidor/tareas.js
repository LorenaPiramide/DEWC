const URL = "http://100.49.134.235:3000/";
document.addEventListener("DOMContentLoaded", cargarTareas);

function pintarTareas(tareas) {
    const main = document.querySelector("main");
    const listaTareas = document.createElement("ol");
    main.append(listaTareas);
    tareas.forEach(tarea => {
        const lista = document.createElement("li");
        lista.textContent = tarea.nombre;
        lista.id = tarea.id;
        const borrarTarea = document.createElement("button");
        borrarTarea.textContent = "Eliminar";
        lista.append(borrarTarea);
        listaTareas.append(lista);
    });
}

function crearTarea() {
    
}

function cargarTareas() {
    fetch(URL + "tareas")
    .then(response => response.json())
    .then(data => pintarTareas(data));
}

function borrarTarea(tarea) {

}
