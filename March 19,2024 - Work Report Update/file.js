const userNameSelect = document.querySelector("#username");
const UserEmailSelect = document.querySelector("#email");
const UserPhoneSelect = document.querySelector("#mobile");
const passwordSelect = document.querySelector("#password");
const confirmPasswordSelect = document.querySelector("#confirm-password");

const form = document.querySelector("#signup");

form.addEventListener("input", function (e) {
  console.log(e.target.id);
  console.log(e.target.value);
  switch (e.target.id) {
    case "username":
      checkUsername();
      //   console.log("Checking username is called");
      break;
    case "email":
      checkEmail();
      //   console.log("checking userEmail is called");
      break;
    case "mobile":
      checkPhone();
      break;
    case "password":
      checkPassword();
      //   console.log("checking password is called");
      break;
    case "confirm-password":
      checkConfirmPassword();
      //   console.log("checking confrim password is called");
      break;
  }
});

function checkUsername() {
  let valid = false;

  // checkout the string 3 < length < 25
  let min = 3;
  let max = 25;

  let username = userNameSelect.value.trim();
  console.log(username);

  //condtion-1 not empty input field
  //condtion-2 length of the sting between (min,max)
  //condtion-3 you are entering the correct order

  if (isRequired(username) == false) {
    showError(userNameSelect, "Username cannot be blank.");
  } else if (isBetween(username.length, min, max) == false) {
    showError(
      userNameSelect,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    console.log("sucessed id connceted with");
    showSuccess(userNameSelect);
    valid = true;
  }
  return valid;
}

function checkEmail() {
  let valid = false;
  let email = UserEmailSelect.value.trim();

  //condtion-1 not empty input field
  //condtion-2 is valid email
  //condtion-3 you are entering the correct order

  if (isRequired(email) == false) {
    showError(UserEmailSelect, "Email cannot be blank.");
  } else if (isEmailValid(email) == false) {
    showError(UserEmailSelect, "Email is not valid.");
  } else {
    showSuccess(UserEmailSelect);
    valid = true;
  }
  return valid;
}

function checkPhone() {
  let valid = false;
  let phone = UserPhoneSelect.value.trim();

  if (isRequired(phone) == false) {
    showError(UserPhoneSelect, "Mobile cannot be blank.");
  } else if (validate(phone) == false) {
    showError(UserPhoneSelect, "Mobile is not valid.");
  } else {
    showSuccess(UserPhoneSelect);
    valid = true;
  }
  return valid;
}

function checkPassword() {
  let valid = false;

  let password = passwordSelect.value.trim();

  //condtion-1 not empty input field
  //condtion-2 is valid email
  //condtion-3 you are entering the correct order

  if (isRequired(password) == false) {
    console.log("Empty called");
    showError(passwordSelect, "Password cannot be blank.");
  } else if (isPasswordSecure(password) == false) {
    console.log("incorred order called");
    showError(
      passwordSelect,
      `Password must has at least 8 characters that include at least 1 lowercase character, 
      1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)`
    );
  } else {
    console.log("correct order is calling");
    showSuccess(passwordSelect);
    valid = true;
  }

  return valid;
}

function checkConfirmPassword() {
  let valid = false;
  // check confirm password
  let confirmPassword = confirmPasswordSelect.value.trim();
  let password = passwordSelect.value.trim();

  //condtion-1 Empty toh nahi hai
  //condtion-2 old password == new password (NOT)
  //condtion-3 other They both are equal hai

  if (isRequired(confirmPassword) == false) {
    showError(confirmPasswordSelect, "Please enter the password again");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordSelect, "The password does not match");
  } else {
    showSuccess(confirmPasswordSelect);
    valid = true;
  }

  return valid;
}

// show the error and Hide the error massage

function showError(input, message) {
  let formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  let error = formField.querySelector("span");
  error.textContent = message;
}

function showSuccess(input) {
  // get the form-field element
  let formField = input.parentElement; // get the parent node

  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  let error = formField.querySelector("span");
  error.textContent = " ";
}

//-------------------------------------------------------------
function isEmailValid(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function isPasswordSecure(password) {
  let re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
}

function isRequired(value) {
  if (value === "") {
    return false;
  } else {
    return true;
  }
}

function isBetween(length, min, max) {
  console.log("isBetteween called");
  if (length < min || length > max) {
    return false;
  } else {
    return true;
  }
}

// phone validation-
function validate(phone) {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(phone);
}

let NextContainerShow = (document.getElementById("ShowForm").style.display =
  "none");

// When All things is correct Then we have to set up
form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  let isUsernameValid = checkUsername();
  let isEmailValid = checkEmail();
  let isMobileValid = checkPhone();
  let isPasswordValid = checkPassword();
  let isConfirmPasswordValid = checkConfirmPassword();

  // all the input field in valid
  let isFormValid = false;

  if (
    isUsernameValid == true &&
    isEmailValid == true &&
    isMobileValid == true &&
    isPasswordValid == true &&
    isConfirmPasswordValid == true
  ) {
    isFormValid = true;
  }

  // submit to the server if the form is valid
  if (isFormValid) {
    document.getElementById("HideForm").style.display = "none";
    document.getElementById("ShowForm").style.display = "block";
    let wizardSecondActive = document.getElementById("active-second-child");
    wizardSecondActive.style.backgroundColor = "#04aa6d";
    console.log("from is alredy valid");
  }
});
