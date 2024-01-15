// DOM icinde Yeni Oge Olusturmak..

// const todoList = document.querySelector('#todoList');
const todoList = document.querySelector('ul#todoList');

// const todoFirsItem = document.querySelector('ul>.list-item');
// const todoFirsItem = todoList.querySelector('li');
const todoFirsItem = todoList.querySelector('ul#todoList>li:first-child');
const todoLastItem = todoList.querySelector('ul#todoList>li:last-child');

console.log(todoList);
console.log(todoFirsItem);
console.log(todoLastItem);

// Hero Infoyu body icine eklemek
const heroElement = document.createElement('div');
heroElement.innerHTML = '<h1>Hero Info</h1>';
// en sona ekler: document.body.append(heroElement)
// en başa ekler: document.body.prepend(heroElement);
document.body.prepend(heroElement);

const userPrompt = prompt('yapilacak islere eklenecek bilgi');
// console.log(userPrompt);

const newTodoElement = document.createElement('li');
newTodoElement.innerText = userPrompt;

// todoList.append(newTodoElement); // sona ekler
todoList.prepend(newTodoElement); // basa ekler
