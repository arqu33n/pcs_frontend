const form = document.querySelector(`.form`);
const button = form.querySelector(`.form__login-button`);
const email = document.getElementById(`email-input`);
const emailError = document.querySelector(`.email__error`);
const emailLabelError = document.querySelector(`.input__label`);
const emailInvalid = document.querySelector(`.email__invalid`);
const password = document.getElementById(`password-input`);
const passwordError = document.querySelector(`.password__error`);
const passwordLabelError = document.querySelector(`.input__label_pass`);
const passwordInvalid = document.querySelector(`.password__invalid`);
const rulesConfirmation = document.getElementById(`checkbox-input`);
const checkboxError = document.querySelector(`.checkbox__error`);
const checkboxLabelError = document.querySelector(`.input__label_thin_mark`);

function emailValidation(value) {
  let txt =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return txt.test(value);
}

function checkEmail() {
  if (!email.value) {
    console.log(`email не введен`);
    emailError.classList.add(`email__error_visible`);
    email.classList.add(`form__input_error`);
    emailLabelError.classList.add(`input__label_error`);
  } else if (emailValidation(email.value) === false) {
    console.log(`введен невалидный email`);
    emailInvalid.classList.add(`email__invalid_visible`);
    emailLabelError.classList.add(`input__label_error`);
    email.classList.add(`form__input_error`);
    emailError.classList.remove(`email__error_visible`);
  } else {
    console.log(`email:`, email.value);
    emailInvalid.classList.remove(`email__invalid_visible`);
    emailError.classList.remove(`email__error_visible`);
    email.classList.remove(`form__input_error`);
    emailLabelError.classList.remove(`input__label_error`);
  }
}
function checkPass() {
  if (!password.value) {
    console.log(`пароль не введен`);
    passwordError.classList.add(`password__error_visible`);
    passwordLabelError.classList.add(`input__label_pass_error`);
    password.classList.add(`form__input_error`);
  } else if (password.value.length < 8) {
    console.log(`пароль содержит мало символов`);
    passwordError.classList.remove(`password__error_visible`);
    passwordInvalid.classList.add(`password__invalid_visible`);
    passwordLabelError.classList.add(`input__label_pass_error`);
    password.classList.add(`form__input_error`);
  } else {
    console.log(`password:`, password.value);
    passwordError.classList.remove(`password__error_visible`);
    passwordLabelError.classList.remove(`input__label_pass_error`);
    password.classList.remove(`form__input_error`);
    passwordInvalid.classList.remove(`password__invalid_visible`);
  }
}
function checkCheckbox() {
  if (rulesConfirmation.checked) {
    console.log(`Rules confirm:`, rulesConfirmation.value);
    console.log(`---------`);
    checkboxError.classList.remove(`checkbox__error_visible`);
    rulesConfirmation.classList.remove(`form__checkbox-input_error`);
    checkboxLabelError.classList.remove(`input__label_thin_error`);
  } else {
    console.log(`Соглашение не принято`);
    console.log(`---------`);
    checkboxError.classList.add(`checkbox__error_visible`);
    rulesConfirmation.classList.add(`form__checkbox-input_error`);
    checkboxLabelError.classList.add(`input__label_thin_error`);
  }
}

form.addEventListener(`submit`, (event) => {
  event.preventDefault();

  checkEmail();

  checkPass();

  checkCheckbox();
});
