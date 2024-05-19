// let fruits = [];

// function addList() {
//     let listItems = document.getElementById('list').value;
//     fruits.push(listItems);

//     document.getElementById('container').innerHTML = fruits;
//     console.log(fruits);
// }


// let teamList = [];
// let userName;

// function login() {
//     userName = document.getElementById('getUserName').value;
//     document.getElementById('loginUserName').innerHTML = userName;
//     document.getElementById('login').style.display = 'none';
//     console.log(userName);

//     let selectTeamDiv = document.getElementById('selectTeam');
//     selectTeamDiv.classList = 'show';
// }

// function teamPick(id) {
//     let showOppo = document.getElementById('oppoteam');
//     showOppo.classList = 'show';

//     let hideyourteam = document.getElementById('yourteam');
//     hideyourteam.classList = 'hide';

//     let selectedDivGray = document.getElementById(id);
//     selectedDivGray.classList.add('selected');

//     let selectedTeam = document.getElementById(id).innerHTML;
//     teamList.push(selectedTeam);
//     console.log(teamList);

//     if(teamList.length > 2) {
//         teamList.pop();
//         document.getElementById('selectTeam').classList = 'hide';
//         document.getElementById('selectTeam').classList = 'hide';
//     }
// }

// function startToss() {
//     document.getElementById('selectTeam').style.display = 'none';

//     let starttoss = document.getElementById('startToss');
//     starttoss.classList = 'show';
// }

// function Toss() {
//     let randomNumber = parseInt(Math.random() * 2);

//     console.log(randomNumber);

//     if(randomNumber == '1') {
//         alert('You Won');
//         document.getElementById('won').classList = 'show';
//         document.getElementById('startToss').classList = 'hide';
//     }
//     else {
//         alert('You loss');
//         document.getElementById('loss').classList = 'show';
//         document.getElementById('startToss').classList = 'hide';

//         document.getElementById('para1').innerHTML = userName + ' team is: ' + teamList[0];
//         document.getElementById('para2').innerHTML = teamList[1] + ' won the toss and decided to bat first';
//         document.getElementById('startMatch').innerHTML = 'Bowling';
//     }
// }

// function chosse(id) {
//     // var optionsChosse = document.getElementById(id);
//     // console.log(optionsChosse);

//     if(id == 'bat') {
//         document.getElementById('won').classList = 'hide';
//         document.getElementById('loss').classList = 'show';

//         document.getElementById('para1').innerHTML = userName + ' team is: ' + teamList[0];
//         document.getElementById('para2').innerHTML = teamList[0] + ' won the toss and decided to bat first';
//         document.getElementById('startMatch').innerHTML = 'Batting';
//     }
//     else if(id == 'bal'){
//         document.getElementById('won').classList = 'hide';
//         document.getElementById('loss').classList = 'show';

//         document.getElementById('para1').innerHTML = userName + ' team is: ' + teamList[0];
//         document.getElementById('para2').innerHTML = teamList[0] + ' won the toss and decided to bal first';
//         document.getElementById('startMatch').innerHTML = 'Bowling';
//     }
// }

// let score_list = [];
// let score_list_accurate = [];
// let wickets = [];

// function startPlaying() {
//     let score = parseInt(Math.random() * 9);
//     let score_add_list = score_list.push(score);
//     // console.log(score_list);

//     if(score == 0) {
//         document.getElementById('head1').innerHTML = 'Dot Ball';
//         // alert('Dot boll');
//     }
//     else if(score == 1) {
//         document.getElementById('head1').innerHTML = 'Just single';
//         // alert('Just single');
//     }
//     else if(score == 2) {
//         document.getElementById('head1').innerHTML = 'Couple of runs';
//         // alert('Couple of runs');
//     }
//     else if(score == 3) {
//         document.getElementById('head1').innerHTML = '3 runs';
//         // alert('3 runs');
//     }
//     else if(score == 4) {
//         document.getElementById('head1').innerHTML = 'Boundary, 4 runs';
//         // alert('Boundary, 4 runs');
//     }
//     else if(score == 5) {
//         document.getElementById('head1').innerHTML = '5 runs';
//         // alert('5 runs');
//     }
//     else if(score == 6) {
//         document.getElementById('head1').innerHTML = 'Boundary, 6 runs';
//         // alert('Boundary, 6 runs');
//     }
//     else if(score == 7) {
//         document.getElementById('head1').innerHTML = 'Bowled';
//         // alert('Bowled');
//     }
//     else if(score == 8) {
//         document.getElementById('head1').innerHTML = 'Caught OUT';
//         // alert('Caught OUT');
//     }
//     else if(score == 9) {
//         document.getElementById('head1').innerHTML = 'Run OUT';
//         // alert('Run OUT');
//     }


//     if(score < 7) {
//         score_list_accurate.push(score);
//         console.log(score_list_accurate);
//     }

//     if(score > 6) {
//         score_list_accurate.pop();
//         score_list_accurate.push('w');
//         wickets.push('w');
//         console.log(wickets);
//     }

//     if(score_list_accurate.length > 6) {
//         document.getElementById('startMatch').style.display = 'none';
//     }

//     document.getElementById('para3').innerHTML = score_list_accurate;
// }



// April 20 -24 Sat   (Problem)

// let myString = 'My name is Usama Israr';

// for(let i = 0; i < myString.length; i++) {

//     let myStringWithUnderscore = myString[i];

//     if(myStringWithUnderscore === ' ') {
//         console.log('_');
//     }
//     else {
//         console.log(myStringWithUnderscore);
//     }
// }



// April 21 -24 Sun  (Problem 2)
// How many even numbers in an array find out

// const myArray = [1,2,3,4,5,6,7,8,9];

// let counter = 0;

// for(let i = 0; i < myArray.length; i++) {
//     const isEven = myArray[i] % 2 === 0;
//     if(isEven) {
//         counter++;
//     }
//     // console.log(myArray[i], isEven);
// }

// console.log(counter);



// How many odd numbers in an array find out

// const myArray = [1,2,3,4,5,6,7,8,9];

// let counter = 0;

// for(let i = 0; i < myArray.length; i++) {
//     const isOdd = myArray[i] % 2 !== 0;
//     if(isOdd) {
//         counter++;
//     }
//     // console.log(myArray[i], isEven);
// }

// console.log(counter);



// April 27 - 24    (Problem 3)
// Find out numbers of data type number in array

// let myArray = [2, 3, 4, 'usama', true, 2, false, [], {}, 2, 6, 7, 9, 0, 3];
// let counter = 0;

// for(let i = 0; i < myArray.length; i++) {
//     let myArrayType = myArray[i];

//     if(typeof myArrayType === "number") {
//         counter++;
//     }
// }

// console.log(counter);



// Assignment (Home)

// Word Counter
// let counter = 0;
// let wordCounter = 0;

// function userInput() {
//     let userMessage = document.getElementById('input').value;

//     document.getElementById('input').value = '';

//     for(let i = 0; i < userMessage.length; i++) {
//         if(userMessage[i] == " ") {
//             counter++;
//         }
//     }
//     wordCounter = counter + 1;
//     console.log(wordCounter);

//     document.getElementById('para').innerText = 'You enter ' + wordCounter + ' words';

// }



// May 04 , 24 (Problem 4)

// function numMul(number) {
//     let num = number;
//     let mul = 1;

//     for(let i = 0; i < num; i++) {
//         mul *= num;
//     }

//     console.log(mul);
// }

// numMul(10);

// let currentDate = new Date();

// currentDate.setDate(15);

// function packagePurchase() {

//     let userNum = parseInt(prompt('How many days you want to expire your package?'));

//     alert('Your Package starts from: ' + currentDate);

//     currentDate.setDate(currentDate.getDate() + userNum);

//     alert('Your package expire date: ' + currentDate);
// }


// console.log(currentDate);

// console.log(currentDate);

// console.log(currentDate.setFullYear());


// let myArray = ['usama', 2, 'asad', true, 9];


// function addElement(value) {
//     let x = myArray.length;
//     myArray[x] = value;
//     console.log(myArray);

//     // console.log(myArray.length);
// }

// addElement(7);
// addElement('str');

// addElement(1);
// console.log(myVar);

// myArray[0] = 'Ali';

// myArray[5] = 'Hamza';

// myArray[8] = 4;

// console.log(myArray);

// let myVariable = myArray[0];

// console.log(myVariable);



// let myArray2 = [];

// for(let i = 0; i < myArray.length; i++) {
//     console.log('myArray: ' + myArray[i]);

//     myArray2[i] = myArray[i];
// }

// myArray2[0] = 1;

// console.log('myArray2: ' + myArray2);




// May 10, 2024  ( Problem 5 )


// let list_of_student = [
//     { student01: 'Usama', attendence: 8 },
//     { student01: 'Zayn', attendence: 6 },
//     { student01: 'Hamza', attendence: 3 },
//     { student01: 'Usman', attendence: 8 },
//     { student01: 'Ali', attendence: 5 }
// ]

// let currentDate = new Date();
// let dob = '09-05-2004';

// let userName = {
//     name: 'Usama',
//     gender: 'Male',
//     dob: '05-09-2004',
//     currentYear: currentDate.getFullYear(),
//     getAge: function() {
//         let dob = new Date(userName.dob)
//         let i = this.currentYear - dob.getFullYear();
//         console.log(dob);
//     }
// };

// userName.getAge();


// let studentObj = {
//     name: 'Usama',
//     gender: 'male',
//     rollno: '177767',
//     age: '19',
//     course: 'web development'
// }



// May 12, 24    ( problem 6 )

// const myArray = new Array();

// const myArray = ['a','b','c','d','e'];

// function popFunc() {
//     let lastElement = myArray.length - 1;
//     myArray[myArray.length - 1];

//     return lastElement;
// }

// let runFunc = popFunc();
// console.log(myArray, runFunc);


// window.location.assign(url)
// window.location.replace(url)


// const myLocation = window.location.href;

// const myHost = window.location.hostname;

// const myPath = window.location.pathname;

// console.log('href: ' , myLocation);

// console.log('hostname: ' , myHost);

// console.log('pathname: ' , myPath);

// history.back()
// history.forward()
// history.go(-1)



// May 18, 24    ( problem 7 )                                       JITC   (just in time compilation)

// let alphabets = ['b', 'c', 'd', 'e'];

// function myUnshift() {
//     for(let i = 0; i < alphabets.length; i++) {
//         alphabets[i] = alphabets[i - 1];
//     }

//     console.log(alphabets);
// }

// myUnshift();



// May 19, 24           ( problem 8 )

// push or unshift array ki length return karta h

// const myArray = ['a', 'b', 'c', 'd', 'e'];

// const myNewArray = [];

// function myShift() {
//     const removeElement = myArray[0];

//     for(let i = 1; i < myArray.length; i++) {
//         myNewArray[i - 1] = myArray[i]
//     }
    
//     console.log(myNewArray);

//     return removeElement;
// }


// const result = myShift();

// console.log(result);


// undefined in case function invoke in variable if function does not return keyword              leet code website  or  hackerRank  problem solve atleast 10



// Constructor function

// simple object

// const smitStudent = {
//     name: 'usama',
//     fatherName: 'Israr',
//     id: 177767,
//     male: 'male',
//     course: 'WAD'
// }


// this keyword 


// for example
// const yup = {
//     isNumber: function() {},
//     isNaN: function() {},
//     isEmail: function() {},
// }

// console.log(yup.isEmail().isNumber());


// function Student(name, fatherName, id, gender, course) {
//     this.firstName = name;
//     this.fathername = fatherName;
//     this.rollNumber = id;
//     this.sex = gender;
//     this.courseName = course;
//     this.greeting = function() {
//         console.log('Hello, ' + this.firstName);
//     }
// }

// const student01 = new Student('usama', 'israr', 177767, 'male', 'WMD');

// const student02 = new Student('ali', 'haider', 177768, 'male', 'WMD');

// console.log(student01);
// student01.greeting();

// console.log(student02.greeting());



// Prototype

// function Student(name, fatherName, id, gender, course) {
//     this.firstName = name;
//     this.fathername = fatherName;
//     this.rollNumber = id;
//     this.sex = gender;
//     this.courseName = course;
// }

// Student.prototype.greeting = function () {
//     console.log(this.firstName + ' ' + greeding);
// }

// const student01 = new Student('usama', 'israr', 177767, 'male', 'WMD');

// console.log(student01);

// console.log(student01.greeding());
