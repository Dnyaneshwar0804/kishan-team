// Food item details
const foodItems = [
    { name: "Pizza", price: 12.99 },
    { name: "Burger", price: 8.99 },
    { name: "Sushi", price: 14.99 }
];

let cart = [];
let totalPrice = 0;

// DOM elements
const cartElement = document.getElementById('cart');
const cartItemsElement = document.getElementById('cartItems');
const totalPriceElement = document.getElementById('totalPrice');
const checkoutModal = document.getElementById('checkoutModal');
const closeModalButton = document.getElementById('closeModal');

// Add event listeners for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const food = foodItems[index];
        cart.push(food);
        totalPrice += food.price;

        updateCart();
    });
});

// Update cart UI
function updateCart() {
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        
        cartItemsElement.appendChild(listItem);
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Toggle Cart visibility
document.getElementById('orderButton').addEventListener('click', () => {
    cartElement.classList.toggle('active');
});

// Checkout and display success modal
document.getElementById('checkoutButton').addEventListener('click', () => {
    cartElement.classList.remove('active');
    checkoutModal.style.display = 'flex';
});

// Close the modal
closeModalButton.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
    cart = [];
    totalPrice = 0;
    updateCart();
});