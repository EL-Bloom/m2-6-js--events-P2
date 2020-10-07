const formElem = document.querySelector("#signup-form");
const nameElem = document.querySelector("#full-name");
const addressElem = document.querySelector("#street-address");
const emailElem = document.querySelector("#email-address");
const phoneElem = document.querySelector("#phone-number");
const passwordElem = document.querySelector("#password");
const confirmPassElem = document.querySelector("#confirmPassword");
const termsElem = document.querySelector("#terms");
const errorMessageElem = document.querySelector("#errorMessage");

function submitForm(event) {
  event.preventDefault();

  let password = passwordElem.value;
  let confirmPass = confirmPassElem.value;
  let agreedToTerms = termsElem;

  if (!agreedToTerms) {
    window.alert("You must agree to the terms before continuing");
    return;
  }
  let errorField;
  let errorMessage;

  if (password.length < 10) {
    errorField = passwordElem;
    errorMessage =
      "Your password is too short! Please provide a password that is at least 10 characters long.";
  } else if (password !== confirmPass) {
    errorField = confirmPassElem;
    errorMessage =
      "Your passwords didn't match! Please provide the same password in each field.";
  }

  if (errorMessage && errorField) {
    errorMessageElem.style.display = "block";
    errorMessageElem.innerText = errorMessage;

    errorField.classList.add("error-field");
    errorField.focus();
    return;
  }

  alert("Success!");

  clearForm();
}

function clearForm() {
 
  passwordElem.classList.remove("errorField");
  confirmPassElem.classList.remove("errorField");

  errorMessageElem.style.display = "none";
}

formElem.addEventListener('', submitForm);
