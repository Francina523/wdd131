document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 'fc-1888',
            name: "flux capacitor",
            avgRating: 4.5
        },
        {
            id: 'fc-2050',
            name: "power laces",
            avgRating: 4.7
        },
        {
            id: 'fs-1987',
            name: "time circuits",
            avgRating: 3.5
        },
        {
            id: 'ac-2000',
            name: "low voltage reactor",
            avgRating: 3.9
        },
        {
            id: 'jj-1969',
            name: "warp equalizer",
            avgRating: 5.0
        }
    ];

    const productSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Increment the review counter in localStorage
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);

        // Redirect to the confirmation page
        window.location.href = 'review.html';
    });

     // Update current year in footer
     const currentYearElement = document.getElementById('copyright-year');
     currentYearElement.textContent = new Date().getFullYear();
 
     // Update last modified date in footer
     const lastModifiedElement = document.getElementById('lastModified');
     lastModifiedElement.textContent = 'Last modified: ' + document.lastModified;
 });
 





