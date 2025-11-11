const header = document.getElementById('header');
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        function contactProduct(product) {
            window.open(`https://wa.me/34600123456?text=Hola, quiero más información sobre ${encodeURIComponent(product)}.`, '_blank');
        }

        function sendForm(e) {
            e.preventDefault();
            alert('Gracias por tu mensaje. Te responderemos pronto.');
            e.target.reset();
        }
function openCollection(collection) {
    // Redirige a la página correspondiente
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
}

// Scroll suave al pulsar SHOP NOW
document.getElementById('shopNowBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('.product-categories');
    const topOffset = target.offsetTop;

    window.scrollTo({
        top: topOffset - 50,
        behavior: 'smooth'
    });
});

