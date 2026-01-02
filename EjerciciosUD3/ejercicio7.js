// Crea un input tipo texto y que al salir del campo el contenido se pase a mayúsculas automáticamente.
document.addEventListener("DOMContentLoaded", ejercicio7);

function ejercicio7(e) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Dime tu nombre";
    document.body.append(input);
    input.addEventListener("input", (e) => { // Con input va directo, se puede con blur o change también
        e.target.value = e.target.value.toUpperCase();
    })
}