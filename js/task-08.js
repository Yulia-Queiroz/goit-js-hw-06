const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('[name ="email"] '),
password: document.querySelector('[name = "password"]'),
    button: document.querySelector('button'),
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (refs.email.value === '' || refs.password.value === '') {
        return alert('Заполните все поля')
    }

    const formEl = event.currentTarget.elements;

    const email = formEl.email.value;
    const password = formEl.password.value;

    const formData = {
        email,
        password,
    }
    console.log(formData);

    refs.form.reset();
    }
