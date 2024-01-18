// forEach dongusu

const users = ['Ayla', 'Ahmet', 'Mehmet', 'Burcin', 'Hilal'];

const serverInfo = {
  ip: '127.0.0.1',
  port: '80',
  user: 'admin',
  password: '123432453',
};

users.forEach((item) => {
  console.log(item);
});

users.forEach((user) => {
  console.log(user);
});

users.forEach((item, index) => {
  console.log(item, index);
});

console.log('Array Donuyordu Unutma --> ', Object.keys(serverInfo));

Object.keys(serverInfo).forEach((key) => {
  console.log(key);
  console.log(serverInfo[key]);
});

Object.keys(serverInfo).forEach((key) => console.log(serverInfo[key]));

console.log('---------------------------------------');

Object.entries(serverInfo).forEach(([key, value], index) => {
  console.log(key);
  console.log(value);
  console.log(index);
});
