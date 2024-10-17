let email = document.getElementById("email");
let password = document.getElementById("password");
let loginnow = document.getElementById("loginnow");
let signup = document.getElementById("signup");
let incorrectEmail = document.querySelector(".incorrecte");
let incorrectPassword = document.querySelector(".incorrectp");
let iconpass = document.getElementById("passImg");

let iconp = document.getElementById("password");

let valid = "true";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
function validateEmail(emailValue) {
  return emailRegex.test(emailValue);
}

function validatePassword(passwordValue) {
  return passwordRegex.test(passwordValue);
}

loginnow.addEventListener("click", () => {
  let valid = "true";
  let emailValue = email.value;
  let passwordValue = password.value;
  let defaultmail = "abc@gmail.com";
  let defaultpass = "abc@1234";

  if (emailValue === "") {
    incorrectEmail.textContent = "Please enter your email.";
    incorrectEmail.style.display = "block";
    valid = "false";
  } else if (!validateEmail(emailValue)) {
    incorrectEmail.textContent = "Invalid email format.";
    incorrectEmail.style.display = "block";
    valid = "false";
  } else {
    incorrectEmail.style.display = "none";
  }

  if (passwordValue === "") {
    password.style.border = "1px solid red";
    incorrectPassword.textContent = "Please enter your password.";
    incorrectPassword.style.display = "block";
    valid = "false";
  } else if (!validatePassword(passwordValue)) {
    password.style.border = "1px solid red";
    incorrectPassword.textContent =
      "Password must be at least 8 characters long and contain at least one letter and one number.";
    incorrectPassword.style.display = "block";
    valid = "false";
  } else {
    incorrectPassword.style.display = "none";
  }

  if (
    valid === "true" &&
    defaultmail == emailValue &&
    defaultpass == passwordValue
  ) {
    location.href = "login.html";
  } else {
    alert("Not registered !!");
  }
});

signup.addEventListener("click", () => {
  let valid = "true";
  const emailValue = email.value;
  const passwordValue = password.value;

  if (emailValue === "") {
    incorrectEmail.textContent = "Please enter your email.";
    incorrectEmail.style.display = "block";
    valid = "false";
  } else if (!validateEmail(emailValue)) {
    incorrectEmail.textContent = "Invalid email format.";
    incorrectEmail.style.display = "block";
    valid = "false";
  } else {
    email.style.border = "1px solid green";
    incorrectEmail.style.display = "none";
  }

  if (passwordValue === "") {
    password.style.border = "1px solid red";
    incorrectPassword.textContent = "Please enter your password.";
    incorrectPassword.style.display = "block";
    valid = "false";
  } else if (!validatePassword(passwordValue)) {
    password.style.border = "1px solid red";
    incorrectPassword.textContent =
      "Password must be at least 8 characters long and contain at least one letter and one number.";
    incorrectPassword.style.display = "block";
    valid = "false";
  } else {
    password.style.border = "1px solid green";
    incorrectPassword.style.display = "none";
  }

  if (valid === "true") {
    alert("You have successfully signed up");
    email.value = "";
    password.value = "";
  }
});

iconpass.addEventListener("click", () => {
  console.log(iconp.getAttribute("type", "text"));
  console.log(iconp.getAttribute("type"));
  // if (iconp.getAttribute("type","text")) {
  //     iconp.setAttribute("type", "password");
  // } else {
  // iconp.setAttribute("type", "text");
  // }
  if (iconp.type === "password") {
    iconpass.src = "show.png";
    iconp.type = "text";
  } else {
    iconpass.src = "hide.png";
    iconp.type = "password";
  }
});
