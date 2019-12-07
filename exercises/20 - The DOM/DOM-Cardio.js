// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = `
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
 `;

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = ul;
// create an image
const img = document.createElement('img');
img.src = `https://picsum.photos/500`;
img.width = 250;
img.height = 250;
img.classList.add('cute');
img.alt = 'Cute Puppy';
div.appendChild(img);

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const htmlString = `
  <div class="pumpkin">
    <p>First p</p>
    <p>Second p</p>
  </div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);
ulElement.insertAdjacentHTML('beforebegin', htmlString);

// add a class to the second paragraph called warning
// remove the first paragraph

const pumpkinDiv = div.querySelector('.pumpkin');
pumpkinDiv.children[1].classList.add('warning');
pumpkinDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  return `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their height is ${height} and they are ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button" aria-label="Close Card Box">&times; Delete</button>
    </div>
  `;
}

const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');
console.log(cardsDiv);
let cardsHTML = generatePlayerCard('lena', 17, 5.3);
cardsHTML += generatePlayerCard('tim', 40, 4.5);
cardsHTML += generatePlayerCard('milka', 3, 1.6);
cardsHTML += generatePlayerCard('marco', 90, 9.0);

cardsDiv.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cardsDiv);
const buttons = document.querySelectorAll('.delete');
console.log(buttons);
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
buttons.forEach(button => button.addEventListener('click', deleteCard));

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
