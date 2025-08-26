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

    // Function to fetch a random quote from a new API
    const fetchRandomQuote = async () => {
    try {
        const response = await fetch('https://type.fit/api/quotes', { mode: 'no-cors' });
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        document.getElementById('quote-text').textContent = `"${randomQuote.text}"`;
        document.getElementById('quote-author').textContent = `- ${randomQuote.author || 'Unknown'}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quote-text').textContent = 'Could not load quote.';
        document.getElementById('quote-author').textContent = '';
    }
};

    // Function to fetch a random fun fact
    const fetchFunFact = async () => {
        try {
            const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
            const data = await response.json();
            document.getElementById('fact-text').textContent = data.text;
        } catch (error) {
            console.error('Error fetching fun fact:', error);
            document.getElementById('fact-text').textContent = 'Could not load fun fact.';
        }
    };

    // Call the functions when the page loads
    fetchRandomQuote();
    fetchFunFact();

    // Initialize AOS library
    AOS.init({
        duration: 1000,
        once: true
    });
});