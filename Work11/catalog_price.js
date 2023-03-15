"use strict";

const featuredItemsElement = document.querySelector(".featuredItems");

featuredItemsElement.innerHTML = getProductsList()
  .map((product) => renderProduct(product))
  .join("");


function renderProduct(data) {
  return `
    <div class="featuredItem">
        <div class="featuredImgWrap">
            <img src="${data.img}" alt="${data.name}">
            <div class="featuredImgDark">
                <button class="addToCart" data-id="${data.id}">
                    <img src="/img/img/basket.png" alt="basket">
                    Add to Cart
                </button>
            </div>
        </div>
        <div class="featuredData">
            <div class="featuredName">
                ${data.name}
            </div>
            <div class="featuredText">
                ${data.description}
            </div>
            <div class="featuredPrice">
                ${data.price} .00$
            </div>
        </div>
    </div>
  `;
}
