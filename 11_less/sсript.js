document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'iPhone 1', price: 60, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/IPhone_First_Generation.jpg' },
        { id: 2, name: 'Nikon F6', price: 75, image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Nikon_F6_face.jpg' },
        { id: 3, name: 'Schenker VIA14', price: 90, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Schenker_VIA14_Laptop_asv2021-01.jpg/1365px-Schenker_VIA14_Laptop_asv2021-01.jpg' }
    ];

    function displayProducts() {
        const productList = document.querySelector('.product-list');
        productList.innerHTML = '';

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.setAttribute('data-id', product.id);
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price}</p>
                <button class="buy-btn" type="button">Purchase now</button>
            `;
            productList.appendChild(productElement);
        });

        const buyButtons = document.querySelectorAll('.buy-btn');
        buyButtons.forEach(btn => {
            btn.addEventListener('click', showOrderForm);
        });
    }

    function showOrderForm(event) {
        const productId = event.target.closest('.product').dataset.id;
        const product = products.find(p => p.id == productId);

        const orderForm = document.querySelector('.order-form');
        orderForm.classList.remove('hidden');

        const orderInfo = document.querySelector('.order-info');
        orderInfo.classList.add('hidden');

        document.getElementById('productId').value = productId;
    }

    function placeOrder(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const city = document.getElementById('city').value;
        const delivery = document.getElementById('delivery').value;
        const payment = document.getElementById('payment').value;
        const quantity = document.getElementById('quantity').value;
        const comment = document.getElementById('comment').value;
        const productId = document.getElementById('productId').value;
        const product = products.find(p => p.id == productId);

        if (!name || !city || !delivery || !payment || !quantity) {
            alert('Please fill in all required fields.');
            return;
        }

        const orderDetails = document.querySelector('.order-details');
        orderDetails.innerHTML = `
            <p>Name: ${name}</p>
            <p>City: ${city}</p>
            <p>Delivery: ${delivery}</p>
            <p>Payment: ${payment}</p>
            <p>Quantity: ${quantity}</p>
            <p>Comment: ${comment}</p>
            <p>Product: ${product.name}</p>
            <p>Price: $${product.price}</p>
        `;

        const orderForm = document.querySelector('.order-form');
        orderForm.classList.add('hidden');

        const orderInfo = document.querySelector('.order-info');
        orderInfo.classList.remove('hidden');
    }

    const form = document.getElementById('orderForm');
    form.addEventListener('submit', placeOrder);

    displayProducts();
});
