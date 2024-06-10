import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { loadProducts } from '../data/products.js';
// this a another way to import js files. - this runs all code inside the js file.
// import '../data/cart-class.js';

// import '../data/backend-practice.js';

// promises - built-in class, it's going to run this function immedialty
// in promises, we can run multiple promises at the same time. 
// Promise.all() - lets us run multiple promises at the same time.
//  - and wait for all of them to finish.

/*
Promise.all([  // array
  new Promise((resolve) => {
    loadProducts(() =>{
      resolve(values1);
    });
  }),
  new Promise((resolve) =>{
    loadCart(() =>{
      resolve();
    });
  })
]).then((value) =>{   
  console.log(value);   // ['values1', undefined]
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/ 

new Promise((resolve)=>{
  
  loadProducts(() =>{
    resolve('value1');
  });
}).then((value) =>{
  console.log(value);  // value1
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

// resolve is a funtion
//  - similar to done() function
//  - lets us control when to go to the next step

/*
loadProducts(() =>{
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/