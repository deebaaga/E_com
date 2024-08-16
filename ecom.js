// 1. Fetch product data from the DummyJSON API
function fetchProducts() {
  // 2. Use the fetch() function to get data from the DummyJSON API
  fetch("https://dummyjson.com/products")
    .then(function (response) {
      // 3. Convert the response to JSON
      return response.json();
    })
    .then(function (data) {
      // 4. The products are in the "products" property of the response
      displayProducts(data.products);
    })
    .catch(function (error) {
      // 5. Log any errors that occur
      console.error("Error fetching products:", error);
    });
}

// 6. Function to display products on the page
function displayProducts(products) {
  const productList = document.getElementById("products");

  const conversionRate = 83.0;
  // 7. Loop through each product and create HTML to display it
  products.forEach(function (product) {
    const priceInINR = (product.price * conversionRate).toFixed(2);
    // 8. Create a new div element for the product
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // 9. Set the inner HTML of the product card
    productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>₹${priceInINR}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

    // 10. Add the product card to the product list in the HTML
    productList.appendChild(productCard);
  });
}

// 11. Initialize an empty cart array
let cart = [];

// 12. Function to add a product to the cart
function addToCart(productId) {
  // 13. Add the product to the cart array
  cart.push(productId);
  // 14. Update the cart count in the HTML
  document.getElementById("cart-count").innerText = cart.length;
}

// 15. Call the function to fetch and display products when the page loads
fetchProducts();
