// Select elements on the page
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// Set up canvas for drawing
const { width } = canvas;
const { height } = canvas;
console.log(width, height);

// create random x and y starting points on the canvas
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'square';
ctx.lineWidth = 10;
ctx.fillStyle = 'turquoise';

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
