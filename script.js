
document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission with Formspree
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitButton = contactForm.querySelector('.form-submit');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Let Formspree handle the submission, but provide visual feedback
            setTimeout(() => {
                // Reset button after submission attempt
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
        
        // Handle success/error states from URL parameters (Formspree redirects)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            // Clear the URL parameters
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
    
    // Handle zoom buttons
    const zoomButtons = document.querySelectorAll('.zoom-btn');
    zoomButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Simulate zoom functionality
            const mapPlaceholder = document.querySelector('.map-placeholder');
            if (this.textContent === '+') {
                console.log('Zoom in');
                mapPlaceholder.style.transform = 'scale(1.1)';
            } else {
                console.log('Zoom out');
                mapPlaceholder.style.transform = 'scale(0.9)';
            }
            
            // Reset transform after animation
            setTimeout(() => {
                mapPlaceholder.style.transform = 'scale(1)';
            }, 300);
        });
    });
    
    // Handle map links
    const mapLinks = document.querySelectorAll('.map-link');
    mapLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.textContent.includes('Rotas')) {
                alert('Redirecionando para o Google Maps para ver rotas...');
            } else if (this.textContent.includes('ampliado')) {
                alert('Abrindo mapa ampliado...');
            }
        });
    });
    
    // Form validation
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ff4444';
                } else {
                    field.style.borderColor = '#ddd';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
});
