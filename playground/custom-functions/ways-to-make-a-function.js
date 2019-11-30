console.log('it works!');

function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

function(firstName) {
  return `Dr. ${firstName}`;
}

const doctorize = function(firstName) {
  return `Dr. ${firstName}`;
};

/*eslint-disable*/
const inchToCM = inches => inches * 2.54;

const add = (a, b = 3) => a + b;

function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0
  }
  return baby;
}

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

(function(age) {
  return `You are cool and age ${age}`;
})(10);

const wes = {
  name: 'wesofer bos',
  sayHi: function() {
    console.log(`Hey ${this.name}`),
    console.log('hey wes');
    return 'hey wes';
  },
  yellHi() {
    console.log('HEY');
  },
  whisperHi: () => {
    console.log('hellooooooo');
  }
}

function handleClick() {
  console.log('great clicking');
}

const button = document.querySelector('button');
console.log(button);
button.addEventListener('click', function() {
  console.log('ncie job');
});

setTimeout(() => console.log('Done! TIme to sleep!'), 5000);


// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// /* eslint-disable */
// const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// // IIFE
// // Immediately Invoked Function Expression

// (function(age) {
//   return `You are cool and age ${age}`;
// })(10);

// // Methods!!!
// const wes = {
//   name: 'Westopher Bos',
//   // Method!
//   sayHi: function() {
//     console.log(`Hey ${this.name}`);
//     return 'Hey Wes';
//   },
//   // Short hand Method
//   yellHi() {
//     console.log('HEY WESSSSS');
//   },
//   // Arrow function
//   wisperHi: () => {
//     console.log('hii wesss im a mouse');
//   }
// }

// // Callback Functions
// // Click Callback
// const button = document.querySelector('.clickMe');

// function handleClick() {
//   console.log('Great Clicking!!');
// }

// button.addEventListener('click', function() {
//   console.log('NIce Job!!!');
// });

// // Timer Callback
// setTimeout(() => {
//   console.log('DONE! Time to eat!');
// }, 1000);
