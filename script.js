// Alternar tema claro/escuro
const toggleButton = document.getElementById("toggle-theme");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      toggleButton.textContent = "☀️ Modo Claro";
    } else {
      toggleButton.textContent = "🌙 Modo Noturno";
    }
  });
}

// Fundo animado transparente (tsParticles)
if (typeof tsParticles !== "undefined") {
  tsParticles.load("tsparticles", {
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      color: { value: ["#0f0", "#f00", "#0ff"] },
      links: { enable: true, color: "#0f0", distance: 150, opacity: 0.6, width: 1 },
      move: { enable: true, speed: 3, outModes: { default: "bounce" } },
      number: { value: 120 },
      opacity: { value: 0.8 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  });
}

// Menu social
const socialToggle = document.getElementById("social-toggle");
const socialMenu = document.getElementById("social-menu");
if (socialToggle && socialMenu) {
  socialToggle.addEventListener("click", () => {
    socialMenu.classList.toggle("show");
  });
}

// Renderização dinâmica dos projetos
document.addEventListener("DOMContentLoaded", () => {
  const projetos = [
    { 
      titulo: "Login Farmácia", 
      descricao: "Tela de login para a farmácia Centro Farma.", 
      imagem: "farmacialogo.png",   // imagem escolhida
      link: "login.html" 
    },
   
  ];

  const container = document.getElementById("projetos-container");

  if (container) {
    projetos.forEach(p => {
      const card = document.createElement("a");
      card.className = "card";
      card.href = p.link;
      card.target = "_blank";

      card.innerHTML = `
        <h2>${p.titulo}</h2>
        <p>${p.descricao}</p>
        <img src="${p.imagem}" alt="${p.titulo}" class="card-img">
      `;
      container.appendChild(card);
    });
  }
});
