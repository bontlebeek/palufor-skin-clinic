/* Shared Part 3 interactions for Palufor Skin Clinic. */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-current-year]').forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  initServiceBrowser();
  initAccordions();
  initModal();
  initLightbox();
  initMap();
  initEnquiryForm();
  initContactForm();
  initScrollReveals();
});

const services = [
  { name: 'Clarifying Facial', category: 'skincare', description: 'Deep cleansing support for oily, congested or breakout-prone skin.', price: 320, duration: '60 minutes' },
  { name: 'Hydration Facial', category: 'skincare', description: 'A moisture-focused facial for dry, dull or tired-looking skin.', price: 350, duration: '60 minutes' },
  { name: 'Skin Consultation', category: 'skincare', description: 'A professional skin assessment with practical treatment and product guidance.', price: 560, duration: '45 minutes' },
  { name: 'Essential Waxing', category: 'grooming', description: 'Professional hair removal with attention to hygiene and skin comfort.', price: 180, duration: '30 minutes' },
  { name: 'Classic Pedicure', category: 'grooming', description: 'Nail and foot care for regular grooming and a refreshed finish.', price: 240, duration: '50 minutes' },
  { name: 'Relaxation Massage', category: 'wellness', description: 'A restorative massage designed to ease everyday tension and support relaxation.', price: 400, duration: '60 minutes' }
];

function initServiceBrowser() {
  const list = document.querySelector('#service-list');
  if (!list) return;
  const search = document.querySelector('#service-search');
  const category = document.querySelector('#category-filter');
  const sort = document.querySelector('#service-sort');
  const count = document.querySelector('#service-count');

  const render = () => {
    const query = search.value.trim().toLowerCase();
    const chosenCategory = category.value;
    const filtered = services
      .filter((service) => chosenCategory === 'all' || service.category === chosenCategory)
      .filter((service) => `${service.name} ${service.description}`.toLowerCase().includes(query))
      .sort((a, b) => {
        if (sort.value === 'price-low') return a.price - b.price;
        if (sort.value === 'price-high') return b.price - a.price;
        return a.name.localeCompare(b.name);
      });

    count.textContent = `${filtered.length} service${filtered.length === 1 ? '' : 's'} found`;
    list.replaceChildren(...filtered.map(createServiceCard));
    if (!filtered.length) {
      const empty = document.createElement('p');
      empty.className = 'card';
      empty.textContent = 'No services match those options. Try a different search or category.';
      list.append(empty);
    }
  };

  [search, category, sort].forEach((control) => control.addEventListener('input', render));
  render();
}

function createServiceCard(service) {
  const article = document.createElement('article');
  article.className = 'card service-card';
  const heading = document.createElement('h3');
  heading.textContent = service.name;
  const meta = document.createElement('p');
  meta.className = 'service-meta';
  meta.textContent = `${capitalise(service.category)} · ${service.duration}`;
  const description = document.createElement('p');
  description.textContent = service.description;
  const price = document.createElement('p');
  price.className = 'price';
  price.textContent = `From R${service.price}`;
  const link = document.createElement('a');
  link.href = `enquiry.html?service=${encodeURIComponent(service.name)}`;
  link.textContent = `Enquire about ${service.name}`;
  article.append(heading, meta, description, price, link);
  return article;
}

function capitalise(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function initAccordions() {
  document.querySelectorAll('.accordion button').forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      button.setAttribute('aria-expanded', String(!expanded));
      button.querySelector('span').textContent = expanded ? '+' : '−';
      panel.hidden = expanded;
    });
  });
}

function initModal() {
  const modal = document.querySelector('#guidance-modal');
  if (!modal) return;
  const opener = document.querySelector('[data-open-modal]');
  const closer = modal.querySelector('[data-close-modal]');
  opener.addEventListener('click', () => openDialog(modal, closer));
  closer.addEventListener('click', () => closeDialog(modal, opener));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeDialog(modal, opener);
  });
  modal.addEventListener('keydown', (event) => handleDialogKeys(event, modal, opener));
}

function initLightbox() {
  const lightbox = document.querySelector('#lightbox');
  if (!lightbox) return;
  const image = lightbox.querySelector('img');
  const closer = lightbox.querySelector('[data-close-lightbox]');
  let opener = null;
  document.querySelectorAll('[data-lightbox-src]').forEach((button) => {
    button.addEventListener('click', () => {
      opener = button;
      image.src = button.dataset.lightboxSrc;
      image.alt = button.dataset.lightboxAlt;
      openDialog(lightbox, closer);
    });
  });
  closer.addEventListener('click', () => closeDialog(lightbox, opener));
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeDialog(lightbox, opener);
  });
  lightbox.addEventListener('keydown', (event) => handleDialogKeys(event, lightbox, opener));
}

function openDialog(dialog, focusTarget) {
  dialog.hidden = false;
  document.body.style.overflow = 'hidden';
  focusTarget.focus();
}

function closeDialog(dialog, returnFocus) {
  dialog.hidden = true;
  document.body.style.overflow = '';
  if (returnFocus) returnFocus.focus();
}

function handleDialogKeys(event, dialog, returnFocus) {
  if (event.key === 'Escape') closeDialog(dialog, returnFocus);
  if (event.key !== 'Tab') return;
  const controls = [...dialog.querySelectorAll('a[href], button:not([disabled])')];
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

function initMap() {
  const mapElement = document.querySelector('#clinic-map');
  if (!mapElement || typeof window.L === 'undefined') return;
  const clinicCoordinates = [-26.1452, 28.0419];
  const map = L.map(mapElement, { scrollWheelZoom: false }).setView(clinicCoordinates, 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a>'
  }).addTo(map);
  L.marker(clinicCoordinates).addTo(map).bindPopup('<strong>Palufor Skin Clinic</strong><br>Provisional Rosebank location').openPopup();
}

function initEnquiryForm() {
  const form = document.querySelector('#enquiry-form');
  if (!form) return;
  const date = form.querySelector('#preferred-date');
  date.min = new Date().toISOString().split('T')[0];
  const requestedService = new URLSearchParams(window.location.search).get('service');
  if (requestedService && [...form.querySelector('#preferred-service').options].some((option) => option.value === requestedService)) {
    form.querySelector('#preferred-service').value = requestedService;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validateForm(form)) return;
    const response = form.querySelector('#enquiry-response');
    const name = form.querySelector('#full-name').value.trim().split(' ')[0];
    const service = form.querySelector('#preferred-service').value;
    response.innerHTML = `<strong>Thank you, ${escapeHtml(name)}.</strong> Your ${escapeHtml(service.toLowerCase())} enquiry is ready for review. Estimated availability is normally confirmed within two business days. This prototype has not sent data to a server.`;
    response.hidden = false;
    response.focus();
    form.reset();
    date.min = new Date().toISOString().split('T')[0];
  });
  attachLiveValidation(form);
}

function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validateForm(form)) return;
    const values = new FormData(form);
    const subject = `[${values.get('message_type')}] ${values.get('subject')}`;
    const body = `Name: ${values.get('full_name')}\nEmail: ${values.get('email')}\nPhone: ${values.get('phone') || 'Not provided'}\n\n${values.get('message')}`;
    const mailto = `mailto:info@paluforskinclinic.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const response = form.querySelector('#contact-response');
    response.replaceChildren(document.createTextNode('Your message is ready. '));
    const link = document.createElement('a');
    link.href = mailto;
    link.textContent = 'Open your email application to send it.';
    response.append(link);
    response.hidden = false;
    response.focus();
  });
  attachLiveValidation(form);
}

function attachLiveValidation(form) {
  form.querySelectorAll('input, select, textarea').forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    });
  });
}

function validateForm(form) {
  const fields = [...form.querySelectorAll('input, select, textarea')];
  const valid = fields.map(validateField).every(Boolean);
  if (!valid) fields.find((field) => !field.validity.valid)?.focus();
  return valid;
}

function validateField(field) {
  const error = document.querySelector(`#${field.id}-error`);
  if (!error) return field.validity.valid;
  let message = '';
  if (field.validity.valueMissing) message = 'Please complete this field.';
  else if (field.validity.typeMismatch) message = 'Please enter a valid email address.';
  else if (field.validity.patternMismatch) message = 'Please enter a valid phone number (10–20 characters).';
  else if (field.validity.tooShort) message = `Please use at least ${field.minLength} characters.`;
  else if (field.validity.tooLong) message = `Please use no more than ${field.maxLength} characters.`;
  field.setAttribute('aria-invalid', String(Boolean(message)));
  field.setAttribute('aria-describedby', error.id);
  error.textContent = message;
  return !message;
}

function escapeHtml(value) {
  const element = document.createElement('span');
  element.textContent = value;
  return element.innerHTML;
}

function initScrollReveals() {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sections = document.querySelectorAll('main > .section');
  sections.forEach((section) => section.classList.add('reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  sections.forEach((section) => observer.observe(section));
}

