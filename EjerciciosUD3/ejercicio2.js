// Mostrar un alert con las coordenadas de la pantalla en las que se ha pulsado un botón del ratón en cualquier punto del documento. 
// Incluir también con que botón se ha pulsado. AYUDA El evento "click" igual no es la mejor idea para este ejercicio.

// No hace nada
document.addEventListener("mousedown", (e) => {
  const rect = document.getBoundingClientRect();
  alert(`Posicion: ${rect.left}, ${rect.top}`);
  alert(`Botón presionado: ${event.button}`);
});