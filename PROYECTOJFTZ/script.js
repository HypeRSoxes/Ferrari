// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Función para el formulario de contacto
    const formContacto = document.getElementById('form-contacto');
    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault(); // Evitar envío real del formulario
            
            // Obtener valores del formulario
            const nombre = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const mensaje = this.querySelector('textarea').value;
            
            // Simular envío (en un caso real aquí se enviaría a un servidor)
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te contactaremos en ${email} pronto.`);
            
            // Limpiar formulario
            this.reset();
        });
    }
    
    // Efecto de scroll suave para los enlaces de navegación
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
    
    // Cambiar color de fondo del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#cc0000';
        } else {
            header.style.backgroundColor = '#ff0000';
        }
    });
    
    // Efecto hover para los modelos
    const modelos = document.querySelectorAll('.modelo');
    modelos.forEach(modelo => {
        modelo.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        modelo.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Mensaje de bienvenida
    console.log('¡Bienvenido a la página de Ferrari!');
    console.log('Todos los enlaces te llevarán a la página oficial de Ferrari.');
});