// to send a HTTP message, we are going to use
// XMLHttpRequest - this is a built-in class (provided by javascript)

const xhr = new XMLHttpRequest();
// xhr.open(<'type of request'>, <where to send this HTTP message> );  // here parameter - type of HTTP message. ex.: GET

xhr.addEventListener('load', ()=>{
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/');  // here parameter - type of HTTP message. ex.: GET, and another parameter is URL
xhr.send();


/* GET - get some information from backend 
   POST, PUT, DELETE
*/

/* 
  URL - Uniform Resourse Locator
    - Like an address, but for the internet
    - Helps us locate another computer on the internet.
*/

/* 
  Status Code:
    - Starts with 4 or 5 (400, 404, 500) = failed.
      - if the number starts with 4 - it's our fault.
      - if the number starts with 5 - it's our backend's falut.
    
    - Starts with 2 (200, 201, 204) = succeeded
*/

// fetch() = better way to make HTTP requests.