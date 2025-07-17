const toggleButton = document.getElementById('toggle-dark');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  document.querySelectorAll('header, section h2, ul li, footer').forEach(el => {
    el.classList.toggle('dark-mode');
  });
});
