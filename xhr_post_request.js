//XMLHttpRequest (XHR) POST request
const xhr = new XMLHttpRequest();                           //preparing request, new XHR object
xhr.open("POST", "http://api.example_domain.com/data");     //sets HTTP method and domain
xhr.setRequestHeader("Content-Type", "application/json");   //sets content-type 
xhr.onload = () => console.log(xhr.responseText);           //callback function
xhr.onerror = () => console.error("error");                 //catches network errors

const data = {                                              //sets payload/data to send
    fname: "greyhound",
    username: "greyhound64",
    age: 26
};

xhr.send(JSON.stringify(data));                             //converts JS object to JSON and sends the request