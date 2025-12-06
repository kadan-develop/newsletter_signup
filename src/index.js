"use-strict";

const input = document.querySelector("input");
const button = document.querySelector("button");
const dismissButton = document.getElementById("dismiss-btn");
const invalidEmailText = document.getElementById("invalid-email");
const succsessSection = document.getElementById("success-section");
const mainSection = document.querySelector("main");
const emailAddress = document.getElementById("email-address");


const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

button.addEventListener("click", (e) => {
  e.preventDefault()

  
  if (validateEmail(input.value)) {
  
    emailAddress.textContent = input.value;
    
    input.style.border = "1px solid #949494";
    input.style.color =  "#242742"
    input.style.background = "#fff";
    invalidEmailText.classList.add("hidden");
    
    input.value = '';

    
  mainSection.classList.add("hidden");
  succsessSection.classList.remove("hidden");


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

dismissButton.addEventListener("click", () => {

  mainSection.classList.remove("hidden");
  succsessSection.classList.add("hidden");

  
});


const recipe2 = {
  name: 'Chicken Curry',
  ingredients: ['chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic'],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 4, 5],
  averageRating: null,
};



const getAverageRating = (arr) => {
  const ratings = arr.ratings

  let sum = 0

  for(let i=0; i< ratings.length; i++){
    sum += ratings[i];
  }

  const avg = sum / ratings.length;

  return Number(avg);
}

const result = getAverageRating(recipe2);

console.log(result);
