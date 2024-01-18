const firstName = 'Lorem';
const lastName = 'Ipsum Dolor';
const age = 29;

const user = {
  firstName: firstName,
  lastName: lastName,
  age: age,
  entries: [1, 2, 3, 4, 5],
};

const userV2 = {
  firstName,
  lastName,
  age,
  hobies: { daily: ['dans', 'egzersiz'] },
};

console.table(user);
console.table(userV2);

const input = 'firstName';
console.log(user[input]);

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car();
const car2 = new Car('Mehmet', 'Audi', 1999);
console.log(car1, car2);
console.log(car1.make, car2.make);

delete car1.make;
console.log(car1, car2);
