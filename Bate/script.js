// Selecciona todos los botones de la batería
document.querySelectorAll('.drum').forEach(button => {
    // Añade un evento click a cada botón
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    });

    // Asocia una tecla del teclado a cada botón
    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === button.getAttribute('data-key')) {
            playSound(button.getAttribute('data-sound'));
            button.classList.add('active');
            setTimeout(() => button.classList.remove('active'), 100);
        }
    });
});

// Función para reproducir los sonidos
function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
}
