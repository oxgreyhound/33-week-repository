//fetch POST request
fetch("http://api.example_domain.com/data", {
    method: "POST",                             //define HTTP method
    headers: {
        "Content-Type": "application/json"      //define content-type
    },
    body: JSON.stringify({                      //convert JS object to JSON
        fname: "greyhound",
        username: "greyhound64",
        age: 26
    })
})
.then(res => res.json())                        //parse JSON body async
.then(data => console.log(data))                //handles parsed response data
.catch(err => console.error("error: ", err));   //catches netrk and parsing errors