function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divContainer = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

// console.log(createButton);
let boxesArray = [];

// createButton.addEventListener("click", createBoxes(inputEl.value));






function createBoxes(amount) {
  inputEl.addEventListener("input", onInputChange)

function onInputChange() {
  return inputEl.value;
  amount = inputEl.value;
}


  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height= `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    
    boxesArray.push(divEl);
    
  }

return divContainer.append(...boxesArray);
}




createBoxes(Number(inputEl.value));
  



