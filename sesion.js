// Detecta si estás en GitHub Pages y arma la ruta base automáticamente
let base = window.location.hostname.includes("github.io")
  ? "/EstiloUnico" // <--- nombre exacto del repo
  : "";

fetch(`${base}/nav.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;

    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }

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
          window.location.href = `${base}/index.html`;
        };
      }

      if (menuModulos) {
        menuModulos.style.display = "flex";
      }
    }
  });
