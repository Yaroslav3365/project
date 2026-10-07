export function initRouter() {
  const handleHashChange = () => {
    const hash = window.location.hash || '#dashboard';
    
    document.querySelectorAll('.page-section').forEach(section => {
      section.classList.remove('active');
    });
    
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      targetSection.classList.add('active');
    } else {
      document.querySelector('#dashboard')?.classList.add('active');
    }

    // Update sidebar active state
    document.querySelectorAll('.nav-item').forEach(nav => {
      nav.classList.remove('active');
      if (nav.getAttribute('href') === hash) {
        nav.classList.add('active');
      }
    });
  };

  window.addEventListener('hashchange', handleHashChange);
  
  // Trigger on load
  if (!window.location.hash) {
    window.location.hash = '#dashboard';
  } else {
    handleHashChange();
  }
}
