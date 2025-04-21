// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Search Function
function searchCountry() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let countries = document.querySelectorAll('.country');

    countries.forEach(country => {
        let countryName = country.querySelector('h3').innerText.toLowerCase();
        if (countryName.includes(input)) {
            country.style.display = 'block';
        } else {
            country.style.display = 'none';
        }
    });
}
