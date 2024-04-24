const products = [
    {id: 1, name: 'iPhone 1', price: 60, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/IPhone_First_Generation.jpg'},
    {id: 2, name: 'Nikon F6', price: 75, image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Nikon_F6_face.jpg'},
    {id: 3, name: 'Schenker VIA14', price: 90, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Schenker_VIA14_Laptop_asv2021-01.jpg/1365px-Schenker_VIA14_Laptop_asv2021-01.jpg'}
];

// Функция для отображения товаров
function displayProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img id="${product.image}" src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p id="price-${product.id}">Price: $${product.price}</p>
            <button class="buy-btn" data-id="${product.id}">Purchase now</button>
        `;
        productList.appendChild(productElement);
    });

    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', showOrderForm);
    });
}

// Функция для отображения формы оформления заказа
function showOrderForm(event) {
    const productId = event.target.dataset.id;
    const product = products.find(p => p.id === parseInt(productId)); // Исправлено

    const orderForm = document.querySelector('.order-form');
    orderForm.style.display = 'block'; // Изменено

    const orderInfo = document.querySelector('.order-info');
    orderInfo.style.display = 'none'; // Изменено

    // Заполнение информации о товаре в форме
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = `$${product.price}`;
    document.getElementById('productId').value = productId;
}

// Добавляем обработчик события отправки формы только один раз
const form = document.querySelector('.order-form form');
form.addEventListener('submit', placeOrder);

// Функция для оформления заказа
function placeOrder(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const delivery = document.getElementById('delivery').value;
    const payment = document.getElementById('payment').value;
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;

    // Получаем информацию о товаре из скрытого поля формы
    const productId = document.getElementById('productId').value;
    const product = products.find(p => p.id === parseInt(productId));

    // Проверка заполнения обязательных полей
    if (!name || !city || !delivery || !payment || !quantity) {
        alert('Please fill in all required fields.');
        return;
    }

    // Отображение информации о заказе
    const orderDetails = document.querySelector('.order-details');
    orderDetails.textContent = `
        Name: ${name}
        City: ${city}
        Delivery: ${delivery}
        Payment: ${payment}
        Quantity: ${quantity}
        Comment: ${comment}
        Product: ${product.name}
        Price: $${product.price}
      `;

    const orderForm = document.querySelector('.order-form');
    orderForm.style.display = 'none'; // Изменено

    const orderInfo = document.querySelector('.order-info');
    orderInfo.style.display = 'block'; // Изменено
}

// Инициализация отображения товаров
displayProducts();