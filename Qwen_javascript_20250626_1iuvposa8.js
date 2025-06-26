// Actualiza el año actual en el footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Configuración del temporizador
function calculateTimeLeft() {
  const difference = +new Date("2025-04-01T00:00:00") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60)
    };
  } else {
    timeLeft = { horas: 0, minutos: 0, segundos: 0 };
  }

  return timeLeft;
}

function updateTimer() {
  const timerElement = document.getElementById("timer");
  const timeLeft = calculateTimeLeft();

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      `${timeLeft[interval]} ${interval}${timeLeft[interval] !== 1 ? "" : ""}`
    );
  });

  timerElement.textContent = timerComponents.join(" ");
}

updateTimer(); // Inicializar inmediatamente
setInterval(updateTimer, 1000); // Actualizar cada segundo