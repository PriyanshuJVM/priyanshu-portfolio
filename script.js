// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Scroll-triggered animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.animate-fade-up, .animate-slide-in, .animate-zoom-in')
  .forEach(el => observer.observe(el));

// Loader screen removal
window.addEventListener('load', () => {
  document.querySelector('.loader-wrapper').style.display = 'none';
});
