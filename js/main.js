const form = document.getElementById('form');

function handleSubmit(e) {
  e.preventDefault();
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (firstname === '') {
    addErrorTo('firstname');
  } else {
    removeErrorFrom('firstname');
  }

  if (lastname === '') {
    addErrorTo('lastname');
  } else {
    removeErrorFrom('lastname');
  }

  if (email === '') {
    addErrorTo('email');
  } else if (!isValid(email)) {
    addErrorTo('email');
  } else {
    removeErrorFrom('email');
  }

  if (password === '') {
    addErrorTo('password');
  } else {
    removeErrorFrom('password');
  }
}

function addErrorTo(field) {
  const formControl = form[field].parentNode;
  formControl.classList.add('error')
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove('error')
}

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', handleSubmit);