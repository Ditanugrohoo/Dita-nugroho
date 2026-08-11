document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// Contact form via Formspree
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  note.textContent = 'Sending...';
  try {
    const response = await fetch(form.action, {
      method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      note.textContent = 'Message sent! Thanks for reaching out.';
      form.reset();
    } else {
      note.textContent = 'Something went wrong. Please try again or email me directly.';
    }
  } catch (error) {
    note.textContent = 'Something went wrong. Please try again or email me directly.';
  }
});
