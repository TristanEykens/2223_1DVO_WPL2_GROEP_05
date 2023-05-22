// Get the cart container element

var cartContainer = document.getElementById('cart');




// Get the quantity control buttons

var quantityButtons = cartContainer.getElementsByClassName('quantity-controls');




// Get the total element

var totalElement = document.getElementById('total');




// Initialize the total amount

var totalAmount = 0;




// Function to update the total amount

function updateTotal() {

    totalElement.textContent = 'Totaalbedrag: €' + totalAmount.toFixed(2);

}




// Function to handle quantity decrease

function decreaseQuantity() {

    var quantityElement = this.parentNode.getElementsByClassName('quantity')[0];

    var quantity = parseInt(quantityElement.textContent);



    if (quantity > 0) {

        quantity--;

        quantityElement.textContent = quantity;



        // Update the total amount

        var productValueElement = this.closest('.cart-item-details').querySelector('.product-value');

        var productValue = parseFloat(productValueElement.textContent.replace('€', ''));

        totalAmount -= productValue;

        updateTotal();

    }

}




// Function to handle quantity increase

function increaseQuantity() {

    var quantityElement = this.parentNode.getElementsByClassName('quantity')[0];

    var quantity = parseInt(quantityElement.textContent);



    quantity++;

    quantityElement.textContent = quantity;



    // Update the total amount

    var productValueElement = this.closest('.cart-item-details').querySelector('.product-value');

    var productValue = parseFloat(productValueElement.textContent.replace('€', ''));

    totalAmount += productValue;

    updateTotal();

}




// Function to handle item removal

function removeItem() {

    var cartItem = this.closest('.cart-item');



    // Get the quantity and product value of the item being removed

    var quantityElement = cartItem.getElementsByClassName('quantity')[0];

    var quantity = parseInt(quantityElement.textContent);



    var productValueElement = cartItem.querySelector('.product-value');

    var productValue = parseFloat(productValueElement.textContent.replace('€', ''));



    // Calculate the value of the item being removed

    var itemValue = quantity * productValue;



    // Update the total amount

    totalAmount -= itemValue;

    updateTotal();



    // Remove the cart item

    cartItem.remove();

}




// Attach event listeners to quantity control buttons

for (var i = 0; i < quantityButtons.length; i++) {

    var minusButton = quantityButtons[i].getElementsByClassName('minus-btn')[0];

    var plusButton = quantityButtons[i].getElementsByClassName('plus-btn')[0];

    var removeLink = quantityButtons[i].getElementsByClassName('remove-link')[0];



    minusButton.addEventListener('click', decreaseQuantity);

    plusButton.addEventListener('click', increaseQuantity);

    removeLink.addEventListener('click', removeItem);

}