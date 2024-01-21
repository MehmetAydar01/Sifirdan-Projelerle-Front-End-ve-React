const hexInputContainer = document.querySelector('#hexInputContainer');
const hexForm = document.querySelector('#hexColorForm');
const addNew = document.querySelector('#addNew');
let counter = 1;

addNew.addEventListener('click', () => {
  console.log('click');
  counter += 1;

  hexInputContainer.append(newHexColorInput(counter));
});

// NEW HEX COLOR INPUT
function newHexColorInput(itemCount) {
  const newDivElement = document.createElement('div');
  newDivElement.classList.add('col-sm');

  newDivElement.innerHTML = `
    <label for='colorInput-${itemCount}' class='form-label'>
      HEX COLOR
    </label>
    <input
      id='colorInput-${itemCount}'
      type='text'
      minlength='7'
      maxlength='7'
      class='form-control'
      name='color-${itemCount}'
    />
  `;
  return newDivElement;
}

hexInputContainer.append(newHexColorInput(counter));

// LOCAL STORAGE
let localStorageColors = localStorage.getItem('colors')
  ? JSON.parse(localStorage.getItem('colors'))
  : [];
const colorCards = document.querySelector('#colorCards');

hexForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let colors = [];
  Array.from(event.target.elements).forEach((item) => {
    if (item.type === 'text') {
      colors.push(item.value);
    }
  });
  localStorageColors.push(colors);
  colorCards.append(addColorPalette(colors));

  localStorage.setItem('colors', JSON.stringify(localStorageColors));
  hexForm.reset();
});

if (localStorageColors.length) {
  localStorageColors.forEach((colors) => {
    colorCards.append(addColorPalette(colors));
  });
}

function addColorPalette(items) {
  const rowElement = document.createElement('div');
  rowElement.classList.add('row', 'gap-3', 'my-3');

  items.forEach((item, index) => {
    rowElement.dataset.id = index;
    const cardItem = document.createElement('div');
    cardItem.classList.add('col-sm', 'card', 'colorCard');
    cardItem.style.backgroundColor = item;
    rowElement.append(cardItem);
  });

  return rowElement;
}

const colorCardItems = document.querySelectorAll('.colorCard');

colorCardItems.forEach((colorCard) => {
  colorCard.addEventListener('click', () => {
    // console.log(colorCard.style.backgroundColor);

    // Clipboarda background color bilgisinin eklenmesi
    navigator.clipboard.writeText(colorCard.style.backgroundColor);
    alert(`${colorCard.style.backgroundColor} rengi kopyalandi`);
  });
});
