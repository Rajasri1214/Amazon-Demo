//save the data about products
//req data stored in data/product-js file.so,its enough to link that file

//import the variable u want to use.it take out the cart variable from cart.js file
import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';

//for combine all the html together
let productsHTML = '';

//generate the html code
products.forEach((product) => {
  productsHTML += `
   <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
`;
});

//putting the combined html on the webpage(by using DOM )
//generating html using js
document.querySelector('.js-products-grid').innerHTML = productsHTML;

//updating the webpage
function updateCartQuality() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  //getting element by using js
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

}
//for making it interactive
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuality();    
    });
  });
