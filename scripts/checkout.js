import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';

// this a another way to import js files. - this runs all code inside the js file.
import '../data/cart-oop.js';

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();