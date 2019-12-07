console.log('it works');
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'cool things';

myDiv.insertAdjacentElement('afterbegin', heading);

// const random = document.createElement('p');
// random.textContent = 'meow';

const list = document.createElement('ul');
myDiv.insertAdjacentElement('beforeend', list);
const listItem3 = document.createElement('li');
listItem3.textContent = 'three';
list.appendChild(listItem3);
const listItem1 = document.createElement('li');
listItem1.textContent = 'one';
listItem3.insertAdjacentElement('beforebegin', listItem1);
const listItem5 = document.createElement('li');
listItem5.textContent = 'five';
listItem3.insertAdjacentElement('afterend', listItem5);
const listItem2 = document.createElement('li');
listItem2.textContent = 'two';
listItem1.insertAdjacentElement('afterend', listItem2);
const listItem4 = document.createElement('li');
listItem4.textContent = 'four';
listItem5.insertAdjacentElement('beforebegin', listItem4);

const listItem6 = listItem5.cloneNode();
listItem6.textContent = 'six';
list.insertAdjacentElement('beforeend', listItem6);
