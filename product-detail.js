// product-detail.js

// Function to extract URL parameters
function getProductParameter() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('product');  // Extracts the 'product' parameter
}

// Simulated product data (This would usually come from a database or API)
const products = {
    product1: {
        name: "Smartphone",
        image: "product1.jpg",
        description: "A high-end smartphone with an amazing camera.",
        price: "$599",
        category: "Electronics"
    },
    product2: {
        name: "Laptop",
        image: "product2.jpg",
        description: "A powerful laptop for work and play.",
        price: "$899",
        category: "Electronics"
    },
    // Add more products as needed
};

// Function to display product details based on the product parameter
function displayProductDetails(productId) {
    const product = products[productId];
    if (product) {
        document.getElementById("product-detail").querySelector("h1").textContent = product.name;
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-category").textContent = product.category;
    } else {
        document.getElementById("product-detail").innerHTML = "<p>Product not found</p>";
    }
}

// Get the product from the URL parameter and display its details
const productId = getProductParameter();
displayProductDetails(productId);
