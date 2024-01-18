// Arrow function Kullanimi

// () => {}
// () => ...

function helloFunction(name) {
  console.log(name);
}

const helloArrowFunction = (name) => {
  console.log(name);
};

const helloArrowFunctionV2 = (name) => console.log(name);

const helloArrowFunctionV4 = (a, b) => console.log(a, b);

const helloArrowFunctionV5 = (firstName, lastName) => {
  const fullName = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
  return fullName;
};

// helloArrowFunctionV2('Mehmet');

const multiplyWithReturn = (num1, num2) => {
  return num1 * num2;
};
console.log(multiplyWithReturn(5, 10));

const multiplyWithReturnV2 = (num1, num2) => num1 * num2;
console.log(multiplyWithReturnV2(3, 10));

// const user = { userName: 'Kayra' };

const userNameObj = (user) => {
  return { userName: user.toUpperCase() };
};
const returnUserName = userNameObj('Lorem');
// console.log(returnUserName);

const userNameObjV2 = (user) => ({ userName: user.toUpperCase() });
console.log(userNameObjV2('lorem'));
