let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');

    themeToggle.classList.add('rotating');
    body.classList.toggle('dark-mode');

    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';

    setTimeout(() => {
        themeToggle.classList.remove('rotating');
    }, 500);
}

/* ===== FIXED SMOOTH SCROLL FOR MOBILE ===== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition =
            target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 10;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
