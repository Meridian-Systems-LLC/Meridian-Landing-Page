document.getElementById('year').textContent = new Date().getFullYear();

// Sticky header shadow on scroll
const header = document.getElementById('siteHeader');
const toTopBtn = document.getElementById('toTop');
const onScroll = () => {
  const scrolled = window.scrollY > 12;
  header.classList.toggle('scrolled', scrolled);
  toTopBtn.classList.toggle('visible', window.scrollY > 480);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-reveal animation
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in-view'));
}

// Estimate form -> mailto submission
const CONTACT_EMAIL = 'asilaghi@meridiandatacom.com';
const form = document.getElementById('estimateForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone') || 'Not provided';
  const service = data.get('service');
  const details = data.get('details') || 'None provided';

  const subject = `Estimate Request from ${name}`;
  const body =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Service Needed: ${service}\n\n` +
    `Project Details:\n${details}`;

  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
