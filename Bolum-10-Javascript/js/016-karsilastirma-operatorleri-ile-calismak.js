const sysPassword = 123456; // number

// const userPasswordPrompt = prompt('sifrenizi giriniz');

// console.log(userPasswordPrompt, typeof userPasswordPrompt);

const userPasswordPrompt = '123456'; // string

console.log('sifre dogru mu??', sysPassword == userPasswordPrompt);
console.log('typeof', typeof sysPassword === typeof userPasswordPrompt);
console.log(
  'sifre ve veri tipi dogru mu??',
  sysPassword === userPasswordPrompt
);

const superUser = 'admin';
console.log('normal kullanici mi?', superUser != 'Ayla');

const year = 2000;

console.log('2000 yilindan buyuk mu', 2010 > year);
console.log('2000 yilindan buyuk mu', 1980 > year);

const ageLimit = 18;
const userAge = 15;
console.log('kullanici sisteme girebilir mi 18+', userAge >= ageLimit);
console.log(
  'kullanici sisteme girebilir mi 18 Yasindan kucuk olanlar',
  userAge <= ageLimit
);

const userName = 'Mine';
const userPassword = 234324325;

console.log(
  'user bilgisi 3 karakterden buyuk mu ve password var mı',
  userName.length > 3 && userPassword
);
console.log(
  'user bilgisi 3 karakterden buyuk mu veya password var mı',
  userName.length > 3 || userPassword
);
