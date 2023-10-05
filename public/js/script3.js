import { checkInputs } from "./modules/functions.js";

let userName = document.querySelector("#user-name");
let userPassword = document.querySelector("#user-password");
let submitButton = document.querySelector("#submit-button");
let invalidMessage = document.querySelector('#invalid-message-login');




userName.addEventListener('mouseout', function () {
  checkInputs(
    userName.value, 
    userPassword.value, 
    submitButton);
});

userPassword.addEventListener('mouseout', function () {
  checkInputs(
    userName.value, 
    userPassword.value, 
    submitButton);
});

userName.addEventListener('focus', function () {
  removeWarning()
})

userPassword.addEventListener('focus', function () {
  removeWarning()
})


 
  let message = invalidMessage.textContent;
  
  if (message.length > 10) {
    userName.classList.add('invalid-login');
    userPassword.classList.add('invalid-login');
  } else {
    userName.classList.remove('invalid-login');
    userPassword.classList.remove('invalid-login');
    
  }
 
  function removeWarning(){
    invalidMessage.innerHTML = '';
   userName.classList.remove('invalid-login');
   userPassword.classList.remove('invalid-login');
  }