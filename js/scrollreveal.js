window.sr = ScrollReveal();
sr.reveal('.navbar',{
    duration: 3000,
    origin: 'bottom'
});
sr.reveal('.carrusel-top',{
    duration: 3000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.carrusel-iconos',{
    duration: 3000,
    origin: 'right',
    distance: '300px',
    mobile:false
});
sr.reveal('.slider-texto',{
    duration: 3000,
    origin: 'bottom',
    delay: 500
});
sr.reveal('#testimonial',{
    duration: 3000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});

//smoth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});