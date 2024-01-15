const userId = prompt('tc no giriniz');
const userAge = prompt('yasinizi giriniz');

// TC length 11 olacak

if (userId.length !== 11) {
  console.log('tc no bilgisi dogru olmayabilir');
} else if (userId.length === 11 && userAge >= 18 && userAge <= 99) {
  console.log('siteye girebilirsiniz');
} else if (userId.length === 11 && userAge < 18) {
  console.log('siteye giremezsiniz cunku 18 yasindan kucuksunuz');
}
