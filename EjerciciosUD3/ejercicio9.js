// Haz un juego en el que el usuario tenga que adivinar una letra  aleatoria del abecedario pulsando en el teclado 
// (No hay que introducirla en ningún campo de texto ni similar). Indicandole mayor o menor según el orden alfabético en un párrafo en el documento.

document.addEventListener("DOMContentLoaded", ejercicio9);
function ejercicio9() {
    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letraRandom = abecedario.charAt(Math.floor(Math.random()*abecedario.length));
    const p = document.createElement("p");
    p.textContent = "El juego consiste en pulsar teclas y adivinar la letra."
    document.body.append(p);
    document.addEventListener("keydown", (e) => {
        let pulsada = e.key.toUpperCase();
        if (pulsada === letraRandom) {
            p.innerText = "¡Has acertado!";
        } else if (pulsada < letraRandom) {
            p.innerText = `No es la letra correcta. Es mayor que ${pulsada}`;
        } else {
            p.innerText = `No es la letra correcta. Es menor que ${pulsada}`;
        }
    });
}