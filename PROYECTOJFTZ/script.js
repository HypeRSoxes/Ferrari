document.addEventListener('DOMContentLoaded', function() {
    
    const formContacto = document.getElementById('form-contacto');
    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const mensaje = this.querySelector('textarea').value;
            
            
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te contactaremos en ${email} pronto.`);
            
            
            this.reset();
        });
    }
    
    
    const enlacesNav = document.querySelectorAll('nav a');
    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            const destinoId = this.getAttribute('href');
            const destinoElemento = document.querySelector(destinoId);
            
            if (destinoElemento) {
                window.scrollTo({
                    top: destinoElemento.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#cc0000';
        } else {
            header.style.backgroundColor = '#ff0000';
        }
    });
    
    const modelos = document.querySelectorAll('.modelo');
    modelos.forEach(modelo => {
        modelo.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        modelo.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    console.log('¡Bienvenido a la página de Ferrari!');
    console.log('Todos los enlaces te llevarán a la página oficial de Ferrari.');

});
