const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardClick(event) {
  console.log('I just clicked the freaking button');
  const button = event.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = document.querySelector('h2').textContent;
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')} alt="${name}"></img>
  <p>${desc}</p>
  `;
  modalOuter.classList.add('open');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardClick)
);
