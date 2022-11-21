const button = document.querySelector('button');
const emailInput = document.querySelector('.email');
const form = document.querySelector('form');

button.addEventListener('click', () => {
    const input = document.querySelectorAll('input');
    const error = document.getElementsByClassName('error-msg');
    const email = emailInput.value;
    for (i = 0; i < input.length; i++) {
        input[i].classList.remove('input-error')
        error[i].classList.add('error-hide')
        if (input[i].value === '') {
            input[i].classList.add('input-error')
            error[i].classList.remove('error-hide')
        }
        else if (!validateEmail(email)) {
            input[2].classList.add('input-error')
            error[2].classList.remove('error-hide')
        }
    }
})

form.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
})

const validateEmail = (email) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}