AOS.init({
    duration: 1000,
    once: true
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
} else {
    body.classList.remove('light-mode');
    themeToggle.classList.remove('fa-sun');
    themeToggle.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-mode');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }
});