//fetch GET request
fetch("http://api.example_domain.com/data")         //starting process to fetch data
    .then(res => res.json())                        //parse JSON body asynch
    .then(data => console.log(data))                //handles parsed response data
    .catch(err => console.error("error: ", err));   //catches network and parsing errors