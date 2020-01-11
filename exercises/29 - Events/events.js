console.log('It fucking works');
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('🐈 It got clicked!');
}

const hooray = () => console.log('Hooray');

butts.addEventListener('click', function() {
  console.log("I'm an anon");
});
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  const button = event.target;
  console.log(button);
  // console.log(button.textContent);
  // console.log('You are buying it!');
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('YOU CLIECKED THE WINDOW');
    console.log(event.target);
    console.log(event.type);
    event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mouseenter', function(event) {
  console.count(event.currentTarget);
  console.log(this);
});
// console.log(buyButtons);
// console.dir(butts);

// function buyItem() {
//   console.log('buying item');
// }

// function loopOverEachButton(buyButton) {
//   console.log('Binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// }

// buyButtons.forEach(loopOverEachButton);

// buyButtons.forEach(button =>
//   button.addEventListener('click', () => console.log('You clicked it!'))
// );
// buyButtons.addEventListener('click', buyItem);
