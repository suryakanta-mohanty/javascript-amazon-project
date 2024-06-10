import {cart, addToCart, calculateCartQuantity} from '../data/cart.js';
import { products, loadProducts } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

/* the main idea of javascipt
   1. Save the data
   2. Generate the HTML
   3. Make it interactive 
*/

// Generate the HTML
// combine this html together.

loadProducts(renderProductsGrid);

function renderProductsGrid(){

  let productsHTML = '';

  products.forEach((product) =>{
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
          src="${product.getStarsUrl()}">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        ${product.getPrice()}
      </div>

      <div class="product-quantity-container">
        <select class="js-quantity-selector-${product.id}">
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
      
      ${product.extraInfoHTML()}

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-to-cart-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      
      

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
    `;

  });

  /* Syntax for data attribute
        - is just an HTML attribute
        - have to start with "data-" 
        - then give it any name (example data-product-name)
  */

  // put it on the web page

  document.querySelector('.js-products-grid').innerHTML = productsHTML;


  /* How do we know which products to add?
    Data Attribute - 
    1. is just another HTML attribute
    2. allows us to attach any information to an element. 
    - see the example in "add to cart button"
  */

  const addedMessageTimeouts = {};

  //moving the addToCart() funtion to it's own file.
  // best practice - group related code together into it's own file.

  function updateCartQuantity(){
    const cartQuantity = calculateCartQuantity();

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  }

  updateCartQuantity();

  document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
    button.addEventListener('click', ()=>{
      
      // console.log(button.dataset);  // it will give all the data attached with the button parameter.
      // console.log(button.dataset.productName);  // it will give only name.


      /* steps
        1. check if the product is already in the cart.
        2. if it is in the cart, increase the quantity.
        3. if it's not in the cart, add it to the cart.
      */

      // const productId = button.dataset.productId;
      const {productId} = button.dataset;   // destructuring
      
      addToCart(productId);
      updateCartQuantity();
      

      const addedMessage =  document.querySelector(`.js-added-to-cart-${productId}`);
      addedMessage.classList.add('added-to-cart-visible');

    
      const previousTimeoutId = addedMessageTimeouts[productId];

      if(previousTimeoutId){
        clearTimeout(previousTimeoutId);
      }
      

      const timeoutId = setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-visible');
      }, 2000);

      addedMessageTimeouts[productId] = timeoutId;
    });

  });

}