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


// let myArray = fetch('https://jsonplaceholder.typicode.com/todos').then((data) => {
//     let myVar = data.json();

//     myVar.then((data) => {
//         console.log(data[0]);
//     })
// })

// console.log(myArray);






// June 15 , 2024           JavaScript Event Loop

// function() {}          : Syntax Error

// JavaScript first compile then interpreted program , Just in time compilation (JITC)

// Hoisting Concepts

// console.log(a, '==== a =====');       // undefined

// var a = 'value';

// console.log(window);

// console.log(b);                                  // ReferenceError b is not defined

// console.log(myFunc);                                // display function code

// myFunc();                                           // function code running 

// function myFunc() {
//     console.log("Function Run...");
// }


// lexical scope

// function myFunc() {
//     console.log('run');
// }

// const result = myFunc();

// console.log(result);

// console.log(window);

// console.log(a, '==== a =====');
// console.log(b, '===== b =====');            // ReferenceError 

// var b = 'cde';
// let a = 'abc';



// for of loop
// const myArray = [1, 2, 3, 4, 5];

// for(let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i], i);
// }

// for(let items of myArray) {
//     console.log(items, "Short hand method for of loop");
// }

// for(let items in myArray) {                                   // Not for array , it is used of an object
//     console.log(items, "Short hand method for in loop");
// }


// for in loop    ( object )

// const person = {
//     name: 'usama',
//     age: 21,
//     gender: "male"
// }

// for(let keys in person) {
//     console.log(keys);
// }