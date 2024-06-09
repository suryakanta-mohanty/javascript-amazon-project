function Cart(localStorageKey){    // in OOP - use PascalCase for things that generate objects.
  const cart = {
    // inside in an object we can't write 'export' or 'let'.
    // we have convert it into value or property.
    cartItems : undefined,
    
    // a function inside an object = method
    // loadFromStorage : function() (shortcut) = loadFromStorage()
    loadFromStorage(){
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)); 
      
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
    
      /* 
      We have a problem! - if name of 'cart' is changed the inside program longer will work.
      - js has a feature called 'this'.
      - this gives us object that contains this function so it gives us this outer object 'cart'.
    */
    },
  
    saveToStorage(){
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
  
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
          // productId: productId,
          // quantity: quantity
          productId,
          quantity,
          deliveryOptionId: '1'
        });
      }
    
      this.saveToStorage();
    },
  
    removeFromCart(productId){
      const newCart = [];
      
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId !== productId){
          newCart.push(cartItem);
        }
      });
    
      this.cartItems = newCart;
    
      this.saveToStorage();
    },
  
    calculateCartQuantity(){
      let cartQuantity = 0;
    
      this.cartItems.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
        
      });
    
      return cartQuantity;
    },
  
    updateQuantity(productId, newQuantity){
      let matchingItem;
     
      this.cartItems.forEach((cartItem) => {
       if(productId === cartItem.productId){
         matchingItem = cartItem;
       }
      });
     
      matchingItem.quantity = newQuantity;
     
      this.saveToStorage();
      
    },
  
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
    
  };

  return cart;
}

const cart = Cart('cart-oop');
const bussinessCart = Cart('cart-bussiness');

cart.loadFromStorage();
bussinessCart.loadFromStorage();
/*
  this is basic idea behind the OOP
*/

/*
const bussinessCart = {
  
  cartItems : undefined,
  
  loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem('cart-bussiness')); 
    
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
  
    
  },

  saveToStorage(){
    localStorage.setItem('cart-bussiness', JSON.stringify(this.cartItems));
  },

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
  },

  removeFromCart(productId){
    const newCart = [];
    
    this.cartItems.forEach((cartItem) => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });
  
    this.cartItems = newCart;
  
    this.saveToStorage();
  },

  calculateCartQuantity(){
    let cartQuantity = 0;
  
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
      
    });
  
    return cartQuantity;
  },

  updateQuantity(productId, newQuantity){
    let matchingItem;
   
    this.cartItems.forEach((cartItem) => {
     if(productId === cartItem.productId){
       matchingItem = cartItem;
     }
    });
   
    matchingItem.quantity = newQuantity;
   
    this.saveToStorage();
    
  },

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
  
};

*/ 

/* Easy to create multiple objects */

console.log(cart);
console.log(bussinessCart);

/* the final one is the better way to create object. 
    - Create a function that generates objects
    
*/