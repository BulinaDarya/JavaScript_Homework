"use strict";

const basket = {};

const products = getProductsObject();

const basketElement = document.querySelector(".basket");

const basketListElement = document.querySelector(".basketList");

const basketCounterElement = document.querySelector(".cartIconWrap span");

const basketTotalValueElement = document.querySelector(".basketTotalValue");

document.querySelector(".cartIconWrap").addEventListener("click", () => {
  basketElement.classList.toggle("hidden");
});

document.querySelector(".featuredItems").addEventListener("click", (event) => {

  const addToCartElement = event.target.closest(".addToCart");

  if (!addToCartElement) {
    return;
  }

  addToBasket(addToCartElement.dataset.id);

  renderBasketContent();
});


basketElement.addEventListener("click", (event) => {

  if (!event.target.classList.contains("productRemove")) {
    return;
  }
 
  removeFromBasket(event.target.closest(".basketRow").dataset.id);

  renderBasketContent();
});




/**
 * @param {string} id 
 */
function addToBasket(id) {

  if (!(id in basket)) {

    basket[id] = {
      id: id,
      name: products[id].name,
      price: products[id].price,
      count: 0,
    };
  }
 
  basket[id].count++;
}




/**
 * @param {string} id 
 */
function removeFromBasket(id) {

  if (basket[id].count <= 1) {
    delete basket[id];
  } else {
    basket[id].count--;
  }
}


function renderBasketContent() {

  basketListElement.innerHTML = Object.values(basket).reduce(
    (acc, product) => acc + getBasketProductMarkup(product),
    ""
  );

  basketCounterElement.textContent = getTotalBasketCount().toString();

  basketTotalValueElement.textContent = getTotalBasketPrice().toFixed(2);
}




/**
 * @return {number} 
 */
function getTotalBasketCount() {
  return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}




/**
 * @return {number} 
 */
function getTotalBasketPrice() {
  return Object.values(basket).reduce(
    (acc, product) => acc + product.price * product.count,
    0
  );
}




/**
 * @param {object} product
 */
function getBasketProductMarkup(product) {
  return `
    <div class="basketRow" data-id="${product.id}">
      <div>${product.name}</div>
      <div>
        <span class="productCount">${product.count}</span> шт.
      </div>
      <div>${product.price}.00 $</div>
      <div>
        <span class="productTotalRow">
          ${(product.price * product.count).toFixed(2)} $
        </span>
      </div>
      <div><button class="productRemove">-</button></div>
    </div>
  `;
}
