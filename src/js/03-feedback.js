import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const dataFromStorage = localStorage.getItem('feedback-form-state');
let userData = {};

if (dataFromStorage) {
  const parsedDataFromStorage = JSON.parse(dataFromStorage);
  formEl.elements.email.value = parsedDataFromStorage.email ?? '';
  formEl.elements.message.value = parsedDataFromStorage.message ?? '';
  userData.email = parsedDataFromStorage.email;
  userData.message = parsedDataFromStorage.message;
}


const handleInput = event => {

  switch (event.target.nodeName) {
    case 'INPUT':
      userData.email = event.target.value;
      break;
    case 'TEXTAREA':
      userData.message = event.target.value;
      break;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value.trim() === '') {
    alert('Please fill in all the fields!');
  } else {
    console.log(userData);
    userData = {};
    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
  }
};

formEl.addEventListener('input', throttle(handleInput, 500));
formEl.addEventListener('submit', handleSubmit);
