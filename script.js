// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Simple animation on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Add fade-in animation with CSS
  const style = document.createElement('style');
  style.innerHTML = `
    .fade-in {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 1s ease-out, transform 1s ease-out;
    }
    section {
      opacity: 0;
      transform: translateY(50px);
    }
  `;
  document.head.appendChild(style);
  