const addButton = document.querySelector('.add-product');
const clearButton = document.querySelector('.clear-list');
const productsList = document.querySelector('.products-list');

addButton.addEventListener('click', () => {
  const productType = document.getElementById('type-select').value;
  const productName = document.getElementById('product-name').value;
  const productCount = document.getElementById('product-count').value;

  let isValid = true;

  if (!productType) {
    alert('Ошибка: Выберите тип продукта');
    isValid = false;
  }

  if (!productName) {
    alert('Ошибка: Введите название продукта');
    isValid = false;
  }

  if (!productCount) {
    alert('Ошибка: Введите количество продукта');
    isValid = false;
  }

  if (isValid) {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.textContent = `${productType} - ${productName} (${productCount} шт.)`;

    productsList.appendChild(productItem);

    document.getElementById('type-select').value = "";
    document.getElementById('product-name').value = "";
    document.getElementById('product-count').value = "";
  }
});

clearButton.addEventListener('click', () => {
  productsList.innerHTML = '';
});

