const registerFormDom = document.querySelector('#registerForm');

registerFormDom.addEventListener('reset', () => {
  console.log('resete basildi');
});

registerFormDom.addEventListener('submit', formSubmit);

/* Fonksiyonu asagida tanimladigimiz icin hata aldik.(Arrow func oldugundan dolayi)

  const formSubmit = (event) => {
    event.preventDefault();
    console.log('kaydet butonuna basildi');
    console.log(event.target);
  };
*/

function formSubmit(event) {
  event.preventDefault();
  console.log('kaydet butonuna basildi');
  console.log(event.target);
}
