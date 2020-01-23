const terms = document.querySelector('.terms-and-conditions');
const acceptButton = document.querySelector('.accept');

function observerCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    acceptButton.disabled = false;
  } else {
    acceptButton.disabled = true;
  }
}

const observer = new IntersectionObserver(observerCallback, {
  root: terms,
  threshold: 1,
});

observer.observe(terms.lastElementChild);
