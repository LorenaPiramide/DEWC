// TODO: EJERCICIO1: Asigna un manejador de evento a los dos momentos de carga de la página (DOMContentLoaded, load.beforeunload) muestra el tipo de evento y el target.

document.addEventListener("DOMContentLoaded", asignarManejadores
)

function asignarManejadores(e){
    
  /*   alert("Evento del DOMContentLoaded.");
    console.log(e)
    document.body.innerHTML+="<p>Hola</p>" */
    document.querySelector("p").addEventListener("click", (e)=> e.target.textContent="Adios")

}
alert("Bienvenido")