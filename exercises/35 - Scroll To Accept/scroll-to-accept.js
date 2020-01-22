// debugger;
const terms = document.querySelector('.terms-and-conditions');
const watchForMe = document.querySelector('.watch');
const acceptButton = document.querySelector('.accept');

function observerCallback(payload) {
  // acceptButton.removeAttribute('disabled');
  console.log('meow');
}

const observer = new IntersectionObserver(observerCallback, {
  root: terms,
  threshold: 1.0,
});

observer.observe(watchForMe);
