const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener("input", onInputEl);



function onInputEl(event) {
    const size = event.currentTarget.value;
    textEl.style.fontSize = `${size}px`;
}

