// Select elements on the page
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 60;

// Set up canvas for drawing
const { width } = canvas;
const { height } = canvas;
console.log(width, height);

// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'square';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
ctx.fillStyle = 'turquoise';

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  x -= MOVE_AMOUNT;
  y -= MOVE_AMOUNT;
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
