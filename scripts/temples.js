// Function to update footer copyright year and last modified date
function updateFooter() {
    // Get current year
    const currentYear = new Date().getFullYear();
    // Update copyright year in footer
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        copyrightElement.textContent = `&copy; ${currentYear} Your Name`;
    }

    // Get last modified date of the document
    const lastModifiedDate = document.lastModified;
    // Update last modified date in footer
    const modifiedElement = document.getElementById('lastModified');
    if (modifiedElement) {
        modifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
    }
}

// Function to toggle mobile navigation menu
function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    if (navMenu) {
        navMenu.classList.toggle('show');
    }
}

// Event listener for hamburger menu button
const hamburgerButton = document.getElementById('hamburger');
if (hamburgerButton) {
    hamburgerButton.addEventListener('click', toggleMenu);
}

// Call updateFooter function when the document is loaded
document.addEventListener('DOMContentLoaded', updateFooter);
