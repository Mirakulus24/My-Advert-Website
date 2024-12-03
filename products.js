// 1. Product Search Functionality
const productSearchBar = document.getElementById('productSearchBar');
const productCards = document.querySelectorAll('.product-card');

// Filter products based on search query
productSearchBar.addEventListener('input', function() {
    const searchQuery = productSearchBar.value.toLowerCase();
    
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 2. Category Filter Functionality
const categoryFilter = document.getElementById('categoryFilter');

categoryFilter.addEventListener('change', function() {
    const selectedCategory = categoryFilter.value;

    productCards.forEach(card => {
        if (selectedCategory === 'all' || card.classList.contains(selectedCategory)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 3. Customer Review Section
function submitReview() {
    const reviewText = document.getElementById('review-text').value;
    const reviewsSection = document.getElementById('reviews');

    if (reviewText) {
        const newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.textContent = reviewText;
        reviewsSection.appendChild(newReview);
        
        // Clear the textarea after submitting
        document.getElementById('review-text').value = '';
    } else {
        alert('Please write a review before submitting.');
    }
}

// 4. Carousel Functionality for Product Images
const carouselImages = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Function to update the carousel image
function updateCarousel() {
    carouselImages.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Show the previous image
prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.length - 1;
    updateCarousel();
});

// Show the next image
nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex < carouselImages.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Initialize carousel on page load
updateCarousel();

// 5. Related Products Section
const relatedProducts = [
    { name: 'Smartwatch', image: 'related1.jpg', link: 'smartwatch.html' },
    { name: 'Bluetooth Speaker', image: 'related2.jpg', link: 'bluetooth-speaker.html' },
    { name: 'Camera', image: 'related3.jpg', link: 'http://Amazon/camera.com' },
    { name: 'Sneaker', image: 'related4.jpg', link: 'http://sneakers for men.com' }
];

const relatedProductsList = document.getElementById('related-products-list');

// Display related products
relatedProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('related-product');
    
    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.name;
    
    const productLink = document.createElement('a');
    productLink.href = product.link;
    productLink.textContent = product.name;

    productDiv.appendChild(productImg);
    productDiv.appendChild(productLink);
    relatedProductsList.appendChild(productDiv);
});
