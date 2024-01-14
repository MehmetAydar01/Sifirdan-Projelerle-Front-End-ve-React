// JSDoc Ornegi

/**
 * Fonksiyonun Aciklama Bilgisi
 * @param {number} num1
 * @param {number} num2
 * @returns
 */
function sum(num1, num2) {
  return num1 + num2;
}

/**
 * Add String to List
 * @param {Array} users
 * @param {string} user
 * @returns
 */
function addToList(users, user) {
  console.log(users.length);
  users.push(user);
  return users;
}
