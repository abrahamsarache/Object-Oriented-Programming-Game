/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const newGame = new Game();
const qwerty = document.querySelectorAll('.keyrow button');

const startButton = document.getElementById("btn__reset");
const initialOverlay = document.getElementById("overlay");

const h1 = document.getElementById("game-over-message");
const h2 = document.querySelector('h2');

const oldPhrase = document.querySelectorAll('#phrase li');

//Click event listener to start the game.
startButton.addEventListener('click', (e)=>{
    restartAll();
});

//Click event listener for the keyboard. Just selects the keys.
for (let i = 0; i<qwerty.length; i++){
  let chosenKeyLetter = qwerty[i];

  chosenKeyLetter.addEventListener('click', (event)=>{
    newGame.handleInteraction(event.target);

  });
}

//Event listener for keyboard interactivity.
window.addEventListener('keydown', (event)=>{
  //Starts the game by pressing only the key 'Enter'.
  if(event.key === 'Enter') { 
    if (initialOverlay.style.display !== 'none'){
      restartAll();
    }
  }

    if (initialOverlay.style.display === 'none'){
      for (let i = 0; i<qwerty.length; i++){
      let chosenKeyLetter = qwerty[i];
        
      if(event.target !== chosenKeyLetter){
        if(chosenKeyLetter.className === "key" && event.key === chosenKeyLetter.textContent){
          newGame.handleInteraction(chosenKeyLetter);
        }
     } 
    }   
  }
});

//Restart Functions. Helper functions to help the game restarting different parts of it.
function restartIcons() {
  for (let i = 0; i < scoreboard.length; i++){
      scoreboard[i].src ="images/lives AS Custom.png";
  }
}

function restartKeyboard() {
   qwerty.forEach(
    key => {
        key.className = "key";
        key.disabled = false;
      }
   )
} 

function restartPhrase() {
  ul = phraseDiv.firstElementChild;
  ul.innerHTML = "";    
}

//restartAll() calls back other helper functions, reset the score, background color, restart music, etc.
function restartAll() {
    newGame.missed = 0;
    newGame.activePhrase = null;
    restartIcons()
    restartKeyboard();
    restartPhrase();
    main.style.backgroundColor = 'white';
    bgStart.backgroundImage = "linear-gradient(0.25turn, blue, white, red)";
    gameMusic.currentTime = 0;
    gameMusic.play();
    newGame.startGame();
}

//Extra styling for the background during the game.
const main = document.getElementsByClassName('main-container')[0];
let bgStart = main.style;

//Gradient randomizer. Makes my background gradient change between certain paramenters of blue or red if the choice is correct or incorrect.
function changeBGColor(color){ 
    let randomNum = Math.floor(Math.random() * 256);
    let randomAngle = Math.floor(Math.random() * 361);
    
    if(color === 'blue'){
        bgStart.backgroundImage = `linear-gradient(${randomAngle}deg, rgb( 255, 255, 255), rgb(0, 0, ${randomNum}))`;
    }

    if(color === 'red'){
        bgStart.backgroundImage = `linear-gradient(${randomAngle}deg, rgb(255, 255, 255), rgb(${randomNum}, 0, 0))`;
    }
}