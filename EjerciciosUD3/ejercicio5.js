// Mostrar un texto en un párrafo con las dimensiones de la ventana cada vez que es redimensionada.
document.addEventListener("DOMContentLoaded", ejercicio5);
function ejercicio5() {
    window.addEventListener("resize", (e) => {
        document.querySelector("#mostrarinfo").textContent = `Dimension de la ventana: ${window.innerWidth}:${window.innerHeight}`;
    })
}