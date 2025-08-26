document.addEventListener('DOMContentLoaded', () => {

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeToggle) {
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
        }
    } else {
        body.classList.remove('light-mode');
        if (themeToggle) {
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
        }
    }

    if (themeToggle) {
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
    }

    // Function to fetch a random programming quote
const fetchFunFact = async () => {
    try {
        const response = await fetch('https://zenquotes.io/api/random');
        const data = await response.json();
        
        // Update the fun fact text with the quote from the new API
        document.getElementById('fact-text').textContent = `"${data[0].q}"`;
        
        // Update the author text
        document.getElementById('fact-author').textContent = `- ${data[0].a}`;
    } catch (error) {
        console.error('Error fetching programming quote:', error);
        document.getElementById('fact-text').textContent = 'Could not load a programming quote.';
        document.getElementById('fact-author').textContent = '';
    }
};

    // Call the fun fact function when the page loads
    fetchFunFact();

    // Initialize AOS library
    AOS.init({
        duration: 1000,
        once: true
    });
});