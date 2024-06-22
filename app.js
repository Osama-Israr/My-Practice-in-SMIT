// document.write('JavaScript Connected!');                // home work closures

// const myArr = [
//     { id: 5, name: 'usama' },
//     { id: 6, name: 'usman' },
//     { id: 4, name: 'unaiz' },
//     { id: 1, name: 'usama' }
// ]

// for(let i = 0; i < myArr.length; i++) {}

// for(let items of myArr) {}

// let foundElement = myArr.find(function(items, index, array) {
//     return items.id === 5;
// });

// console.log(foundElement);

// myArr.__proto__.find = function() {
//     alert('usama');
// }

// console.log(myArr);

// myArr.__proto__.aa.find = function() {
//     alert('usama');
// }

// console.log(myArr.aa);

// let foundElement = myArr.find(function(items, index, array) {
//     return items.id === 5;
// });

// console.log(foundElement);


// let fruits = ['mango', 'banana', 'apple'];

// console.log(fruits);


// let filterArray = myArr.filter(function(items) {  // items, index, array
//     return items.id > 5;
// });

// console.log(filterArray);                         // return array element


// map => reach each element

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// myNumbers.map(function(items) {
//     console.log(items + 4);
// })

// console.log(myNumbers);



// recursive => attempt then move , same function invoke

/*
function getNumber(n) {
    alert(n);
    if(n === 4) {
        return n;
    }
    else {
        return getNumber(n + 1);
    }
}

let myNum = getNumber(1);

console.log(myNum);
*/

/*
function myRecursive(num) {
    if(num <= 1) return 1;
    return num * myRecursive(num - 1);
}

let returnValue = myRecursive(4);
console.log(returnValue);            // LIFO, FIFO , JS me stack chalta h
*/