(function () {
    'use strict';

    const toggleButton = document.querySelector('.menu-toggle');
  const overlayMenu = document.querySelector('.menu-overlay');

  toggleButton.addEventListener('click', () => {
    overlayMenu.classList.toggle('active');
  });

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    overlayMenu.classList.remove('active');
  });
});



})();