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
    console.log(name);

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        nameError.classList.remove('valid-input');
        return false;
    }
    if (!name.match(/^[a-zA-Z]*\s{1}[a-zA-Z]+$/)) {
        nameError.innerHTML = 'Write your full name';
        nameError.classList.remove('valid-input');
        return false;
    } 
    nameError.innerText = '\u2713';
    nameError.classList.add('valid-input');
    return true;
}

nameInputField.addEventListener('keyup', validateName);

const validatePhone = () => {
    const phoneNum = phoneInputField.value;

    if (phoneNum.length == 0) {
        phoneError.innerText = 'Phone number required';
        phoneError.classList.remove('valid-input')
        return false;
    }
    if (!phoneNum.match(/^\d+$/)) {
        phoneError.innerText = 'Only numbers are accepted';
        phoneError.classList.remove('valid-input')
        return false;
    }
    if (phoneNum.length != 10) {
        phoneError.innerText = 'Enter your full number';
        phoneError.classList.remove('valid-input')
        return false;
    }
    phoneError.innerText = '\u2713';
    phoneError.classList.add('valid-input')
    return true;
}

phoneInputField.addEventListener('keyup', validatePhone);

const validateEmail = () => {
    const email = emailInputField.value;

    if (email.length == 0) {
        emailError.innerText = 'Enter an email';
        emailError.classList.remove('valid-input');
        return false;
    }
    if (!email.match(/^\w+([\-_]*\w+)*@\w+([\-]?\w+)*\.(\w{2,3})$/)) {
        emailError.innerText = 'Email invalid';
        emailError.classList.remove('valid-input');
        return false;
    }
    emailError.innerText = '\u2713';
    emailError.classList.add('valid-input');
    return true;
}

emailInputField.addEventListener('keyup', validateEmail);

const validateMessage = () => {
    const message = messageInputField.value;

    if (message.length == 0) {
        messageError.innerText = 'Message is required';
        messageError.classList.remove('valid-input');
        return false;
    }
    if (message.length < 30) {
        messageError.innerText = '30 or more characters required';
        messageError.classList.remove('valid-input');
        return false;
    }
    messageError.innerText = '\u2713';
    messageError.classList.add('valid-input');
    return true;
}

messageInputField.addEventListener('keyup', validateMessage);