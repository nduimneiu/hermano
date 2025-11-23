const frases = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Tú puedes con mucho más de lo que imaginas.",
    "No te rindas, lo mejor está por venir.",
    "La disciplina vence al talento.",
    "Haz hoy lo que tu futuro agradecerá.",
    "Si puedes soñarlo, puedes lograrlo.",
    "El momento perfecto es ahora."
];

function nuevaFrase() {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("frase").textContent = frase;
}
