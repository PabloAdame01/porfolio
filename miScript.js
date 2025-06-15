$(document).ready(function () {
  // Al cargar la página, aplicar el modo oscuro si está guardado
  if (localStorage.getItem('darkMode') === 'true') {
    $('html').addClass('dark');
  } else {
    $('html').removeClass('dark');
  }

  // Al hacer clic en el botón, alternar y guardar en localStorage
  $('#toggleDark').on('click', function () {
    $('html').toggleClass('dark');
    let darkModeActive = $('html').hasClass('dark');
    localStorage.setItem('darkMode', darkModeActive ? 'true' : 'false');
  });

  // Configuración de Tailwind
  tailwind.config = {
    darkMode: 'class',
  };
});
