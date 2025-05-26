document.addEventListener("DOMContentLoaded", () => { 
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle menú hamburguesa (modo móvil)
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");

    // Al cerrar menú, cerrar todos los dropdowns
    if (!navMenu.classList.contains("active")) {
      dropdowns.forEach(d => d.classList.remove("active"));
    }
  });

  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector(".dropbtn");

    btn.addEventListener("click", (e) => {
      // Sólo hacer toggle en modo móvil (cuando menú hamburguesa está activo)
      if (navMenu.classList.contains("active")) {
        e.preventDefault(); // Prevenir comportamiento por defecto (ejemplo: enlace)

        // Cerrar otros submenús
        dropdowns.forEach(d => {
          if (d !== dropdown) {
            d.classList.remove("active");
          }
        });

        // Alternar el submenú actual
        dropdown.classList.toggle("active");
      }
    });
  });

  // Cerrar menú y submenús al hacer click fuera
  document.addEventListener("click", (e) => {
    const isClickInside = navMenu.contains(e.target) || hamburger.contains(e.target);
    if (!isClickInside) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      dropdowns.forEach(d => d.classList.remove("active"));
    }
  });
});