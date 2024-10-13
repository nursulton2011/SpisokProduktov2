const addButton = document.querySelector('.add-product');
const clearButton = document.querySelector('.clear-list');
const productsList = document.querySelector('.products-list');

const typeError = document.getElementById('type-error');
const nameError = document.getElementById('name-error');
const countError = document.getElementById('count-error');

function hideErrors() {
  typeError.style.display = 'none';
  nameError.style.display = 'none';
  countError.style.display = 'none';
}

addButton.addEventListener('click', () => {
  const productType = document.getElementById('type-select').value;
  const productName = document.getElementById('product-name').value;
  const productCount = document.getElementById('product-count').value;

  hideErrors();

  let isValid = true;

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
