document.addEventListener("DOMContentLoaded", validar);

function validar() {
    document.getElementById("nombre").addEventListener("blur", validarNombre);
    document.getElementById("apellidos").addEventListener("blur", validarApellidos);
    document.getElementById("dni").addEventListener("blur", validarDNI)
    document.getElementById("email").addEventListener("blur", validarEmailAvisoComercial); // TODO: Creo que no debería ser un evento con blur
    document.getElementById("username").addEventListener("blur", completarUsername);
    document.getElementById("password").addEventListener("blur", validarPassword);
    document.getElementById("repetirPassword").addEventListener("blur", validarRepetirPassword);
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
    const email = e.target.value;

    if (!regex.test(email)) {
        e.target.classList.add("invalido");
        document.getElementById("errorEmail").innerText = "Email incorrecto.";
    } else {
        e.target.classList.remove("invalido");
        document.getElementById("errorEmail").innerText = "";
    }
}

function validarDNI(e) {
    const dni = e.target.value.toUpperCase(); 
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    if (dni.length !== 9) {
        e.target.classList.add("invalido");
        document.getElementById("errorDNI").innerText = "DNI incorrecto.";
        return;
    }

    const numeros = dni.slice(0, 8); // Obtenemos los primeros 8 carácteres/números
    const letraUsuario = dni[8]; // Obtenemos el último carácter/letra

    if (isNaN(numeros)) { // NaN -> Not a Number, si es "no es número", error
        e.target.classList.add("invalido");
        document.getElementById("errorDNI").innerText = "Los primeros 8 dígitos deben ser numéricos.";
        return;
    }

    if (letraUsuario < "A" || letraUsuario > "Z") {
        e.target.classList.add("invalido");
        document.getElementById("errorDNI").innerText = "El último caracter debe ser una letra y estar entre la A y la Z.";
        return;
    }

    const numero = parseInt(numeros); // Cuando hemos sacado numeros, se ha convertido en un String, con esto, convertimos el String a número
    const resto = numero % 23; // Obtenemos el número con la fórmula del DNI
    const letraCorrecta = letras[resto]; // Obtenemos la letra correcta poniendo la posición (resultado de la fórmula)

    if (letraUsuario !== letraCorrecta) {
        e.target.classList.add("invalido");
        document.getElementById("errorDNI").innerText = "La letra del DNI no es correcta."
    } else {
        e.target.classList.remove("invalido");
        document.getElementById("errorDNI").innerText = "";
    }
    
}

function validarEmailAvisoComercial(e) {
    const aviso = document.getElementById("avisoComercial");

    if (!aviso.checked) {
        e.target.classList.remove("invalido");
        document.getElementById("errorEmail").innerText = "";
        return;
    }

    validarEmail(e);
}

function completarUsername(e) {
    // Si no se pone esto, se ignoraría el nombre de usuario que haya puesto el usuario y se generaría automáticamente igual
    if (e.target.value.trim() !== "") return;

    const nombre = document.getElementById("nombre").value.trim(); //.trim, para eliminar espacios en caso de que el usuario los haya puesto
    const apellidos = document.getElementById("apellidos").value.trim();

    // Primera letra del nombre + apellidos
    let username = nombre.charAt(0) + apellidos;

    // Quitamos los espacios
    username = username.split(" ").join("");

    username = username.toLowerCase();

    e.target.value = username;
}

function validarPassword(e) {
    const password = e.target.value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    if (!regex.test(password)) {
        e.target.classList.add("invalido");
        document.getElementById("errorPassword").innerText = 
            "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.";
    } else {
        e.target.classList.remove("invalido");
        document.getElementById("errorPassword").innerText = "";
    }
}

function validarRepetirPassword(e) {
    const password = document.getElementById("password").value;
    const repetir = e.target.value;

    if (password !== repetir) {
        e.target.classList.add("invalido");
        document.getElementById("errorRepetirPassword").innerText = "Las contraseñas no coinciden.";
    } else {
        e.target.classList.remove("invalido");
        document.getElementById("errorRepetirPassword").innerText = "";
    }
}
