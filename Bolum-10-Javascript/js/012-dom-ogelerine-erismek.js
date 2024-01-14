// document.title = prompt('en sevdigin dil nedir', 'JS');

document.title = 'JS -> ES6+';

// h1 icindeki bilgi
// document.getElementsByTagName('h1')[0].innerHTML;
console.log(document.getElementsByTagName('h1')[0].innerHTML);

// document.getElementById('title').innerHTML = "js"

console.log(document.getElementsByClassName('text-primary'));

// etiketle seç
const h1Element = document.querySelector('h1');
const firstTitleClass = document.querySelector('.title');
const titleId = document.querySelector('#title');

console.log(h1Element.innerHTML);
console.log(firstTitleClass.innerHTML);
console.log(titleId.innerHTML);

const appElement = document.querySelector('#app');
appElement.innerHTML = '<h2>React App Buraya Eklendi</h2>';

// ilk div icindeki p icindeki ilk span
const spanElement = document.querySelector('#info>p>span');
console.log(spanElement);

// birden fazla etiket secmek ?
const listItems = document.querySelectorAll('li.list-item');
console.log(listItems);
