// Asigna un manejador de evento a los dos momentos de carga de la página (DOMContentLoaded, load.beforeunload) muestra el tipo de evento y el target.

document.addEventListener("DOMContentLoaded", asignarManejadores);

function asignarManejadores(e){
    
      /*alert("Evento del DOMContentLoaded.");
        console.log(e)
        document.body.innerHTML+="<p>Hola</p>" */
     document.querySelector("p").addEventListener("click", (e)=> e.target.textContent="Adios");

}
alert("Bienvenido");

// Tienes que interactuar con la página, si no no va. Si le das a F5 después de interactuar sale un mensaje que en teoría no puedes cambiar
window.addEventListener("beforeunload", function(e) {
    e.preventDefault();
    e.returnValue = "";
});

// TODO: Ejecicio corregido de Pablo, es más fácil

document.addEventListener("DOMContentLoaded", mostrarInfo);
window.addEventListener("load", mostrarInfo);
window.addEventListener("beforeunload", mostrarInfo);

function mostrarInfo(e) {
    alert(`El evento es ${e.type}`);
    console.log(`El evento es ${e.type}`);
    e.preventDefault();
    e.returnValue = true; // Esto es por navegadores como Chrome, si no pones esto no se puede cancelar, a veces tampoco va
}