/* Crea un parrafo con un texto y que cada vez entres al parrafo 
cambie el color del texto de negro a rojo y viceversa al salir. */

document.addEventListener("DOMContentLoaded", (e) => {
    const parrafo = document.createElement("p");
    parrafo.textContent = "Este es un párrafo";

    document.body.appendChild(parrafo);
    parrafo.addEventListener("mouseenter", function() {
        parrafo.textContent += "Entrada del ratón";
    });

    parrafo.addEventListener("mouseleave", function() {
        parrafo.style.color = "black";
    });
})