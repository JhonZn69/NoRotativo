// === BOTÓN "NO" QUE SE MUEVE ===
const btnNo = document.querySelector("#btn-random");

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

btnNo?.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target);
});

// === CORAZONES QUE SUBEN ===
function crearCorazones() {
    const corazon = document.createElement('div');
    corazon.innerHTML = '❤️';
    corazon.style.position = 'fixed';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.bottom = '0px';

    const duracion = Math.random() * 4 + 3; // 3-7 segundos
    corazon.style.animation = `subir ${duracion}s linear forwards`;

    corazon.style.zIndex = '-1';
    corazon.style.opacity = '0.6';
    corazon.style.fontSize = `${Math.random() * 25 + 15}px`;
    corazon.style.userSelect = 'none';
    corazon.style.pointerEvents = 'none';
    corazon.style.zIndex = '1000'; // para que estén encima
    corazon.style.opacity = '1';
    corazon.style.filter = `brightness(${Math.random() * 0.5 + 0.8})`;

    document.body.appendChild(corazon);
    setTimeout(() => corazon.remove(), duracion * 1000);
}

// Agregar animación al head si no está en CSS
const estiloAnimacion = document.createElement('style');
estiloAnimacion.textContent = `
@keyframes subir {
    to {
        transform: translateY(calc(-100vh - 100px));
        opacity: 0;
    }
}
`;
document.head.appendChild(estiloAnimacion);

// Lanzar corazones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setInterval(crearCorazones, 150); // cada 150 ms
});
