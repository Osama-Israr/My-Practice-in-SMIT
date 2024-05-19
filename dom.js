// May 12 , 2024
// createElement() , createTextNode() , appendChild() , firstChild


let getMainElement = document.getElementById('main');

let createP1element = document.createElement('p');

getMainElement.appendChild(createP1element);

let createP2element = document.createElement('p');

getMainElement.appendChild(createP2element);

let addTextP1 = document.createTextNode('This is first paragraph.');

createP1element.appendChild(addTextP1);

let addTextP2 = document.createTextNode('This is second paragraph.');

createP2element.appendChild(addTextP2);

console.log(getMainElement);