$(document).ready(function() {
  $('#toggleDark').on('click', function() {
    $('html').toggleClass('dark');
  });

  tailwind.config = {
            darkMode: 'class',
        }
});
