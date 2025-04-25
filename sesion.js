// Carga de navegación y manejo de sesión
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;

    // Espera breve para que se inserte bien el HTML antes de manipular
    setTimeout(() => {
      const usuario = localStorage.getItem("usuario");
      const loginText = document.getElementById("login-text");
      const registro = document.getElementById("registro-link");
      const modulos = document.getElementById("menu-modulos");

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

        if (modulos) {
          modulos.style.display = "flex";
        }

        if (registro) {
          registro.style.display = "inline-block";
        }
      }

      // Menú hamburguesa para móviles
      const toggle = document.getElementById('menu-toggle');
      const nav = document.getElementById('main-nav');
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('open');
        });
      }
    }, 50);
  });
