// Fonksiyonlar ile Calismak

function hello() {
  console.log('Merhaba Dunya');
}
hello();

function greetings(name) {
  console.log(`Merhaba ${name ? name : ''}`);
}
greetings('Kayra');

function greetings_v2(firstName, lastName) {
  console.log(
    `Merhaba ${firstName ? firstName : ''} ${lastName ? lastName : ''}`
  );
}
greetings_v2('Lorem', 'Ipsum');

function greetings_v3(firstName = '', lastName = '', age = 18) {
  console.log('greetings_v3');
  console.log(`Merhaba ${firstName} ${lastName} -> ${age}`);
}
greetings_v3('Lorem', 'Ipsum');

function multiply(num1, num2) {
  num1 * num2;
}

multiply(10, 20);

function selectHtmlItemAddInformation(element, info) {
  document.querySelector(element).innerHTML = info;
}
selectHtmlItemAddInformation('#title', 'Merhaba Dunya');

// Return Kullanimi
function multiplyWithReturn(num1, num2) {
  // const result = num1 * num2;
  // return result;
  return num1 * num2;
}

const result = multiplyWithReturn(10, 30);
// console.log(result);

// function sayHelloToUser() {
//   let user;
//   user = prompt('adiniz: ');
//   return user;
// }

// const user = sayHelloToUser();
// console.log(user);

function sayHelloToLorem() {
  const user = prompt('adiniz: ');
  if (user === 'Lorem') {
    console.log('sayHelloToLorem', user);
    return;
  } // else {
  //   return sayHelloToLorem();
  // }
  return sayHelloToLorem();
}
// sayHelloToLorem();
