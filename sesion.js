// ✅ Ruta dinámica para encontrar nav.html sin importar la estructura
const rutaNav = `${window.location.origin}/EstiloUnico/nav.html`; // Cambiá 'EstiloUnico' si tu repo se llama diferente

// Carga del nav y sesión
fetch(rutaNav)
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;

    // Menú hamburguesa
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }

    // Lógica de sesión
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
          window.location.href = "index.html";
        };
      }

      if (menuModulos) {
        menuModulos.style.display = "flex";
      }
    }
  });
