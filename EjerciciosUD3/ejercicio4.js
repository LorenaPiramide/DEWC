// Mostrar un alert con la tecla que se ha pulsado. Indicar también si estaba pulsada simultáneamente la tecla Alt o la tecla Ctrl
document.addEventListener("DOMContentLoaded", ejercicio4);
function ejercicio4() {
    document.addEventListener("keyup", (e) => {
        console.log(e);
        alert(`Has pulsado la tecla ${e.key} ${e.altKey ? " con la tecla Alt " : ""} ${e.ctrlKey ? " con la letra Ctrl " : ""}`);
    })
}