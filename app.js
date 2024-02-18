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
    if (nameInputField.value == '' || phoneInputField.value == '' || emailInputField.value == '' || messageInputField.value == '') {
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

const enteredBadName = () => {
    let usersName = (nameInputField.value).toLowerCase();
    let blankSpaceIndex = usersName.indexOf(' ');
    
    if (usersName == '') {
        
    } else if () {

    } else if (userName[(blankSpaceIndex + 1)] == '' || userName[(blankSpaceIndex + 1)] == ' ') {

    }

    // Working to display "Name is required" or "Please enter full name" if the user has not done so
}

submitButton.addEventListener('click', () => {
    enteredBadName();
    produceError();
})