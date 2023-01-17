const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputEl);

function onInputEl() {
    if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
        return inputEl.classList.add("valid");
        
    }
    else {return inputEl.classList.add("invalid")}
    
};


