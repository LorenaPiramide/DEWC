document.addEventListener("DOMContentLoaded", validar);

function validar() {
    document.getElementById("nombre").addEventListener("blur", validarNombre);
}

function validarNombre(e) {
    if (e.target.value.lenght < 3) {
        e.target.classList.add("invalido");
        document.getElementById("errorNombre").innerHTML = "El nombre debe tener al menos 3 letras."
    } else {
        e.target.value = e.target.replace(e.target.charAt(0), e.target.validar.charAt(0).toUpperCase());
        document.getElementById("errorNombre").innerHTML = "";
    }
}