// Optional – dacă vrei să schimbi culoarea glow-ului random la fiecare hover
const glowText = document.querySelector(".glow-text");

glowText.addEventListener("mouseover", () => {
  const colors = ["#0ff", "#f0f", "#ff0", "#0f0", "#f90"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  glowText.style.color = randomColor;
  glowText.style.textShadow = `
    0 0 10px ${randomColor},
    0 0 20px ${randomColor},
    0 0 40px ${randomColor},
    0 0 80px ${randomColor}`;
});

glowText.addEventListener("mouseout", () => {
  glowText.style.color = "#fff";
  glowText.style.textShadow = "none";
});
