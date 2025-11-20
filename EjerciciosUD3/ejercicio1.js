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
