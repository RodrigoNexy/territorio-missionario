document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.principal-menu');

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('ativado');
});