// class = object generator
/* Benefits of class
    - it cleaner than functions
    - it have extra features for OOPs
      1. constructor - let us run setup code inside the class.
*/
class Cart{
  // cartItems = undefined ;
  // localStorageKey = undefined;

  cartItems ;  // it's a public perporty - it can be accessed outside of the class.
  #localStorageKey ; // Private Property - it can't be used outside of the class

  // example for constructor
  /* 
    More details about constructor:
    1. Has to be named "constructor"
    2. Should not return anything
  */
  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
   
  }

  #loadFromStorage(){   // making this private property as well
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)); 
    
    if(!this.cartItems){
      
      this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2, 
        deliveryOptionId: '1'
      },
      {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
  } 

  saveToStorage(){
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId){
    let matchingItem;
    
    this.cartItems.forEach((cartItem) =>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
  
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity = Number(quantitySelector.value);  // converting string to number.
    
  
    if(matchingItem){
      matchingItem.quantity += quantity;
  
    }else{
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId: '1'
      });
    }
  
    this.saveToStorage();
  }

  removeFromCart(productId){
    const newCart = [];
    
    this.cartItems.forEach((cartItem) => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });
  
    this.cartItems = newCart;
  
    this.saveToStorage();
  }

  calculateCartQuantity(){
    let cartQuantity = 0;
  
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
      
    });
  
    return cartQuantity;
  }

  updateQuantity(productId, newQuantity){
    let matchingItem;
   
    this.cartItems.forEach((cartItem) => {
     if(productId === cartItem.productId){
       matchingItem = cartItem;
     }
    });
   
    matchingItem.quantity = newQuantity;
   
    this.saveToStorage();
    
  }

  updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    
    this.cartItems.forEach((cartItem) =>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
  
    matchingItem.deliveryOptionId = deliveryOptionId;
  
    this.saveToStorage();
  }
  
}

const cart = new Cart('cart-oop');
const bussinessCart = new Cart('cart-bussiness');
/* Each object that are generat from a class is called an instance of the class */

// Constructor lets us puts this setup code inside the class
/* it's moved to the constructor function -

cart.localStorageKey = 'cart-oop';
bussinessCart.localStorageKey = 'cart-bussiness';

cart.loadFromStorage();
bussinessCart.loadFromStorage();
*/ 

console.log(cart);
console.log(bussinessCart);

console.log(bussinessCart instanceof Cart);  // true
