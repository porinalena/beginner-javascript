// debugger;
const watchForMe = document.querySelector('.watch');
const acceptButton = document.querySelector('.accept');
const hrEl = document.querySelector('hr');

function observerCallback() {
  // acceptButton.removeAttribute('disabled');
  console.log('meow');
}

const observer = new IntersectionObserver(observerCallback, {
  root: hrEl,
  threshold: 0.6,
});

watchForMe.addEventListener('scroll', function() {
  console.log('I just passed watch element');
  // console.log(event.currentTarget);
  console.log(observer);
});

observer.observe(watchForMe);
