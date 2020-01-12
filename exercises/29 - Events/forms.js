const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  console.log('You clicked it');
  const shouldChangePage = confirm(
    'This website might be malicious. Do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
    // window.location = event.currentTarget.href;
  }
  console.log(shouldChangePage);
});

const signUpForm = document.querySelector('[name="signup"]');
signUpForm.addEventListener('submit', function(event) {
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signUpForm.name.addEventListener('keyup', logEvent);
signUpForm.name.addEventListener('keydown', logEvent);
signUpForm.name.addEventListener('focus', logEvent);
signUpForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo');
  }
  console.log(event.key);
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
