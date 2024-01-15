// Diziler -> Array

const users = [999, 2999, 3999, false, true, null, [4, 5, 6], 'Deniz', 'Derya'];

console.log(users);
console.log(users.length);

const otherUsers = [];
console.log(otherUsers.length);

const tech = new Array(100);
console.log('tech.length', tech.length);
console.log('tech', tech);

const todo = new Array('item 1', 'item 2');
console.log('todo', todo);

console.log('type bilgisi nedir? : ', typeof users);
console.log('{} Obj -> type bilgisi nedir? : ', typeof {});

console.log('Array misin :) ', Array.isArray(users));

// Bilgiye Erismek:
console.log(users[0], users[3], users[7]);
console.log(users[users.length - 1]);
console.log(users[users.length - 2]);

// Yeni Oge Eklemek:
// Sona Eklemek
users.push('Lorem');
console.log(users);

// Basa Eklemek
users.unshift('ilk siraya eklenen oge');
console.log(users);

// Bilgi Degistirmek
users[3] = 'fdsfdsfsd';
console.log(users[3]);
console.log(users);

// Bir Ogeyi Silmek
// sondaki
const popItem = users.pop();
console.log(users);
console.log(popItem);

// bastaki
const firstItem = users.shift();
console.log(users);
console.log(firstItem);
