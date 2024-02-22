//Assigning error ids to variables
const nameError = document.querySelector('#name-error');
const phoneError = document.querySelector('#phone-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');
const formError = document.querySelector('#form-error');

//Assigning the form element to a variable
const form = document.querySelector('form');

//Assigning the inputs to variables
const nameInputField = document.querySelector('#name-input');
const phoneInputField = document.querySelector('#num-input');
const emailInputField = document.querySelector('#email-input');
const messageInputField = document.querySelector('#message-input');

//Assigning the submit input to a variable
const submitButton = document.querySelector('#submit-button');

//Validates that name field is not empty and that
//what the user input has at least one letter for the first name,
//a space, and at least one letter for the last name
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

//Validates that phone field is not empty and that
//what the user input contains all integers and
//that the number is exactly 10 digits
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

//Validates that email field is not empty and that
//what the user input has at least 2 alphanumeric characters,
//followed by an @ sign, a period, and 2 or 3 alphanumeric
//characters at the end
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

//Validates that message field is not empty and that
//what the user input is more than 30 characters
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

//When called, this function prevents the default option
function handleForm(e) {
    e.preventDefault();
}

//Validates that the name, phone, email, and message fields
//are validated. If so, the form is submitted
const validateForm = () => {
    if (validateName() !== true || validatePhone() !== true || validateEmail() !== true || validateMessage() !== true) {
        form.addEventListener('submit', handleForm);
        formError.innerText = 'Please fix the errors';
        formError.classList.add('validate-form');
        setTimeout(() => {
            formError.style.display = 'none';
        }, 3000);
        return false;
    }
    form.removeEventListener('submit', handleForm);
}

submitButton.addEventListener('click', validateForm);