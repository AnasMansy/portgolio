// Smooth scroll for in-page navigation
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// EmailJS contact handling
(function initEmail() {
  if (typeof emailjs === 'undefined') return;
  emailjs.init('TgwopmajhVuy6JelE');
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    emailjs
      .send('service_kclhxas', 'template_qfiedd1', {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message'),
      })
      .then(() => {
        alert('Message sent successfully! Thank you.');
        form.reset();
      })
      .catch(() => {
        alert('Failed to send message. Please try again later.');
      });
  });
})();
