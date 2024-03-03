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
  elementIndex.classList.toggle('paragraph-none');
  item.classList.toggle('button-secondary-color');
  if (!elementIndex.classList.contains('paragraph-none')) {
    item.innerHTML = '<span>-</span>';
  } else {
    item.innerHTML = '<span>+</span>';
  }
};

handleClick(paragraphArr);
