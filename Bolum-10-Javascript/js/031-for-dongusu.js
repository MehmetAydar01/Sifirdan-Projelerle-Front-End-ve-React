// for dongusu

for (let count = 0; count < 5; count++) {
  console.log(count);
}

for (let count = 10; count <= 100; count += 10) {
  console.log(count);
}

const users = ['Ayla', 'Ahmet', 'Mehmet', 'Burcin', 'Hilal'];
console.log('-------------------------------');

for (let userCount = 0; userCount < users.length; userCount++) {
  if (userCount == 2) {
    continue; // 2 olan kullaniciyi gorunce es gec.. ->
  }
  if (users[userCount] === 'Ahmet') {
    break; // for dongusunden ciktik
  }
  console.log(userCount);
  console.log(users[userCount]);
}
