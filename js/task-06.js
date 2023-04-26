const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputEl);

function onInputEl() {
  if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
