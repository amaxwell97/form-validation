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

submitButton.addEventListener('click', () => {
    produceError();
})