// Muestra en un párrafo de documento las coordenadas actualizadas en las que se encuentra el ratón cada vez que se mueva.

document.addEventListener("DOMContentLoaded", mostrarCoordenadas);
function mostrarCoordenadas(e) {
    document.addEventListener("mousemove", (e) => {
        document.querySelector("#mostrarInfo").textContent = `Coordenadas: ${e.screenX}:${e.screenY}`;
    })
}