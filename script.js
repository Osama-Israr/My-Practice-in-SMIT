// JavaScript is Interpreted Language (execute line by line)

document.write("JavaScript Connected");


// Different Cases
// var variable = "Usama";        // snake_case | camelCase
// var variableType = "Usama";    // camelCase
// var vaiable_type = "Usama";    // snake_case
// var VariableTypes = "Usama";   // PascalCase


// DataType Primitive Types
// var myString = "Usama";      // String
// var nyNumber = 20;           // Number
// var myBool = true;           // Boolean
// var myUndefined = undefined; // undefined
// var myNull = null;           // null


// DataType non-Primitive Types
// var myObject = {a:"usama", b: null, c:34};     // Object (Key value Pairs)
// var myArray = ["Usama", "Israr", 45];


// STRING



// post increment
// var mynum = 2;
// var mynum = mynum + 3;
// mynum += 3;
// mynum++;
// alert(mynum);

// pre increment
// var mynum = 2;
// mynum++;
// alert(++mynum);

// var num1 = prompt("Enter first number");
// var operator = prompt("Enter Operator");
// var num2 = prompt("Enter second number");

// parseInt(operator);
// parseInt(num1);
// parseInt(num2);

// var sum = parseInt(num1) + parseInt(num2);

// alert(sum);

// for only value check ==
// for datatype check ===

// var x = prompt("Enter Your Number: ");
// parseInt(x);

// if (x <= 10) {
//     alert("Your number less than 10");
// } else {
//     alert("Your number greater then 10");
// }

// calculator start
// var firstNumber = parseInt(prompt("Enter first number: "));
// var secondNumber = parseInt(prompt("Enter second number: "));
// var operator = prompt("Enter Operator");

// if (operator == "+") {
//     alert(firstNumber + secondNumber);
// } else if(operator == "-") {
//     alert(firstNumber - secondNumber);
// }else if(operator == "*") {
//     alert(firstNumber * secondNumber);
// }else if(operator == "/") {
//     alert(firstNumber / secondNumber);
// } else {
//     alert("Sorry you enter string");
// }
// calculator end


// var firstNumber = prompt("Enter first number: ");
// var secondNumber = prompt("Enter second number: ");

// firstNumber = parseInt(firstNumber);
// secondNumber = parseInt(secondNumber);

// if (isNaN(firstNumber)) {
//     alert("Invalid Input");
// } else if(isNaN(secondNumber)) {
//     alert("Invalid Input");
// } else {
//     alert("Valid Input");
// }

// Boolean datatype

// var userName = prompt("Enter username: ");
// var isUserEmployee = isUser === userName;

// Male female

// var religionForMale = prompt("Enter your religion: ", "Muslim Or non-Muslim");
// var religionForFemale = prompt("Enter your partner religion: ", "Muslim Or non-Muslim");

// if (religionForMale == "Muslim" && religionForFemale == "Muslim") {
//     alert("Nikkah is Valid");
// } else {
//     alert("Nikkah is Not-valid");
// }


// var bigHouse = prompt("Big house: ", "Yes");
// var bigCar = prompt("Big Car: ", "Yes");

// if (bigHouse == "Yes" || bigCar == "Yes") {
//     alert("Okay");
// }else {
//     alert("You deserved better");
// }

// Array   push, pop, unshift, shift, splice(index no, del index no, add index item), slice create new array (copy array)

// var students = ["Usama", "Umar Ali", "Umar"];
// console.log(students[0]);

// var addStudent = prompt("Student Name: ");
// students.push(addStudent);

// students.pop();
// students.splice(1, 0, "Ali", "Ali Raza");

// var newArray = students.slice(0, 2);

// console.log(students);

// console.log(newArray, students);

// for(var a = 0; a < 10; a++) {
//     console.log(a * 2);
// }


// Mar 10, 2024 (Sun)
// lower case and upper case
// var stringPascal = "PascalCase";
// var stringLower = stringPascal.toLowerCase();
// var string = stringPascal.toUpperCase();


// Math.round , Math.floor, Math.ceil (Functions for Decimal numbers)
// var myNum = 22.66;
// var myNumRound = Math.round(myNum);
// var myNumFloor = Math.floor(myNum);
// var myNumCeil = Math.ceil(myNum);

// console.log(myNum, myNumRound, myNumFloor, myNumCeil);


// Math.random (another function for number)
// var myNumRandom = Math.random();

// var freshFruits = ["Mango", "Banana", "Apple"];
// var randomFruits = Math.random() * 3;
// var fruitsName = freshFruits[Math.floor(randomFruits)];

// console.log(Math.floor(randomFruits) , fruitsName);
// alert(Math.floor(randomFruits));
// alert(fruitsName);

// TypeCasting
// parseInt and parseFloat  (Convert into number)
// .toString (Convert into string)
// toFixed()

// Basic End
// Utilization

// var, let, const
// var re-declear re-assign, let not re-declear re-assign, const not re-declear not re-assign

// Functions
// function myFunction() {
//     let userName = prompt("Enter your name: ");
//     console.log(userName);
// }

// Calling function
// myFunction();

// var myString = 'Fruits';
// var reverseString = '';

// for (let i = myString.length - 1; i >= 0; i--) {
//     reverseString += myString[i];
// }
// console.log(reverseString);


// var iIndex = -1;
// var variable1 = "Thihsh";
// console.log(variable1.lastIndexOf("h"));
// for (var i = 0; i < variable1.length; i++) {
//   if (variable1.charAt(i) === "h") {
//     iIndex = i;
//     break;
//   }
// }
// console.log(iIndex);
// console.log(variable1.charAt(0), variable1[0]);



// function myFunction() {
//     var a = 2;
//     var b = 3;
//     var c = a + b;

//     return c;
// }

// myFunction();


// function capitalize(value) {
//     var firstLetter = value.slice(0, 1);
//     var remainingLetters = value.slice(1);
//     firstLetter = firstLetter.toUpperCase();
//     remainingLetters = remainingLetters.toLowerCase();
//     var capitalizeValue = firstLetter + remainingLetters;
//     return capitalizeValue;
// }
  
// function greetUser() {
//     var userName = prompt("Enter Your Name");
//     var greetingText = "Welcome";
//     var capitalizeUserName = capitalize(userName);
//     var greetings = greetingText + " " + capitalizeUserName;
//     alert(greetings);
// }
// greetUser();


// let userName = prompt('Enter your name');

// let lengthUserName = userName.length

// if(lengthUserName < 3) {
//     prompt('Enter your valid name');
// }

// console.log(lengthUserName);

// do {
//     alert('Welcome ' + userName);
//     console.log(userName);
// } 
// while(false)


// let userNameLength = 0;
// do {
//     let userName = prompt('Enter your name');
//     userNameLength = userName.length;
// }
// while(userNameLength <= 3);



// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i++;
// }


// var myString = 'Usama';

// var newString = myString.sl(2,4);

// console.log(myString);

// console.log(newString);

// var myArray = ['Usama','Umar','Ali','Hamza','Raza','Uzair','Patanahi','Haris'];

// console.log(myArray);

// var newArray = myArray.splice(3,4);

// console.log(myArray);

// console.log(newArray);

// var newArray = myArray.shift();

// var newArray = myArray.unshift('Usman');

// console.log(newArray);



// March 31, 24

// function seeMore() {
//     const seeMoreText = document.getElementById('para-1');
//     const seeMoreButton = document.getElementById('seeMore');

//     if(seeMoreButton.innerHTML == "See more"){
//         seeMoreText.innerText = 'abc';
//         seeMoreButton.innerText = 'See less';
//     }
//     else{
//         seeMoreText.innerText = 'def';
//         seeMoreButton.innerText = 'See more';
//     }
// }



// function modaalClose() {
//     document.getElementById('modaal').style.display = 'none';
// }


// function showModaal() {
//     document.getElementById('modaal').style.display = 'block';
// }
