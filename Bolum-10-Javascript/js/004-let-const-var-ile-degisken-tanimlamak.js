// rakamla degisken isimleri baslayamaz

// let 1user = '1. user';
// console.log(1user);

let user1 = '1. user';
console.log(user1);

let user;
console.log(user);

// let user = 'Sistem user';
user = 'Sistem user';

user = 'Admin';
console.log(user);

const PASSWORD = 1234;
console.log('Sifre:', PASSWORD);

// bu hatali cunku const ile 1 kez tanımlanabilir
// PASSWORD = '4325345435435';
// console.log('Degisen Sifre:', PASSWORD);

// blok icinde tekrar ayni isimler kullanilabilir
{
  let user = 'Duygu';
  console.log('blok icinde:', user);

  const PASSWORD = '43242341412-4214241221';
  console.log('blok icinde:', PASSWORD);
}

console.log(user);
console.log('Sifre:', PASSWORD);

console.log('39.satirdaki bilgiye erisebilir miyiz??', userName);

var userName = '39.satirdaki bilgi';
console.info('userName:', userName);

{
  userName = 'Blok icindeki bilgi';
  console.info('userName Blok:', userName);
}

// degisken isimlerini lutfen anlamli olmasini saglayalim
let i = '1'; // bunu kullanmayalim
let x = 'info'; // bunu kullanmayalim

// bool -> laptop kullaniyor musun? evet / hayir
// macOs kullaniyor musun? evet / hayir
// yazilimci misin? evet / hayir

// isMacOsUser = true;
// isLaptopUser = false;
// hasPassword = true;
