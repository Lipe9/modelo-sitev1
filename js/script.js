const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.li1 a, .li2 a, .menu-mobile a');
const navMenu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
    let current = '';
    let isLightSection = false;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
            if (section.getAttribute('data-cor') === 'clara') {
                isLightSection = true;
            } else {
                isLightSection = false;
            }
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current) && current !== '') {
            link.classList.add('active');
        }
    });
    if (isLightSection) {
        navMenu.classList.add('menu-texto-escuro');
    } else {
        navMenu.classList.remove('menu-texto-escuro');
    }
});