import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suit: formatCurrency');
console.log('Converts cents to dollers:');

if(formatCurrency(2095) === '20.95'){
  console.log('test passed');  // test passed

}else{
  console.log('test failed');
}

console.log('works with Zero:')
if(formatCurrency(0) === '0.00'){
  console.log('passed');  // passed
}else{
  console.log('failed');
}

console.log('rounds up to the nearest cents:');
if(formatCurrency(2000.5) === '20.01'){
  console.log('test passed');  // test passed

}else{
  console.log('failed');
}

if(formatCurrency(2000.4) === '20.00'){
  console.log('test passed');  // test passed

}else{
  console.log('failed');
}



/* 
   How many test cases should we have?

   1. Basic test cases - tests if the code is working or not.

   2. Edge cases - test with values that are tricky.
*/