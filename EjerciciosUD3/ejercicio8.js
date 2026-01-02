// Coloca una imagen en el documento  y que cuando pasemos por encima la imagen cambie 
// (lo puedes hacer con dos imágenes diferentes o la misma en diferentes tamaños)
document.addEventListener("DOMContentLoaded", ejercicio8);
function ejercicio8() {
    document.getElementById("foto").addEventListener("mouseenter", (e) => {
        e.target.src = ""; // Poner imagen
    })

    document.getElementById("foto").addEventListener("mouseleave", (e) => {
        e.target.src = ""; // Poner otra imagen
    })
}