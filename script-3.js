document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Form kontak dikirim ke Formspree (https://formspree.io) supaya masuk
// langsung ke email tanpa perlu buka aplikasi email pengunjung.
// PENTING: pesan pertama yang masuk akan memicu email verifikasi dari
// Formspree ke ditanugroho.id@gmail.com — klik link konfirmasinya sekali,
// setelah itu semua pesan berikutnya otomatis masuk ke inbox.
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  note.textContent = 'Mengirim...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      note.textContent = 'Pesan terkirim! Terima kasih sudah menghubungi.';
      form.reset();
    } else {
      note.textContent = 'Gagal mengirim. Coba lagi atau hubungi lewat email langsung.';
    }
  } catch (error) {
    note.textContent = 'Gagal mengirim. Coba lagi atau hubungi lewat email langsung.';
  }
});
