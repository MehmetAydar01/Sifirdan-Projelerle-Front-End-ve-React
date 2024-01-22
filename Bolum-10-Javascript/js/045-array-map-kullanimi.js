// map kullanimi

const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map((num) => num * 10);
const newNumbers = numbers.map((num) => {
  // obje donmesini istedik..
  return { number: num * 10 };
});
console.log(newNumbers);

const users = [
  'hakan@js.com',
  'ayla@gmail.com',
  'utku@hotmail.com',
  'kaan@mdn.com',
  'levent@react.com',
  'hilal@python.com',
  'duru#vanillajs.com',
];

// {name: "hakan", domain: "js.com", userName, length: 12, isValid: true}

const newUsers = users.map((item) => {
  const domain = item.slice(item.search('@') + 1);
  const name = item.slice(0, item.search('@'));
  if (item.search('@') > 0) {
    return {
      name,
      domain,
      length: item.length,
      isValid: true,
    };
  }
  return {
    userName: item,
    length: item.length,
    isValid: false,
  };
});
console.log('newUsers', newUsers);

const validUsers = newUsers.filter((item) => item.isValid);
console.log('validUsers', validUsers);

// Birleşik Kullanim

const filteredValidUsers = users
  .filter((item) => item.search('@') > 0)
  .map((item) => {
    const domain = item.slice(item.search('@') + 1);
    const name = item.slice(0, item.search('@'));
    return {
      name,
      domain,
      length: item.length,
      isValid: true,
    };
  });
console.log('filteredValidUsers', filteredValidUsers);

// 100 Adet li item nasil olusturulur?
// Bonus Bilgi: React'ta Isimize Yarayacak ;)

// 1.Yol
const newLiItems = [...Array(100)].map(
  (emptyItem, index) => `<li>Item ${index + 1}</li>`
);
console.log(newLiItems);

// 2.Yol --> From Kullanarak
// const newLiItems = [...Array.from({ length: 100 })].map(
//   (emptyItem, index) => `<li>Item ${index + 1}</li>`
// );
// console.log(newLiItems);
