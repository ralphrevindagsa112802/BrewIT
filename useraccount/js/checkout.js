// Example of populating customer details dynamically
document.getElementById('customer-name').textContent = 'John Doe';
document.getElementById('customer-address').textContent = '123 Main Street, City, Country';
document.getElementById('order-number').textContent = '20240123-1001';

// Example of adding order items
const orderItemsContainer = document.getElementById('order-items');
const items = [
  { name: 'Cappuccino', size: 'Regular', quantity: 1, price: 115 },
  { name: 'Pork Katsu Curry', size: 'Regular', quantity: 1, price: 135 }
];

items.forEach(item => {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'flex items-center justify-between border-b pb-4';
  itemDiv.innerHTML = `
    <div class="flex gap-4">
      <div>
        <p class="font-semibold">${item.name}</p>
        <p class="text-sm text-gray-600">Size: ${item.size} | Quantity: ${item.quantity}</p>
      </div>
    </div>
    <p class="font-semibold text-gray-800">₱ ${item.price}</p>
  `;
  orderItemsContainer.appendChild(itemDiv);
});

// Example of calculating total
const totalPrice = items.reduce((total, item) => total + item.price, 0);
document.getElementById('total-price').textContent = `₱ ${totalPrice}`;
document.getElementById('pay-amount').textContent = `₱ ${totalPrice}`;
