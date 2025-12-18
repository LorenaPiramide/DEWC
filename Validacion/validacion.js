document.addEventListener("DOMContentLoaded", validar);

function validar() {
    document.getElementById("nombre").addEventListener("blur", validarNombre);
    document.getElementById("apellidos").addEventListener("blur", validarApellidos);
    document.getElementById("email").addEventListener("blur", validarDNI)
    document.getElementById("email").addEventListener("blur", validarEmailAvisoComercial); // TODO: Creo que no debería ser un evento con blur
}

function validarNombre(e) {
    if (e.target.value.length < 3) {
        e.target.classList.add("invalido");
        document.getElementById("errorNombre").innerText = "El nombre debe tener al menos 3 letras."
    } else {
        e.target.classList.remove("invalido");

        let valor = e.target.value;
        e.target.value = valor.charAt(0).toUpperCase() + valor.slice(1); //Primera letra del nombre en mayúsculas.
        // El slice es porque si no solo guarda la primera en mayúscula y nada más "pedro" solo guardaría P, y falta edro, por eso no funcionaba

        document.getElementById("errorNombre").innerText = "";
    }
}

function validarApellidos(e) {
    if (e.target.value.length < 3) {
        e.target.classList.add("invalido");
        document.getElementById("errorApellidos").innerText = "El apellido debe tener al menos 3 letras.";
    } else {
        // debugger;
        e.target.classList.remove("invalido");

        let valor = e.target.value;
        let apellidos = valor.split(" ");

        let mayuscula = apellidos.map(apellido =>
            apellido.charAt(0).toUpperCase() + apellido.slice(1) // Por cada apellido (a), pone la primera letra en mayúscula
        );

        e.target.value = mayuscula.join(" "); // Unimos los dos apellidos

        document.getElementById("errorApellidos").innerText = "";
    }
}

function validarEmail(e) {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
}

function validarDNI(e) {

}

function validarEmailAvisoComercial(e) {

}