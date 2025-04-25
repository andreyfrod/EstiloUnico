fetch('/EstiloUnico/nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;

    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    const usuario = localStorage.getItem("usuario");

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
      });
    }

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

      // Si hay sesión, se muestran los módulos
    if (menuModulos) {
    menuModulos.classList.remove("hidden");
    menuModulos.style.display = "flex";
  }
} else {
  if (menuModulos) {
    menuModulos.classList.add("hidden");
    menuModulos.style.display = "none";
  }
}
  });
