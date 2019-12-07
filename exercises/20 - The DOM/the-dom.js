// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// console.log(heading.textContent);
// // heading.textContent = 'Wes is cool';
// // console.log(heading.textContent);
// // console.log(heading.innerText);
// console.log(heading.outerHTML);
// const pizzaList = document.querySelector('.pizza');
// // pizzaList.textContent = `${pizzaList.textContent}🍕`;

// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');
// console.log(pizzaList.textContent);

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
// pic.classList.add('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup';
pic.width = 200;
console.log(pic.naturalWidth);
pic.width = 200;
pic.addEventListener('load', function() {
  console.log(pic.width);
});

// pic.setAttribute('wes-is-cool', 'REALLY CUTE PUP');
// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);
custom.addEventListener('click', function() {
  alert(`welcome ${custom.dataset.name}
  ${custom.dataset.last}`);
});
