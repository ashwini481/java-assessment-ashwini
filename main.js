
const form = document.getElementById('booking-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('.error-message');
  formControl.classList.add('error');
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
}

function validateName() {
  const nameValue = nameInput.value.trim();
  const regex = /^[a-zA-Z]+$/;
  if (nameValue === '') {
    setErrorFor(nameInput, 'Name cannot be blank');
    return false;
  } else if (!regex.test(nameValue)) {
    setErrorFor(nameInput, 'Name must contain only letters');
    return false;
  } else {
    setSuccessFor(nameInput);
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
    return false;
  } else if (!regex.test(emailValue)) {
    setErrorFor(emailInput, 'Invalid email format');
    return false;
  } else {
    setSuccessFor(emailInput);
    return true;
  }
}

const phoneRegex = /^\d{10}$/;

phoneInput.form.addEventListener("submit", function(event) {
  if (!phoneRegex.test(phoneInput.value)) {
    event.preventDefault();
    alert("Please enter a valid 10-digit mobile number.");
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateName() && validateEmail() && validatePhone()) {
    alert('Form submitted successfully');
    form.reset();
  }
});
function validateEmail() {
  const emailValue = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
    return false;
  } else if (!regex.test(emailValue)) {
    setErrorFor(emailInput, 'Invalid email format');
    return false;
  } else {
    setSuccessFor(emailInput);
    return true;
  }
}

function validatePhone() {
  const phoneValue = phoneInput.value.trim();
  const regex = /^[0-9]+$/;
  if (phoneValue === '') {
    setErrorFor(phoneInput, 'Phone number is required');
    return false;
  } else if (!regex.test(phoneValue)) {
    setErrorFor(phoneInput, 'Phone number must contain only numbers');
    return false;
  } else {
    setSuccessFor(phoneInput);
    return true;
  }
}

function myValidator() {
  var birthday = document.getElementById("dob").value; // Don't get Date yet...
  var regexVar = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/; // add anchors; use literal
  var regexVarTest = regexVar.test(birthday); // pass the string, not the Date
  var userBirthDate = new Date(birthday.replace(regexVar, "$3-$2-$1")); // Use YYYY-MM-DD format
  var todayYear = (new Date()).getFullYear(); // Always use FullYear!!
  var cutOff19 = new Date(); // should be a Date
  cutOff19.setFullYear(todayYear - 19); // ...
  var cutOff95 = new Date();
  cutOff95.setFullYear(todayYear - 95);
  if (!regexVarTest) { // Test this before the other tests
    dobErrMsg.innerHTML = "enter date of birth as dd/mm/yyyy";
  } else if (isNaN(userBirthDate)) {
    dobErrMsg.innerHTML = "date of birth is invalid";
  } else if (userBirthDate > cutOff19) {
    dobErrMsg.innerHTML = "you have to be older than 19";
  } else if (userBirthDate < cutOff95) {
    dobErrMsg.innerHTML = "you have to be younger than 95";
  } else {
    dobErrMs

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateName() && validateEmail() && validatePhone()) {
    alert('Form submitted successfully');
    form.reset();
  }
});

