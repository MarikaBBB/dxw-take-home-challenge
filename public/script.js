document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const suggestionsList = document.getElementById('suggestions-list');
    const resultDiv = document.getElementById('result');

    // Store acronyms data
    let acronyms = {};

    // Fetch acronyms data from the server
    fetch('http://127.0.0.1:5001/api/acronyms')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            acronyms = data;
            console.log(acronyms);  // Log the acronyms to ensure data is fetched correctly
        })
        .catch(error => {
            console.error('Error fetching acronyms:', error);
            resultDiv.textContent = 'Error loading acronyms. Please try again later.';
        });

    // Debounce function to limit the rate at which a function is executed
    function debounce(func, delay) {
        let timeoutId;  // Keep track of the timeout

        return function() {
            clearTimeout(timeoutId);  // Clears any previously set timeout
            timeoutId = setTimeout(func, delay);  // Sets a new timeout
        };
    }

    // Function to filter and show suggestions based on user input
    const showSuggestions = debounce(() => {
        const query = searchInput.value.toUpperCase();
        suggestionsList.innerHTML = '';  // Clear previous suggestions
        if (query.length > 0) {
            const suggestions = Object.keys(acronyms).filter(acronym => acronym.includes(query));
            suggestions.forEach(suggestion => {
                const li = document.createElement('li');
                li.textContent = suggestion;
                li.setAttribute('role', 'option');
                li.addEventListener('click', () => {
                    searchInput.value = suggestion;
                    showResult(suggestion);  // Show result for the selected suggestion
                    suggestionsList.innerHTML = '';  // Clear suggestions after selection
                });
                suggestionsList.appendChild(li);
            });
        }
    }, 300);

    // Add event listener for input with debounce
    searchInput.addEventListener('input', showSuggestions);

    // Function to display the result for a searched acronym
    function showResult(query) {
        query = query.toUpperCase();
        if (acronyms[query]) {
            resultDiv.textContent = `The organisation for ${query} is ${acronyms[query]}`;
        } else {
            resultDiv.textContent = 'No matching organisation found.';
        }
    }

    // Handle Enter key press to show result
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            showResult(searchInput.value);
        }
    });

    // Handle Search button click to show result
    searchButton.addEventListener('click', () => {
        showResult(searchInput.value);
    });

    // Add accessibility attributes to ensure a better user experience
    searchInput.setAttribute('aria-label', 'Search for UK Government acronyms');
    searchInput.setAttribute('aria-autocomplete', 'list');
    searchInput.setAttribute('aria-controls', 'suggestions-list');
    suggestionsList.setAttribute('role', 'listbox');
    resultDiv.setAttribute('aria-live', 'polite');
});
