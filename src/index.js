"use-strict";

const input = document.querySelector("input");
const button = document.querySelector("button");
const invalidEmailText = document.getElementById("invalid-email");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

button.addEventListener("click", () => {
  if (validateEmail(input.value)) {
    console.log("good email");
  } else {
    input.style.border = "1px solid #FF6155";
    input.style.color = "#ff6155";
    input.style.background = "#FFE7E6";
    input.style.outline = "none";
    invalidEmailText.classList.remove("hidden");
  }
});
