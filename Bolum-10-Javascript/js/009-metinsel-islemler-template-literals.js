let firstName = 'hAKan';
let lastName = 'YaLCINKaya';
let training = `Template Literals JS`;
let age = 35;

let info = `${firstName} ${lastName}`;

info = `Merhaba ${firstName.charAt(0).toUpperCase()}${firstName
  .toLowerCase()
  .slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName
  .toLowerCase()
  .slice(1)}, gelecek sene yasin ${age + 1}

  blok yazi bile yazabiliriz..
`;

console.log(`${firstName} ${lastName}`);
console.log(info);
