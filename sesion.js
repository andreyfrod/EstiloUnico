fetch('/EstiloUnico/nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;

    // 👇 Este código ya sí se ejecuta porque está dentro del fetch
    setTimeout(() => {
      const toggle = document.getElementById('menu-toggle');
      const nav = document.getElementById('main-nav');

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('open');
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
            window.location.href = "/EstiloUnico/index.html";
          };
        }

        if (menuModulos) {
          menuModulos.style.display = "flex";
        }
      }
    }, 50);
  });
