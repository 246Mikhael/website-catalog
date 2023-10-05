import { checkInputs } from "./modules/functions.js";

let regNameInput = document.querySelector('#reg-name');
let regPasswordInput = document.querySelector('#reg-password');
let regButton = document.querySelector('#reg-button');

let valueName;
let valuePassword;

regNameInput.addEventListener('mouseout', function() {

  if (this.value.length > 4) {
    valueName = this.value;
  } else {
    valueName = undefined;
  }
  checkInputs (
    valueName, 
    valuePassword, 
    regButton);
})

regPasswordInput.addEventListener('mouseout', function() {
  if ( this.value.length > 4) {
    valuePassword = this.value; 
  } else {
    valuePassword = undefined;
  }
  checkInputs (
    valueName, 
    valuePassword, 
    regButton)
})