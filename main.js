

window.addEventListener('load', () => {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 200); // Velocidad de carga (ajustable)
});

// Splash screen
const splash = document.getElementById('splash');
const splashImg = splash.querySelector('img');
const contenido = document.getElementById('contenido');

splashImg.addEventListener('click', () => {
    splashImg.style.transform = 'scale(5)'; // Agrandar la imagen
    splashImg.style.opacity = 0; // Desvanecer la imagen
    splash.style.backgroundColor = '#87ceeb'; // Cambiar el fondo a celeste

    setTimeout(() => {
        splash.style.display = 'none'; // Ocultar el splash screen
        contenido.style.display = 'block'; // Mostrar el contenido
        contenido.classList.add('visible'); // Mostrar el contenido con transición

        // Iniciar animaciones de las secciones
        const secciones = document.querySelectorAll('section');
        secciones.forEach((seccion, index) => {
            setTimeout(() => {
                seccion.classList.add('visible');
            }, index * 500); // Retardo para cada sección
        });
    }, 1000); // Esperar a que termine la animación de la imagen
});