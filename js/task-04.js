let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

buttonDecrement.addEventListener('click', onButtonDecrementClick)

buttonIncrement.addEventListener('click', onButtonIncrementClick);

function onButtonDecrementClick() {
    counterValue -= 1;
    return counterEl.textContent = counterValue;
}

function onButtonIncrementClick() {
    counterValue += 1;
    return counterEl.textContent = counterValue;
}