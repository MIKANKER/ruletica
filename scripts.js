const ruleta = document.getElementById('ruleta');
const premios = ['Premio 1', 'Premio 2', 'Premio 3', 'Premio 4', 'Premio 5', 'Premio 6'];
let angulo = 0;

function girarRuleta() {
  const giro = Math.floor(Math.random() * 360 + 360 * 3); // Gira de 3 a 6 vueltas completas
  angulo += giro;
  ruleta.style.transition = 'transform 2s ease-out'; // Cambié 4s a 2s para un giro más rápido
  ruleta.style.transform = `rotate(${angulo}deg)`;

  setTimeout(() => {
    const premioIndex = Math.floor((angulo % 360) / (360 / premios.length));
  }, 2000); // Aseguramos que el tiempo coincida con la duración de la transición
}

ruleta.addEventListener('click', girarRuleta);
