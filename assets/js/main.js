// ===================================
// Judô Kaminari - JavaScript Principal
// ===================================

// Menu Mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Smooth scroll para seções
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Adicionar listeners aos botões de navegação
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = btn.getAttribute('data-scroll');
    scrollToSection(sectionId);
  });
});

// Animação de fade-in ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplicar observador aos elementos com classe 'fade-in'
document.querySelectorAll('.fade-in').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Abrir links externos em nova aba
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.setAttribute('rel', 'noopener noreferrer');
});

// Analytics básico (opcional)
function trackEvent(eventName, eventData = {}) {
  if (window.gtag) {
    gtag('event', eventName, eventData);
  }
}

// Rastrear cliques em botões CTA
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-instagram').forEach(btn => {
  btn.addEventListener('click', () => {
    const btnText = btn.textContent.trim();
    trackEvent('button_click', {
      button_name: btnText
    });
  });
});

// Rastrear cliques em links de redes sociais
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('click', () => {
    const href = link.getAttribute('href');
    trackEvent('social_click', {
      social_platform: href
    });
  });
});

// Log de carregamento da página
console.log('Judô Kaminari - Site carregado com sucesso');
console.log('Versão: 1.0');
