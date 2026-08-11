document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Form kontak: GitHub Pages tidak punya backend, jadi form ini membuka
// email client dengan isi pesan sudah terisi. Untuk form yang terkirim
// otomatis tanpa buka email, daftar gratis di https://formspree.io
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  const subject = encodeURIComponent(`Pesan dari ${name} lewat portofolio`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

  window.location.href = `mailto:email@kamu.com?subject=${subject}&body=${body}`;
  note.textContent = 'Membuka aplikasi email kamu...';
});
