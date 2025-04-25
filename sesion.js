// Detecta si estás en GitHub Pages y define ruta base
let basePath = window.location.hostname.includes("github.io")
  ? "/EstiloUnico" // <- Cambiar si tu repo se llama diferente
  : "";

// Carga dinámica del nav.html
fetch(`${basePath}/nav.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

    // Espera a que el DOM renderice el nav cargado
    requestAnimationFrame(() => {
      const toggle = document.getElementById("menu-toggle");
      const nav = document.getElementById("main-nav");

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
        });
      }

      // Control de sesión
      const usuario = localStorage.getItem("usuario");
      const loginText = document.getElementById("login-text");
      const menuModulos = document.getElementById("menu-modulos");

      if (usuario) {
        if (loginText) {
          loginText.textContent = "Cerrar sesión";
          loginText.href = "#";
          loginText.onclick = (e) => {
            e.preventDefault();
            localStorage.removeItem("usuario");
            window.location.href = `${basePath}/index.html`;
          };
        }

        if (menuModulos) {
          menuModulos.style.display = "flex";
        }
      }
    });
  });
