//Crea un script para obtener la siguiente información, para probar usa el documento informacionDOM.html adjunto

// Número de párrafos que contiene el documento.
// Los 20 primeros caracteres del primer párrafo.
// El número de enlaces.
// La dirección a la que apunta el segundo enlace.
// La dirección a la que apunta el penúltimo enlace.
// El numero de enlaces que apuntan a “https://www.cpifppiramide.com/”
// El número de enlaces que hay en el segundo párrafo.
// El número de enlaces hijos de un “p” que tenga color red

// La información la mostramos en un div#mostrarInformacion  al final del documento
// NOTA: Para resolver el ejercicio debes usar los métodos getElementById(), querySelector() y querySelectorAll(). El método getElementsByTagName()
// también existen pero recomendable con los indicados por ser más actuales y flexibles.
document.addEventListener("DOMContentLoaded", mostrarInfo);

function mostrarInfo() {
    const divInfo = document.querySelector("#mostarInformacion");
    divInfo.innerHTML += `El número de párrafos es: ${document.querySelectorAll("p")[0].innerText.substring(0, 20)}</br>`;
}




