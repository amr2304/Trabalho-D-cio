// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      if (e.target.classList.contains('solution__panel')) {
        const bar = e.target.querySelector('.panel-bar__fill');
        if (bar) bar.classList.add('go');
      }
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
// Smooth header shadow on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 10px 30px -20px rgba(0,0,0,0.6)' : 'none';
});
