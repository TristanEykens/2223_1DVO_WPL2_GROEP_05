// Initialize variables
let total = 0;

// Add event listeners for plus and minus buttons
document.querySelectorAll('.minus-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        let quantity = parseInt(button.nextElementSibling.innerText);
        if (quantity > 1) {
            quantity--;
            button.nextElementSibling.innerText = quantity;
            updateTotal();
        }
    });
});

document.querySelectorAll('.plus-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        let quantity = parseInt(button.previousElementSibling.innerText);
        quantity++;
        button.previousElementSibling.innerText = quantity;
        updateTotal();
    });
});

// Add event listeners for remove buttons
document.querySelectorAll('.remove-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        button.closest('.cart-item').remove();
        updateTotal();
    });
});

// Update the total price of the cart
function updateTotal() {
    total = 0;
    document.querySelectorAll('.cart-item').forEach(function(item) {
        let quantity = parseInt(item.querySelector('.quantity').innerText);
        let price = parseFloat(item.querySelector('.product-value').innerText.substring(1));
        total += quantity * price;
    });
}