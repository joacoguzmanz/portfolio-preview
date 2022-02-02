// Open hamburger menu
const hamburgerBtn = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const mobileMenu = document.querySelector('.header__menu');

hamburgerBtn.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    header.classList.remove('open'); // Close menu
    mobileMenu.classList.remove('active');
  } else {
    header.classList.add('open'); // Open menu
    mobileMenu.classList.add('active');
  }
});

// Form validation
const form = document.getElementById('form');
const formName = document.getElementById('name');
const mail = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // Get value from the imputs
  const nameValue = formName.value.trim();
  const mailValue = mail.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === '') {
    // show error
    // add error class
    setErrorFor(formName, 'Name cannot be empty');
  } else {
    // add success class
    setSuccessFor(formName);
  }

  if (mailValue === '') {
    setErrorFor(mail, 'Mail cannot be empty');
  } else if (!isEmail(mailValue)) {
    setErrorFor(mail, 'Mail format is not valid');
  } else {
    setSuccessFor(mail);
  }

  if (subjectValue === '') {
    setErrorFor(subject, 'Subject cannot be empty');
  } else {
    setSuccessFor(subject);
  }

  if (messageValue === '') {
    setErrorFor(message, 'Message cannot be empty');
  } else {
    setSuccessFor(message);
  }
}

function setErrorFor(input, message) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector('small');

  // add error message inside small
  small.innerText = message;

  // add error class
  inputContainer.classList.add('error');
}

function setSuccessFor(input) {
  const inputContainer = input.parentElement;

  if (inputContainer.classList.contains('error')) {
    inputContainer.classList.remove('error');
    inputContainer.classList.add('success');
  } else {
    inputContainer.classList.add('success');
  }
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
