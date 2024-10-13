// Получаем элементы с HTML
const addButton = document.querySelector('.add-product');
const clearButton = document.querySelector('.clear-list');
const productsList = document.querySelector('.products-list');

// Элементы для показа сообщений об ошибках
const typeError = document.getElementById('type-error');
const nameError = document.getElementById('name-error');
const countError = document.getElementById('count-error');

// Функция для скрытия всех сообщений об ошибках
function hideErrors() {
  typeError.style.display = 'none';
  nameError.style.display = 'none';
  countError.style.display = 'none';
}

// Функция для проверки валидности данных
function validateForm() {
  const productType = document.getElementById('type-select').value;
  const productName = document.getElementById('product-name').value;
  const productCount = document.getElementById('product-count').value;

  let isValid = true;

  // Сначала скрываем все сообщения об ошибках
  hideErrors();

  // Проверяем поля и показываем сообщения об ошибках при необходимости
  if (!productType) {
    typeError.style.display = 'block';
    isValid = false;
  }

  if (!productName) {
    nameError.style.display = 'block';
    isValid = false;
  }

  if (!productCount) {
    countError.style.display = 'block';
    isValid = false;
  }

  return isValid; // Возвращаем true, если все поля заполнены
}

// Функция для добавления продукта в список
addButton.addEventListener('click', () => {
  if (validateForm()) {
    const productType = document.getElementById('type-select').value;
    const productName = document.getElementById('product-name').value;
    const productCount = document.getElementById('product-count').value;

    // Добавляем продукт в список
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.textContent = `${productType} - ${productName} (${productCount} шт.)`;

    productsList.appendChild(productItem);

    // Очищаем поля после добавления продукта
    document.getElementById('type-select').value = "";
    document.getElementById('product-name').value = "";
    document.getElementById('product-count').value = "";
  }
});

// Функция для очистки списка продуктов
clearButton.addEventListener('click', () => {
  productsList.innerHTML = ''; // Очищаем содержимое списка
});
