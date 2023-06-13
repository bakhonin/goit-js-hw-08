import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const formInputs = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

formEl.addEventListener('input', throttle(function(evt) {
  formInputs[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formInputs));
}, 500));

function savedInputsValue(){
    const getData = localStorage.getItem(STORAGE_KEY); 
    
  if(getData){
    const { email, message } = JSON.parse(getData);
    formEl.elements.email.value = email || '';
    formEl.elements.message.value = message || '';
  } else {
    formEl.elements.email.value = '';
    formEl.elements.message.value = '';
  }
}

savedInputsValue();
formEl.addEventListener('submit',onFormSubmit);
function onFormSubmit(evt){
console.clear();
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
console.log(formInputs);
}