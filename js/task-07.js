const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputEl);
window.addEventListener('DOMContentLoaded', getDefaultSize);

function onInputEl(event) {
  const size = event.currentTarget.value;
  textEl.style.fontSize = `${size}px`;
}

function getDefaultSize() {
  textEl.style.fontSize = `${inputEl.value}px`;
}
