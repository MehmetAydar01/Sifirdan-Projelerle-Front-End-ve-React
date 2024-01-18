// Events

const btn = document.querySelector('#hideTitle');

/* 1.Yontem
btn.addEventListener('click', toggleTitle);

function toggleTitle() {
  const h1Element = document.querySelector('#title');
  h1Element.classList.toggle('d-none');
}
*/

/* 2.Yontem
btn.addEventListener('click', function () {
  const h1Element = document.querySelector('#title');
  h1Element.classList.toggle('d-none');
});
*/

btn.addEventListener('click', () => {
  const h1Element = document.querySelector('#title');
  h1Element.classList.toggle('d-none');
});

const h1Element = document.querySelector('#title');

h1Element.addEventListener('mouseenter', () => {
  console.log('icerdeyiz');
  document.body.classList.add('bg-dark', 'bg-opacity-50');
  h1Element.classList.add('bg-light');
});

h1Element.addEventListener('mouseout', () => {
  console.log('disardayiz');
  document.body.classList.remove('bg-dark', 'bg-opacity-50');
  h1Element.classList.remove('bg-light');
});
