class OrderDetails extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="order-details">
                <div class="form-group">
                    <label for="order-number">Order number</label>
                    <input type="text" id="order-number">
                </div>
                <div class="form-group">
                    <label for="customer">Customer</label>
                    <input type="text" id="customer">
                </div>
                <div class="form-group">
                    <label for="items-quantity">Items / Quantity</label>
                    <div class="items-quantity">
                        <textarea id="items" readonly></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label for="date">Date</label>
                    <input type="text" id="date">
                </div>
                <div class="form-group">
                    <label for="total">Total</label>
                    <input type="text" id="total">
                </div>
                <button id="checkout-button">Check-out</button>
                <button id="checkout-button1">Cancel</button>
            </div>
        `;
    }

    addItem(name, price) {
        const itemsTextarea = this.querySelector('#items');
        const totalInput = this.querySelector('#total');

        // Add the item name to the textarea
        itemsTextarea.value += `${name}\n`;

        // Update the total price
        const currentTotal = parseFloat(totalInput.value) || 0;
        totalInput.value = (currentTotal + parseFloat(price)).toFixed(2);
    }

    clearItems() {
        this.querySelector('#items').value = '';
        this.querySelector('#total').value = '';
    }
}

// Define the custom element
customElements.define('order-details', OrderDetails);

// Ensure DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners to menu items
    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', function() {
            const name = item.getAttribute('data-name');
            const price = item.getAttribute('data-price');
            
            // Update the OrderDetails component
            document.querySelector('order-details').addItem(name, price);
        });
    });

    // Attach event listener to the cancel button
    document.querySelector('order-details').querySelector('#checkout-button1').addEventListener('click', function() {
        document.querySelector('order-details').clearItems();
    });
});
