const cardButtons = document.querySelectorAll('.card button');

function handleCardClick(event) {
  console.log('I just clicked the freaking button');
  const button = event.currentTarget;
  const card = button.closest('.card');
  console.log(card);
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardClick)
);
