const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  onClick();
});

function onClick() {
  const emailVal = email.value;
  const firstVal = firstName.value;
  const lastVal = lastName.value;
  const passVal = password.value;

  console.log(passVal)

  if (validateNames(firstVal)) {
    firstName.classList.remove("error")
  } else {
    firstName.classList.add("error")
  }

  if (lastVal.length > 0 && validateNames(lastVal)) {
    lastName.classList.remove("error")
  } else {
    lastName.classList.add("error")
  }

  if (validateEmail(emailVal)) {
    email.classList.remove("error")
  } else {
    email.classList.add("error")
  }

  if (validatePass(passVal)) {
    password.classList.remove("error") 
  } else {
    password.classList.add("error")
  }
}

function validateNames(name) {
  const nameRegEx = /^[a-zA-Z]*\w{1,}$/;
  return nameRegEx.test(String(name).toLowerCase());
}

function validateEmail(email) {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegEx.test(String(email).toLowerCase());
}

function validatePass(pass) {
  const passRegEx = /^[A-Za-z]\w{7,14}$/;
  return passRegEx.test(String(pass));
}