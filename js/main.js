const boton = document.getElementById("btnFrase");
const frase = document.getElementById("frase");

const mensajes = [
    "El último parcial se demuestra con diseño, lógica y funcionalidad.",
    "Una buena interfaz también habla del esfuerzo del programador.",
    "El código funciona mejor cuando también se presenta bien.",
    "Desarrollar no solo es escribir código, es crear soluciones.",
    "La tecnología se aprende practicando, corrigiendo y mejorando."
];

let posicion = 0;

boton.addEventListener("click", function() {
    posicion++;

    if (posicion >= mensajes.length) {
        posicion = 0;
    }

    frase.textContent = mensajes[posicion];
});
