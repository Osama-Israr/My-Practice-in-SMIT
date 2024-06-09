//  while loop , do while loop , callback function , promise                   June 2 , 24

// const isFlag = false;
// let myArray = ['usama', 'ali']
// let i = 0;

// while (condition) {
    
// }


// function myFunc(num, cbk) {
//     console.log(num, ' my num');

//     cbk();
// }

// myFunc(20, function() {
//     console.log('This is Callback function!');
// })


// Pormises

// const result = new Promise(function(resolve, reject) {
//     let foundDahi = false;

//     if(foundDahi) {
//         resolve('Found Dahi!');
//     }
//     else {
//         reject('404 error dahi not found, dahi loss on the way!');
//     }
// })

// result.then(function(value) {
//     console.log(`then method or resolve ${value}`);
// })
// .catch(function(error) {
//     console.log(`catch method or error ${error}`);
// })



// const result = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let foundDahi = false;

//         if(foundDahi) {
//             resolve('Found Dahi!');
//         }
//         else {
//             reject('404 error dahi not found, dahi loss on the way!');
//         }
//     }, 2000)
// })

// console.log(result);

// result.then(function(value) {
//     console.log(`then method or resolve ${value}`);
// }).catch(function(error) {
//     console.log(`catch method or error ${error}`);
// })


const result = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let dataFound = false;

        if(dataFound) {
            resolve('Data Found!');
        }
        else {
            reject('404 error!, Data Not Found');
        }
    }, 2000)
})

console.log(result);

result.then(function(value) {
    console.log(`then method or resolve ${value}`);
}).catch(function(error) {
    console.log(`catch method or error ${error}`);
})



// function Promise(cb) {
//     const resolve = function() {};
//     const reject = function() {};
//     cb(resolve, reject);
// }



// DOM Paradym ( callback function )                 June 1 , 24


// function myFunc(para, cb) {
//     let name = para;
//     console.log(para);

//     cb(name);
// }

// myFunc('Usama', function(name) {
//     console.log( 'Hello!' + ' ' + name + ' This is callback function!');
// });

// myFunc('Usama', postMsg)

// function postMsg() {
//     console.log( 'Hello!' + ' ' + name + ' This is callback function!');
// }



// function bakePizza() {
//   console.log("Start Baking Pizza...");
//   createDough(function (cp) {
//     spreadChicken(cp, function (chickenAndDough) {
//       spreadCheeze(chickenAndDough, function (chickenDoughCheeze) {
//         createSauce(chickenDoughCheeze);
//       });
//     });
//   });
// }

// function createDough(cb) {
//   console.log("Dough Creation Start...");
//   setTimeout(function () {
//     let pizza = "Dough";
//     console.log(pizza);
//     cb(pizza);
//   }, 3000);
// }

// function spreadChicken(createdPizza, cb) {
//   console.log("Chicken Spreading Start...");
//   setTimeout(function () {
//     let newItem = "Chicken";
//     let pizza = createdPizza + newItem;
//     console.log(pizza);
//     cb(pizza);
//   }, 3000);
// }

// bakePizza();

// function bakePizza() {
//     console.log('Start Baking Pizza!!');

//     createDough(function(para) {
//         spreadChicken(para, function(createDoughspreadChicken){})
//     });
// }

// function createDough(cb) {
//     console.log('Dough Creation start!!');

//     setTimeout(function() {
//         let pizza = 'Dough';
//         console.log(pizza);
//         cb(pizza)
//     }, 5000);
// }

// function spreadChicken(cb) {
//     console.log('Chicken Spreading Start!!');

//     setTimeout(function() {
//         let pizza = 'Chicken';
//         console.log(pizza);
//         cb(pizza)
//     }, 5000);
// }