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
    const divInfo=document.querySelector("#mostrarInformacion")

    divInfo.innerHTML+=`El numero de parrafos es: ${document.querySelectorAll("p").length}</br>`;

    divInfo.innerHTML+=`Los 20 primeros caracteres del primer párrafo: ${document.querySelectorAll("p")[0].innerText.substring(0,20)}<\br>`;

    divInfo.innerHTML+=`El número de enlaces: ${document.querySelectorAll("a").length}</br>`;

    divInfo.innerHTML+=`La dirección a la que apunta el segundo enlace: ${document.querySelectorAll("a")[1].href}</br>`;

    divInfo.innerHTML+=`La dirección a la que apunta el penúltimo enlace: ${document.querySelectorAll("a")[document.querySelectorAll("a").length-2].href}</br>`;

    divInfo.innerHTML+=`El numero de enlaces que apuntan a “https://www.cpifppiramide.com/”: ${document.querySelectorAll("a[href='https://www.cpifppiramide.com/']").length}</br>`;

    divInfo.innerHTML+=`El número de enlaces que hay en el segundo párrafo: ${document.querySelectorAll("p")[1].querySelectorAll("a").length}</br>`;

    divInfo.innerHTML+=`El número de enlaces hijos de un p que tenga color red: ${document.querySelector('p[style="color:red"]').querySelectorAll("a").length}</br>`;
}




