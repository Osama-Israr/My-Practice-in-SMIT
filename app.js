document.write("JS Connected!");


/*
const myReq = new XMLHttpRequest();

myReq.onreadystatechange = function () {
    // console.log(this.statusText, "Status Text");
    // console.log(this.readyState, "ready state");
    // console.log(this.responseText, "response text");

    if(this.readyState === 4) {
        console.log("response Text: ", this.responseText);
        let data = JSON.parse(this.responseText);
        console.log(data);
    }
}

myReq.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
myReq.send();
*/

// fetch browser ka function h

// JSON placeholder

// 1st step server connection build  OK 200
// 2nd step 
// 3rd step
// 4th step response 

/*
function fetch(api, cb) {
    const myReq = new XMLHttpRequest();

    myReq.onreadystatechange = function () {
        // console.log(this.statusText, "Status Text");
        // console.log(this.readyState, "ready state");
        // console.log(this.responseText, "response text");

        if(this.readyState === 4) {
            // console.log("response Text: ", this.responseText);
            let data = JSON.parse(this.responseText);
            console.log(data);
            cb(data);
        }
    }

    myReq.open("GET", api);
    myReq.send();
}

fetch('https://jsonplaceholder.typicode.com/todos/1', function(data) {
    console.log(data.id, "callback function 1");
});

fetch('https://jsonplaceholder.typicode.com/todos', function(data) {
    console.log(data[0].id, "callback function 2");
});
*/



/*
const fetch = new Promise(function (res, rej) {
    const myReq = new XMLHttpRequest();

    myReq.onreadystatechange = function () {
        if(this.readyState === 4) {
            // console.log("response Text: ", this.responseText);
            let data = JSON.parse(this.responseText);
            // console.log(data);
            res(data);
        }
    }

    myReq.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
    myReq.send();
});

fetch().then(function(val) {
    console.log(val, "Promise val");
})
*/


/*
const response = fetch("https://jsonplaceholder.typicode.com/todos/1");

response.then(function(val) {
    console.log(val);
});
*/



// post => create      => 201          range (200 - 299)
// payload                                                  cors error ( default behaviour ) , no cors , self origin

// API Integeration