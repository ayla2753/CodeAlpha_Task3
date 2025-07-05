// Fade in sections on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});
