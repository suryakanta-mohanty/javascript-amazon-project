import {formatCurrency} from '../../scripts/utils/money.js'; 

// this how we creates test suits in jasmine

/* this `describe()` is given by jasmine farework.
   
   describe(description, specDefinations)
   - create a group of specs(often called a suits).
   - calls to describe can be nested within other calls to compose your suits as a tree.
*/
describe('Test suit: format currency', () =>{
  
  // it creates test
  it('Converts cents into dollers', ()=>{
    expect(formatCurrency(2095)).toEqual('20.95');  // it compares 

  });   

  it('Works with Zero', ()=>{
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('Rounds upto the nearest cents: ', ()=> {
    expect(formatCurrency(2000.5)).toEqual('20.01');
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });


});

