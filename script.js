// Initialize an empty array to store items
const itemList = [];

// Start ID counter from 1001
let nextId = 1001;

// Function to generate a new ID
function generateId() {
    const id = `B${nextId}`;
    nextId++; // Increment counter for next ID
    return id;
}

// Function to handle adding item
function addItem() {
    // Get values from input fields
    const id = generateId(); // Generate a new ID
    const name = document.getElementById('itemNameAdd').value;
    const price = document.getElementById('itemPriceAdd').value;
    const discount = document.getElementById('itemDiscountAdd').value;

    // Update the ID input field
    document.getElementById('itemIdAdd').value = id;

    // Validate input (optional)
    if (!name || !price || !discount) {
        alert('Please fill out all fields.');
        return;
    }

    // Create an item object
    const item = {
        id: id,
        name: name,
        price: parseFloat(price),
        discount: discount
    };

    // Add item to the array
    itemList.push(item);

    // Optional: Clear other input fields
    document.getElementById('itemNameAdd').value = '';
    document.getElementById('itemPriceAdd').value = '';
    document.getElementById('itemDiscountAdd').value = '';

    // Optional: Display the item list
    console.log(itemList);
}

// Attach event listener to the "Add item" button
document.getElementById('addItemBtn').addEventListener('click', addItem);
