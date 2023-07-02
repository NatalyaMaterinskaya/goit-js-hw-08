import throttle from 'lodash.throttle';
const userData = {};

const formEl = document.querySelector('.feedback-form');
const dataFromStorage = localStorage.getItem('feedback-form-state');

const handleInput = event => {
    console.log(event);
    userData.email = event.target.value;
    userData.message = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

if (dataFromStorage) {
  const parsedDataFromStorage = JSON.parse(dataFromStorage);
  formEl.elements.email.value = parsedDataFromStorage.email;
  formEl.elements.message.value = parsedDataFromStorage.message;
}

formEl.addEventListener('input', throttle(handleInput, 1000));

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value.trim() === '') {
    alert('Please fill in all the fields!');
  } else {
    (userData.email = email.value),
      (userData.message = message.value),
      console.log(userData);
    localStorage.clear();
    event.currentTarget.reset();
    formEl.lastElementChild.disabled = true;
  }
};

formEl.addEventListener('submit', handleSubmit);
