import {
  elements,
  isRequired,
  isBetween,
  isEmailValid,
  isPhone,
  showSuccess,
  showError,
  debounce,
} from "./js/elements.js";

const checkName = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const name = elements.name.value.trim();

  if (!isRequired(name)) {
    showError(elements.name, "Name cannot be blank.");
  } else if (!isBetween(name.length, min, max)) {
    showError(
      elements.name,
      `Name must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(elements.name);
    valid = true;
  }
  return valid;
};
const checkLastName = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const lastName = elements.lastName.value.trim();

  if (!isRequired(lastName)) {
    showError(elements.lastName, "Last name cannot be blank.");
  } else if (!isBetween(lastName.length, min, max)) {
    showError(
      elements.lastName,
      `Last name must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(elements.lastName);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;

  let email = elements.email.value.trim();

  if (!isRequired(email)) {
    showError(elements.email, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(elements.email, "Email is not valid.");
  } else {
    showSuccess(elements.email);
    valid = true;
  }
  return valid;
};

const checkPhone = () => {
  let valid = false;
  const min = 0,
    max = 15;
  const phone = elements.phone.value.trim();

  if (!isRequired(phone)) {
    showError(elements.phone, "Telephone cannot be blank.");
  } else if (!isBetween(phone.length, min, max)) {
    showError(
      elements.phone,
      `Telephone must be between ${min} and ${max} numbers.`
    );
  } else if (!isPhone(phone)) {
    showError(elements.phone, `Invalid phone number`);
  } else {
    showSuccess(elements.phone);
    valid = true;
  }
  return valid;
};

const checkBio = () => {
  let valid = false;
  const min = 2,
    max = 50;
  const bio = elements.bio.value.trim();

  // counter
  elements.count.textContent = `${bio.length} / ${max}`;

  if (!isRequired(bio)) {
    showError(elements.bio, "Bio cannot be blank.", true);
  } else if (!isBetween(bio.length, min, max)) {
    showError(
      elements.bio,
      `Bio must be between ${min} and ${max} characters.`,
      true
    );
  } else {
    showSuccess(elements.bio, true);
    valid = true;
  }
  return valid;
};

elements.form.addEventListener("submit", function (e) {
  e.preventDefault();

  // validate forms
  let isName = checkName(),
    isLastName = checkLastName(),
    isEmail = checkEmail(),
    isPhone = checkPhone(),
    isBio = checkBio();

  let isFormValid = isName && isLastName && isEmail && isPhone && isBio;

  // submit to the server if the form is valid
  if (isFormValid) {
    console.log("success");
  }
});

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "name":
        checkName();
        break;
      case "lastName":
        checkLastName();
        break;
      case "email":
        checkEmail();
        break;
      case "phone":
        checkPhone();
        break;
      case "bio":
        checkBio();
        break;
    }
  })
);
