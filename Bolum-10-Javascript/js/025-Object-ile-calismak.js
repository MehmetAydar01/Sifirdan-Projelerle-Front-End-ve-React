// Object ile Calismak

const person = {
  firstName: 'Tugra',
  lastName: 'JavaScript',
  'last login': '2023/01/01',

  'register-date': '2022/01/01',
  // bunu kullan ;)
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  fullNameV2: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.firstName);
console.log(person['lastName']);
console.log(person['last login']);
console.log(person['register-date']);

person.age = 22;

person['last-time-changed-password'] = '2023/01/01';

person.firstName = 'Moca';
person['lastName'] = 'ES6+';

console.log(person);

console.log(person.fullName());
console.log(person.fullNameV2());

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

const product = {
  isInStock: false,
  price: 0,
  tax: 1.18,
  priceWithTax: function () {
    return this.price * this.tax;
  },
};

const iPad = Object.create(product);
iPad.name = 'iPad Pro';
iPad.price = 100;
iPad.isInStock = true;

console.log(iPad);
console.log(iPad.priceWithTax());
