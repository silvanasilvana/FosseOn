// cart.js

// Función para agregar un producto al carrito
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} agregado al carrito.`);
}

// Función para mostrar los productos en el carrito
function displayCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContent = document.getElementById('cart-content');

    cartContent.innerHTML = '';

    cartItems.forEach(item => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = item;
        cartContent.appendChild(cartItem);
    });
}

// Ejecutar la función displayCart cuando se cargue la página
document.addEventListener('DOMContentLoaded', displayCart);
