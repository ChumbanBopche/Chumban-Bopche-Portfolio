document.addEventListener('DOMContentLoaded', () => {
    // Select the preloader and body elements
    const preloader = document.getElementById('preloader');
    const body = document.body;

    // Wait for 3 seconds before hiding the preloader
    setTimeout(() => {
        // Add a class to fade out the preloader
        preloader.classList.add('fade-out');

        // After the fade-out transition is complete, remove the preloader and show the content
        preloader.addEventListener('transitionend', () => {
            preloader.style.display = 'none'; // Hide the preloader completely
            body.classList.remove('hidden'); // Allow scrolling and show content
            body.classList.add('fade-in'); // Fade in the main content

            // Initialize AOS after content is visible
            AOS.init({
                duration: 1000,
                once: true
            });
        }, { once: true });
    }, 3000); // 1 seconds timeout

    // Theme Toggle (existing logic)
    const themeToggle = document.getElementById('input');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeToggle) {
            themeToggle.checked = false;
        }
    } else {
        body.classList.remove('light-mode');
        if (themeToggle) {
            themeToggle.checked = true;
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});