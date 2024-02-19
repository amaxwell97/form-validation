const nameError = document.querySelector('#name-error');
const phoneError = document.querySelector('#phone-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

const form = document.querySelector('form');

const nameInputField = document.querySelector('#name-input');
const phoneInputField = document.querySelector('#num-input');
const emailInputField = document.querySelector('#email-input');
const messageInputField = document.querySelector('#message-input');

const submitButton = document.querySelector('#submit-button');

function handleForm(e) {
    e.preventDefault();
}

const produceError = () => {
    if ((nameInputField.value).length == 0 || (phoneInputField.value).length == 0 || (emailInputField.value).length == 0 || (messageInputField.value).length == 0) {
        const newPara = document.createElement('p');
        newPara.style.color = 'red';
        newPara.innerText = 'Please fix the errors';
        form.appendChild(newPara);
        form.addEventListener('submit', handleForm);
        setTimeout( () => {
            form.removeChild(newPara);
        }, 3000)
    }
}

submitButton.addEventListener('click', () => {
    produceError();
})

const validateName = () => {
    const name = nameInputField.value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
        nameError.innerHTML = 'Write your full name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}

nameInputField.addEventListener('keyup', () => {
    validateName()
});