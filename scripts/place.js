document.addEventListener('DOMContentLoaded', function() {
    // Calculate and display wind chill factor
    const temperature = 20; // Static temperature in Celsius
    const windSpeed = 10; // Static wind speed in km/h

    const windChillElement = document.getElementById('wind-chill');

    // Function to calculate wind chill factor
    function calculateWindChill(temperature, windSpeed) {
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
            return windChill.toFixed(1) + '°C';
        } else {
            return 'N/A';
        }
    }

    // Display wind chill factor on the page
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);

    // Update current year in footer
    const currentYearElement = document.getElementById('copyright-year');
    currentYearElement.textContent = new Date().getFullYear();

    // Update last modified date in footer
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = 'Last modified: ' + document.lastModified;
});
