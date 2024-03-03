const paragraphText = document.querySelectorAll('.text');
const buttonElement = document.querySelectorAll('button');

// paragraphText ve buttonElement degiskenleri nodeList olduğundan bunları Array.from methodu ile normal Array yapisina cevirdim.
const paragraphArr = Array.from(paragraphText);
const buttonArr = Array.from(buttonElement);

paragraphArr.forEach((item) => {
  item.classList.add('paragraph-none');
});

const handleClick = (pElement) => {
  buttonArr.forEach((item, index) => {
    item.classList.add('button-primary-color');
    item.addEventListener('click', () => {
      classControl(pElement[index], item);
    });
  });
};

const classControl = (elementIndex, item) => {
  if (elementIndex.classList.contains('paragraph-none')) {
    elementIndex.classList.remove('paragraph-none');
    elementIndex.classList.add('paragraph-blocks');
    item.innerHTML = '<span>-</span>';
    item.classList.remove('button-primary-color');
    item.classList.add('button-secondary-color');
  } else {
    elementIndex.classList.remove('paragraph-block');
    elementIndex.classList.add('paragraph-none');
    item.innerHTML = '<span>+</span>';
    item.classList.add('button-primary-color');
    item.classList.remove('button-secondary-color');
  }
};

handleClick(paragraphArr);
