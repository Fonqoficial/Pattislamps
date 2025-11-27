document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger') || document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');

    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Exponer funciones que se llaman desde atributos HTML (onsubmit, onclick, etc.)
    window.contactProduct = function(product) {
        window.open(`https://wa.me/34600123456?text=Hola, quiero más información sobre ${encodeURIComponent(product)}.`, '_blank');
    };

    window.sendForm = function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Te responderemos pronto.');
        if (e.target && typeof e.target.reset === 'function') e.target.reset();
    };

    window.openCollection = function(collection) {
        switch(collection) {
            case 'formas':
                window.location.href = 'formas.html';
                break;
            case 'metalica':
                window.location.href = 'metalica.html';
                break;
            case 'papel':
                window.location.href = 'papel.html';
                break;
        }
    };

    // Scroll suave al pulsar SHOP NOW (busca por id o por clase; evita errores si no existe)
    const shopNowBtn = document.getElementById('shopNowBtn') || document.querySelector('.btn-shop-now');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector('.product-categories') || document.querySelector('.categories-banner') || document.getElementById('productos');
            if (!target) return;
            const topOffset = target.offsetTop;

            window.scrollTo({
                top: topOffset - 50,
                behavior: 'smooth'
            });
        });
    }
});

