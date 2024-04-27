// let fruits = [];

// function addList() {
//     let listItems = document.getElementById('list').value;
//     fruits.push(listItems);

//     document.getElementById('container').innerHTML = fruits;
//     console.log(fruits);
// }


let teamList = [];
let userName;

function login() {
    userName = document.getElementById('getUserName').value;
    document.getElementById('loginUserName').innerHTML = userName;
    document.getElementById('login').style.display = 'none';
    console.log(userName);

    let selectTeamDiv = document.getElementById('selectTeam');
    selectTeamDiv.classList = 'show';
}

function teamPick(id) {
    let showOppo = document.getElementById('oppoteam');
    showOppo.classList = 'show';

    let hideyourteam = document.getElementById('yourteam');
    hideyourteam.classList = 'hide';

    let selectedDivGray = document.getElementById(id);
    selectedDivGray.classList.add('selected');

    let selectedTeam = document.getElementById(id).innerHTML;
    teamList.push(selectedTeam);
    console.log(teamList);

    if(teamList.length > 2) {
        teamList.pop();
        document.getElementById('selectTeam').classList = 'hide';
        document.getElementById('selectTeam').classList = 'hide';
    }
}

function startToss() {
    document.getElementById('selectTeam').style.display = 'none';

    let starttoss = document.getElementById('startToss');
    starttoss.classList = 'show';
}

function Toss() {
    let randomNumber = parseInt(Math.random() * 2);

    console.log(randomNumber);

    if(randomNumber == '1') {
        alert('You Won');
        document.getElementById('won').classList = 'show';
        document.getElementById('startToss').classList = 'hide';
    }
    else {
        alert('You loss');
        document.getElementById('loss').classList = 'show';
        document.getElementById('startToss').classList = 'hide';

        document.getElementById('para1').innerHTML = userName + ' team is: ' + teamList[0];
        document.getElementById('para2').innerHTML = teamList[1] + ' won the toss and decided to bat first';
        document.getElementById('startMatch').innerHTML = 'Bowling';
    }
}

function chosse(id) {
    // var optionsChosse = document.getElementById(id);
    // console.log(optionsChosse);

    if(id == 'bat') {
        document.getElementById('won').classList = 'hide';
        document.getElementById('loss').classList = 'show';

        document.getElementById('para1').innerHTML = userName + ' team is: ' + teamList[0];
        document.getElementById('para2').innerHTML = teamList[0] + ' won the toss and decided to bat first';
        document.getElementById('startMatch').innerHTML = 'Batting';
    }
    else if(id == 'bal'){
        document.getElementById('won').classList = 'hide';
        document.getElementById('loss').classList = 'show';

        document.getElementById('para1').innerHTML = userName + ' team is: ' + teamList[0];
        document.getElementById('para2').innerHTML = teamList[0] + ' won the toss and decided to bal first';
        document.getElementById('startMatch').innerHTML = 'Bowling';
    }
}

let score_list = [];
let score_list_accurate = [];
let wickets = [];

function startPlaying() {
    let score = parseInt(Math.random() * 9);
    let score_add_list = score_list.push(score);
    // console.log(score_list);

    if(score == 0) {
        document.getElementById('head1').innerHTML = 'Dot Ball';
        // alert('Dot boll');
    }
    else if(score == 1) {
        document.getElementById('head1').innerHTML = 'Just single';
        // alert('Just single');
    }
    else if(score == 2) {
        document.getElementById('head1').innerHTML = 'Couple of runs';
        // alert('Couple of runs');
    }
    else if(score == 3) {
        document.getElementById('head1').innerHTML = '3 runs';
        // alert('3 runs');
    }
    else if(score == 4) {
        document.getElementById('head1').innerHTML = 'Boundary, 4 runs';
        // alert('Boundary, 4 runs');
    }
    else if(score == 5) {
        document.getElementById('head1').innerHTML = '5 runs';
        // alert('5 runs');
    }
    else if(score == 6) {
        document.getElementById('head1').innerHTML = 'Boundary, 6 runs';
        // alert('Boundary, 6 runs');
    }
    else if(score == 7) {
        document.getElementById('head1').innerHTML = 'Bowled';
        // alert('Bowled');
    }
    else if(score == 8) {
        document.getElementById('head1').innerHTML = 'Caught OUT';
        // alert('Caught OUT');
    }
    else if(score == 9) {
        document.getElementById('head1').innerHTML = 'Run OUT';
        // alert('Run OUT');
    }


    if(score < 7) {
        score_list_accurate.push(score);
        console.log(score_list_accurate);
    }

    if(score > 6) {
        score_list_accurate.pop();
        score_list_accurate.push('w');
        wickets.push('w');
        console.log(wickets);
    }

    if(score_list_accurate.length > 6) {
        document.getElementById('startMatch').style.display = 'none';
    }

    document.getElementById('para3').innerHTML = score_list_accurate;
}



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

let myArray = [2, 3, 4, 'usama', true, 2, false, [], {}, 2, 6, 7, 9, 0, 3];
let counter = 0;

for(let i = 0; i < myArray.length; i++) {
    let myArrayType = myArray[i];

    if(typeof myArrayType === "number") {
        counter++;
    }
}

console.log(counter);
