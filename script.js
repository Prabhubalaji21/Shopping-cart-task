function addToCart(id) {
    // code to add the product to the cart

    // after adding the product, disable the add to cart button
    document.getElementById("addToCartButton" + id).disabled = true;
}

function removeFromCart(id) {
    // code to remove the product from the cart

    // after removing the product, enable the add to cart button
    document.getElementById("addToCartButton" + id).disabled = false;
}
function addToCart(productId) {
    if (!productsInCart.includes(productId)) {
        productsInCart.push(productId);
        updateAddToCartButton(productId, true);
    }
}
function updateAddToCartButton(productId, enabled) {
    let button = document.getElementById("addToCartButton" + productId);
    button.disabled = !enabled;
    button.innerHTML = enabled ? "Add to cart" : "In cart";
}
function initializeAddToCartButtonState() {
    for (let i = 0; i < numberOfProducts; i++) {
        updateAddToCartButton(i + 1, !productsInCart.includes(i + 1));
    }
}
function displayCartItems() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    for (let i = 0; i < productsInCart.length; i++) {
        let productId = productsInCart[i];
        let productName = "Product " + productId; // Replace with actual product name
        let productElement = document.createElement("p");
        productElement.textContent = productName;
        cartItems.appendChild(productElement);
    }
}
function initializeCartItems() {
    displayCartItems();
}
function displayCartItems(cartItems) {
    let cartItemsElement = document.getElementById("cartItems");
    cartItemsElement.innerHTML = "";

    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];
        let cartItemElement = document.createElement("p");
        cartItemElement.textContent = cartItem.name; // Replace with actual cart item name or description
        cartItemsElement.appendChild(cartItemElement);
    }
}
function calculateCartTotal(cartItems) {
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];
        total += cartItem.price; // Replace with actual cart item price
    }

    return total;
}
function removeProductFromCart(product, cartItems) {
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];

        if (cartItem.id === product.id) { // Replace with actual cart item and product comparison
            cartItems.splice(i, 1); // Remove the cart item
            break;
        }
    }

    return cartItems;
}

function displayRating(productId, rating) {
    var stars = document.getElementById("stars" + productId);
    var ratingContainer = document.getElementById("rating" + productId);

    // Set the number of stars to fill based on the rating
    var numFilledStars = Math.floor(rating);

    // Set the number of empty stars
    var numEmptyStars = 5 - numFilledStars;

    // Clear the previous stars
    stars.innerHTML = "";

    // Fill the stars with filled and empty stars
    for (var i = 0; i < numFilledStars; i++) {
        stars.innerHTML += "<i class='fas fa-star'></i>";
    }
    for (var i = 0; i < numEmptyStars; i++) {
        stars.innerHTML += "<i class='far fa-star'></i>";
    }

    // Display the rating in the container
    ratingContainer.innerHTML = rating;
}