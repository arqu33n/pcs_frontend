const form = document.querySelector(`.form`);
const button = form.querySelector(`.form__login-button`);
// const email = document.getElementById(`email-input`);
// const password = document.getElementById(`password-input`);
// const rulesConfirmation = document.getElementById(`checkbox-input`);

form.addEventListener(`submit`, function (event) {
  event.preventDefault();

  function emailValidation(value) {
    let txt =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return txt.test(value);
  }
  function checkEmail() {
    const email = document.getElementById(`email-input`);
    if (!email.value) {
      const emailError = document.querySelector(`.email__error`);
      const emailLabelError = document.querySelector(`.input__label`);
      emailError.classList.add(`email__error_visible`);
      email.classList.add(`form__input_error`);
      emailLabelError.classList.add(`input__label_error`);
    } else if (emailValidation(email.value) === false) {
      const emailInvalid = document.querySelector(`.email__invalid`);
      emailInvalid.classList.add(`email__invalid_visible`);
      const emailLabelError = document.querySelector(`.input__label`);
      emailLabelError.classList.add(`input__label_error`);
      email.classList.add(`form__input_error`);
      const emailError = document.querySelector(`.email__error`);
      emailError.classList.remove(`email__error_visible`);
    } else {
      console.log(`email:`, email.value);
      const emailError = document.querySelector(`.email__error`);
      const emailLabelError = document.querySelector(`.input__label`);
      const emailInvalid = document.querySelector(`.email__invalid`);
      emailInvalid.classList.remove(`email__invalid_visible`);
      emailError.classList.remove(`email__error_visible`);
      email.classList.remove(`form__input_error`);
      emailLabelError.classList.remove(`input__label_error`);
    }
  }
  checkEmail();

  function checkPass() {
    const password = document.getElementById(`password-input`);
    if (!password.value) {
      const passwordError = document.querySelector(`.password__error`);
      passwordError.classList.add(`password__error_visible`);
      const passwordLabelError = document.querySelector(`.input__label_pass`);
      passwordLabelError.classList.add(`input__label_pass_error`);
      password.classList.add(`form__input_error`);
    } else if (password.value.length < 8) {
      const passwordError = document.querySelector(`.password__error`);
      passwordError.classList.remove(`password__error_visible`);
      const passwordInvalid = document.querySelector(`.password__invalid`);
      passwordInvalid.classList.add(`password__invalid_visible`);
      const passwordLabelError = document.querySelector(`.input__label_pass`);
      passwordLabelError.classList.add(`input__label_pass_error`);
      password.classList.add(`form__input_error`);
    } else {
      console.log(`password:`, password.value);
      const passwordError = document.querySelector(`.password__error`);
      passwordError.classList.remove(`password__error_visible`);
      const passwordLabelError = document.querySelector(`.input__label_pass`);
      passwordLabelError.classList.remove(`input__label_pass_error`);
      password.classList.remove(`form__input_error`);
      const passwordInvalid = document.querySelector(`.password__invalid`);
      passwordInvalid.classList.remove(`password__invalid_visible`);
    }
  }
  checkPass();

  function checkCheckbox() {
    const rulesConfirmation = document.getElementById(`checkbox-input`);
    if (rulesConfirmation.checked) {
      console.log(`Rules confirm:`, rulesConfirmation.value);
      console.log(`---------`);
      const checkboxError = document.querySelector(`.checkbox__error`);
      checkboxError.classList.remove(`checkbox__error_visible`);
      rulesConfirmation.classList.remove(`form__checkbox-input_error`);
      const checkboxLabelError = document.querySelector(
        `.input__label_thin_mark`
      );
      checkboxLabelError.classList.remove(`input__label_thin_error`);
    } else {
      const checkboxError = document.querySelector(`.checkbox__error`);
      checkboxError.classList.add(`checkbox__error_visible`);
      rulesConfirmation.classList.add(`form__checkbox-input_error`);
      const checkboxLabelError = document.querySelector(
        `.input__label_thin_mark`
      );
      checkboxLabelError.classList.add(`input__label_thin_error`);
    }
  }
  checkCheckbox();
});
