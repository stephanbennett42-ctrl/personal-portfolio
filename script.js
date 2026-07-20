const heroSection = document.querySelector('.hero');
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');

// Only run the observer if the hero section exists on the page
if (heroSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                orb1.style.animation = 'none';
                orb2.style.animation = 'none';
                orb1.offsetHeight; 
                orb2.offsetHeight;
                orb1.style.animation = 'moveOrb1 1.5s ease-out forwards';
                orb2.style.animation = 'moveOrb2 1.5s ease-out forwards';
            }
        });
    }, { threshold: 0.5 });

    observer.observe(heroSection);
}