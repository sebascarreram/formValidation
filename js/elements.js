export const elements = {
  name: document.querySelector("#name"),
  lastName: document.querySelector("#lastName"),
  email: document.querySelector("#email"),
  phone: document.querySelector("#phone"),
  bio: document.querySelector("#bio"),
  count: document.querySelector("#counter"),
  form: document.querySelector("#form"),
};

export const isRequired = (value) => (value === "" ? false : true);

export const isBetween = (len, min, max) =>
  len < min || len > max ? false : true;

export const isPhone = (value) => {
  const re = /^(\d+)$/;
  return re.test(value);
};

export const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// SHOW SUCCESS
export const showSuccess = (input, textArea = false) => {
  // get the form-field element
  const formField = input.parentElement;

  let inputTag;

  if (textArea) {
    inputTag = formField.querySelector("textarea");
  } else {
    inputTag = formField.querySelector("input");
  }

  // remove the error class
  inputTag.classList.remove("error");
  inputTag.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

// SHOW ERROR
export const showError = (input, message, textArea = false) => {
  // get the form-field element
  const formField = input.parentElement;

  let inputTag;

  if (textArea) {
    inputTag = formField.querySelector("textarea");
  } else {
    inputTag = formField.querySelector("input");
  }

  // add the error class
  inputTag.classList.remove("success");
  inputTag.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

export const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};
