// Obtiene la ruta base del sitio
const basePath = window.location.pathname.split('/').slice(0, -1).join('/');

// Construye la ruta completa al nav.html
const navPath = `${basePath}/nav.html`;

// Carga el nav.html
fetch(navPath)
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
          window.location.href = `${basePath}/index.html`;
        };
      }

      if (menuModulos) {
        menuModulos.style.display = "flex";
      }
    }
  });
