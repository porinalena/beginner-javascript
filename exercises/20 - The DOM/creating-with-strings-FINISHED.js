const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup <img onload="alert('HaCKED!@@')" src="https://picsum.photos/50/"`;
const myHTML = `
<div class ="wrapper">
  <h2>Cute ${desc}</h2>
  <img src="${src}" alt="${desc}"/>
  </div>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.appendChild(myFragment);
// console.log(myFragment.querySelector('img'));
// console.log(myFragment);

// console.log(myHTML.classList);
// console.log(typeof myHTML);
// item.innerHTML = myHTML;
// console.log(item.innerHTML);

// const itemImage = document.querySelector('.wrapper img');
// console.log(itemImage);
// itemImage.classList.add('round');

// const item = document.querySelector('.item');

// const width = 500;
// const src = `https://picsum.photos/${width}`;
// const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;
// const myHTML = `
//   <div class="wrapper">
//     <h2>Cute ${desc}</h2>
//     <img src="${src}" alt="${desc}"/>
//   </div>
// `;

// // turn a string into a DOM element
// const myFragment = document.createRange().createContextualFragment(myHTML);

// document.body.appendChild(myFragment);
