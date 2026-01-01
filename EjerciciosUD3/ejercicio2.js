// Mostrar un alert con las coordenadas de la pantalla en las que se ha pulsado un botón del ratón en cualquier punto del documento. 
// Incluir también con que botón se ha pulsado. AYUDA El evento "click" igual no es la mejor idea para este ejercicio.

document.addEventListener("DOMContentLoaded", mostrarCoordenadasClick);
function mostrarCoordenadasClick(e) {
    document.addEventListener("mousedown", (e) => {
        console.log(e);
        alert(`Coordenadas al clickar: ${e.screenX}:${e.screenY}. Botón: ${e.button}`);
    })
}