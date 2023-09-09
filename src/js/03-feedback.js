import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const FORM_STATE_KEY = 'feedback-form-state';
const formData = {};

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FORM_STATE_KEY, JSON.stringify(formData));
}
function onPageLoad() {
  const savedFeedbackForm = JSON.parse(localStorage.getItem(FORM_STATE_KEY));
  for (let key in savedFeedbackForm) {
    formRef[key].value = savedFeedbackForm[key];
    formData[key] = savedFeedbackForm[key];
  }
}
function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FORM_STATE_KEY)));
  localStorage.removeItem(FORM_STATE_KEY);
  event.currentTarget.reset();
}

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));
window.addEventListener('load', onPageLoad);
