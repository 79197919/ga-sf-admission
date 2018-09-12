// message in the console
console.log("Hi there, welcome to the JavaScript console!");

// initialize the application
var app = new Object();

app.shakePokeball = function shakePokeball() {
  // code BELOW this line for challenge #1 -->

  // select the element with the `id` pokeball and save it to a variable
  var pokeballElement = document.getElementById("pokeball");
  // change the element's class to "shake"
  pokeballElement.className = "shake";

} // <-- code ABOVE this line for challenge #1

app.setName = function setName() {
  // code BELOW this line for challenge #2 -->

  // use a prompt to get user's name and save it to a variable
  var firstNameInput = prompt("What is your name?");
  // select the element with the id "first-name" and save it to a variable
  // select this <span id="first-name">Your name here...</span>
  var firstNameElement = document.getElementById("first-name"); 
  // set the inner html of the element to the user's name
  firstNameElement.innerHTML = firstNameInput;

} // <-- code ABOVE this line for challenge #2

app.setWebsite = function setWebsite() {
  // code BELOW this line for challenge #3 & bonus -->

  // use a prompt to get user's favorite website and save it to a variable
  var favoriteWebsiteInput = prompt("What is your favorite website?");
  // select the element with the id "favorite-website" and save it to a variable
  // select this <span id="favorite-website">...</span>
  var favoriteWebsiteElement = document.getElementById("favorite-website"); 
  // set the inner html of the element to the favoriteWebsiteElement
  favoriteWebsiteElement.innerHTML = favoriteWebsiteInput;

} // <-- code ABOVE this line for challenge #3 & bonus
