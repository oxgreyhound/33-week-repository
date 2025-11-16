//XMLHttpRequest (xhr) GET request
const xhr = new XMLHttpRequest();                       //preparing request, new XHR object
xhr.open("GET", "http://api.example_domain.com/data");  //defines HTTP method and domain
xhr.onload = () => console.log(xhr.responseText);       //callback function, "when request finnished run this"
xhr.onerror = () => console.error("error");             //catches network errors
xhr.send();                                             //sends the request