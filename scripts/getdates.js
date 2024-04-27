// Wait for the DOM to fully load before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Get the last modified date of the HTML document
    const lastModified = document.lastModified;

    // Find the element with the ID "lastModified" in the footer
    const lastModifiedElement = document.getElementById('lastModified');

    // Update the text content of the element with the last modified date
    lastModifiedElement.textContent += lastModified;
});

