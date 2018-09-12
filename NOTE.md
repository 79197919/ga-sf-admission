- DOM (document Obj model)
  <img src="assets/imgs/bulbasaur.png" alt="bulbasaur" id="bulbasaur">
  <img src="assets/imgs/charmander.png" alt="charmander" id="charmander">
  <img src="assets/imgs/squirtle.png" alt="squirtle" id="squirtle">
  <img src="assets/imgs/pikachu.png" alt="pikachu" id="pikachu">

  Each img has id.  To catch each Pokemon use getElementById

## 1) Select Charmander and remove him (put him into his pokeball).

// select the element with the `id` Pikachu and save it to a variable
  var charmander = document.getElementById("charmander");

// change the element's class to "caught"
  charmander.className = "caught";

  // result: charmander is gone!

  var bulbasaur = document.getElementById("bulbasaur");
  bulbasaur.className = "caught";

  How does this work? 
  1) Target img element Charmander
  document.getElementById("charmander");
  2) Add class .caught to Charmander
  <img src="assets/imgs/charmander.png" alt="charmander" id="charmander" class="caught">
  3) Apply CSS rule opacity to make element transparent
  .caught {
    opacity: 0;
  }

// select the element with the `id` Pikachu and save it to a variable
  var pikachu = document.getElementById("pikachu");
  
// change the element's class to "caught"
  pikachu.className = "caught";

If you want line break inside the code block, press Shift + Enter

## Objective 2: Capturing User Input
- How to captuer user's input using prompt
  var sentiment = prompt("How are you feeling today?");
  console.log("Today you are", sentiment); 
  
  Note: console.log() is just a simple way to print something to the console.
  Result of executing: It should produce a prompt message that will display what it's input to the console as output.

- Practice: Breakfast Prompt
Problem: prompt the user with the message "What did you eat for breakfast this morning?". Display the user's response in the console in the format, "You ate oatmeal for breakfast", if they answered "oatmeal". Click the button "Execute" to test out the code.

Answer:
var food = prompt("What did you eat for breakfast this morning?");
console.log("You ate", food, "for breakfast");

## Objective 3: User Output
* what we've done: Return user input back to user and select elements on a page are done!
  var pikachu = document.getElementById("pikachu"); // select element
* Now change what's inside of HTML element first by selecting it, then setting its 'innerHTML' to anything we want.  
* Use 'innerHTML' to update the text below in order to reflect something we've learned today

> Today I learned: ...

- The elipse is above is wrapped in an HTML span tag that has the id "new-knowledge".  Select span id new-knowledge.  Next, change what's inside of it to reflect what we've learned.  

<h5 class="user-output">Today I learned: <span id="new-knowledge">...</span></h5>

ex) var newKnowledge = document.getElementById("new-knowledge");
    newKnowledge.innerHTML = "how to select and manipulate DOM elements!"

Try it in console!
> document.getElementById("new-knowledge")
output: <span id="new-knowledge">...</span>

- Practice: All together now!
Given: <h5 class="user-output">My favorite pokémon is: <span id="favorite-pokemon">...</span></h5>

Problem: Let's prompt the user for favorite Pokemon and 
Display it back to them on the site!

- First, prompt the user for their favorite pokemon and store in variable
// use a prompt to get the user's favorite pokemon and save it to a variable
var favPokemonInput = prompt("What is your favorite pokemon?");
// select the element with the id "favorite-pokemon" and save it to a variable
// result: <span id="favorite-pokemon">...</span>
var favoritePokemonElement = document.getElementById("favorite-pokemon"); 
// set the inner html of the element to the user's favorite pokemon
favoritePokemonElement.innerHTML = favPokemonInput;

check it:
> document.getElementById("favorite-pokemon")
// output: <span id=​"favorite-pokemon">​pika​</span>​