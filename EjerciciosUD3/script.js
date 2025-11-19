// TODO: EJERCICIO1: Asigna un manejador de evento a los dos momentos de carga de la página (DOMContentLoaded, load.beforeunload) muestra el tipo de evento y el target.

/* document.addEventListener("DOMContentLoaded", asignarManejadores);

function asignarManejadores(e){ */
    
            /*alert("Evento del DOMContentLoaded.");
              console.log(e)
              document.body.innerHTML+="<p>Hola</p>" */
/*     document.querySelector("p").addEventListener("click", (e)=> e.target.textContent="Adios");

}
alert("Bienvenido");*/

// Tienes que interactuar con la página, si no no va. Si le das a F5 después de interactuar sale un mensaje que en teoría no puedes cambiar
// window.addEventListener("beforeunload", function(e) {
//   e.preventDefault();
//   e.returnValue = "";
// });

// TODO: EJERCICIO2: Mostrar un alert con las coordenadas de la pantalla en las que se ha pulsado un botón del ratón en cualquier punto del documento. 
// Incluir también con que botón se ha pulsado. AYUDA El evento "click" igual no es la mejor idea para este ejercicio.

// No hace nada
document.addEventListener("mousedown", (e) => {
  const rect = document.getBoundingClientRect();
  alert(`Posicion: ${rect.left}, ${rect.top}`);
  alert(`Botón presionado: ${event.button}`);
});

// TODO: Ejercicio 4: Mostrar un alert con la tecla que se ha pulsado. Indicar también si estaba pulsada simultáneamente la tecla Alt o la tecla Ctrl
// document.addEventListener("DOMContentLoaded", ejercio4);
// function ejercio4() {

// }