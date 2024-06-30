// June 29 , 2024                                         Saturday

// const myArr = ['usama', 'hamza', 'ali', 'asad', 'burhan', 'zeeshan'];

// console.log(myArr.sort());

// figma to html 

// Sorting , algorithm => step by step processes , pattren identification , time complexcity

// bubble sort

// let myArr = [5, 9, 8, 1, 2];

// for (let i = 0; i < myArr.length; i++) {
//     for (let j = 0; j < myArr.length; j++) {
//         if(myArr[j] > myArr[j + 1]) {
//             const temp = myArr[j];
//             myArr[j] = myArr[j + 1];
//             myArr[j + 1] = temp;
//         }
        
//     }
// }

// console.log(myArr);

// let myArr = [5, 9, 8, 1, 2];

// myArr.sort(function(a, b) {
//     return b - a;
// })

// console.log(myArr);

// sort => convert array into alphanumeric function

// let myArr = [5, 9, 8, 1, 2];

// let copyArray = myArr.toSorted();          // toSorted or reverse function array ki copy

// console.log(copyArray);


// arrow function or fat function

// function myFunc() { return 'a' };

// () => 'a';

// function myFunc(a) { return a };

// a => a;

// function myFunc(a, b, c = 0) {
//     console.log(a + b + c);
// }

// myFunc(1, 2, 3);



// function myFunc(name = 'Dear') {
//     console.log(`Hi ${name}`);
// }

// myFunc('Usama');
// myFunc();


// function myFunc(age, name = 'Dear', gender) {
//     console.log(`Hi ${name}, You are ${age}. and you are a ${gender}`);
// }

// myFunc(20, 'Usama', 'male');
// myFunc(21, undefined, 'female');


// function myFunc(a, ...rest) {
//     console.log(a, rest);
// }

// myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);


// function myFunc(first, second, third, ...rest) {
//     console.log(first, second, third, rest);
// }

// myFunc('Usama', 'Ahmed', 'Ali', 'Usman', 'Hamza');


// const myArr = [1, 2, 3, 4, 5];

// const myArr2 = [...myArr, 6, 7, 8];

// console.log(myArr2);


// const myObj = { name: 'usama', age: 20 }

// const myObj2 = { ...myObj, gender: 'male' }

// console.log(myObj2);


const myObj = { name: 'usama', age: 20 }

const myObj2 = { ...myObj, gender: 'male' }

console.log(myObj2);

// Assignment user details and edit








// June 23 , 2024                                          Sunday

/*
function findFactorial(n) {
    if(n === 1) return 1;
    return n * findFactorial(n - 1);
}

let returnValue = findFactorial(4);

console.log(returnValue);
*/


// closures   lexical scope this keyword child have parent scope

/*
function myClosure() {
    var encryptedPW = 'usama';

    return function() {
        console.log(encryptedPW);
    }
}

const password = myClosure();

password;

// console.log(password);
*/

/*
const myArr = [[1, 2], [3, 4], [5, 6]];   // only first depth

const result = myArr.flat();

console.log(result);
*/

/*
const myArr = [[1, 2], [3, 4], [5, 6]];

const result = myArr.join('_');     // _ | -

console.log(result);
*/

/*
const myArr = '1234';

const result = myArr.split();

console.log(result);
*/

/*
const myArr = [[1, 2], [3, 4], [5, 6]];

const result = myArr.reverse();

console.log(result);
*/

// some , include

/*
let myArr = [1, 2, 3, 4];

let result = myArr.includes(1);

console.log(result);
*/

/*
const myArr = [
    { id: 5, name: 'usama' },
    { id: 6, name: 'usman' },
    { id: 4, name: 'unaiz' },
    { id: 1, name: 'usama' }
]

let result = myArr.some(function(items) {
    return myArr.items === 1;
})

console.log(result);
*/

/*
const myArr = [[1, 2], [3, 4], [5, 6]];

const result = myArr.flat();

const accumelated = result.reduce(function(acc, curr, index) {
    console.log(acc, curr, index);

    return acc + curr;
}, 0)                      // any value you want 5, 7... , and no value are accepted
*/

/*
const myArr = [[1, 2], [3, 4], [5, 6]];

const result = myArr.flat();

const myVar = result.forEach(function(items) { return items * 2; })

console.log(myVar);
*/

// high order function map, forEach





// June 22 , 2024                                          Saturday

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



// recursive => attempt then move , same function invoke , best case bhi dena parta h

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


// recursive multiple core


// Assignment filter