console.log('IT WORKS!');

const watch = document.querySelector('.watch');
const acceptButton = document.querySelector('.accept');

function observerCallback() {
  acceptButton.removeAttribute('disabled');
}

const observer = new IntersectionObserver(observerCallback);

watch.addEventListener('scroll', event => {
  console.log('I just passed watch element');
  console.log(event.currentTarget);
  console.log(observer);
});

observer.observe(watch);
