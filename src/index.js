"use-strict";

const input = document.querySelector("input");
const button = document.querySelector("button");
const invalidEmailText = document.getElementById("invalid-email");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

button.addEventListener("click", (e) => {
  e.preventDefault()

  
  if (validateEmail(input.value)) {
  
    input.style.border = "1px solid #949494";
    input.style.color =  "#242742"
    input.style.background = "#fff";
    invalidEmailText.classList.add("hidden");
    
    input.value = '';


  } else {
    input.style.border = "1px solid #FF6155";
    input.style.color = "#ff6155";
    input.style.background = "#FFE7E6";
    input.style.outline = "none";

    invalidEmailText.classList.remove("hidden");
  }
});


button.addEventListener("keypress", (event) => {
    
  if (event.key === "Enter") {
    event.preventDefault();

    button.click();
   
  }
})