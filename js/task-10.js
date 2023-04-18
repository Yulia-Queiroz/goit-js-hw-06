function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divContainer = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

// console.log(createButton);
let boxesArray = [];

divContainer.classList.add('boxes_container');

createButton.addEventListener('click', createBoxes);

function createBoxes() {
  inputEl.addEventListener('input', onInputChange);

  function onInputChange() {
    return inputEl.value;
  }

  const amount = Number(inputEl.value);

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.margin = '5px';
    divEl.classList.add('box');

    boxesArray.push(divEl);
  }

  // console.log(boxesArray);
  return divContainer.append(...boxesArray);
}

destroyButton.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  const boxes = do
}
