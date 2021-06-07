/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const scoreboard = document.querySelectorAll('#scoreboard img');

const displayedLetters = document.getElementsByClassName('show');
//Game constructor helps building a game with 3 properties and some methods.
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase('Wish you were here'), new Phrase('Never surrender'), new Phrase('Life is an abyss'), new Phrase('You will not win'), new Phrase('Vaccinate please')];  
        this.activePhrase = null
    }

    startGame() {
//Hides initial overlay, creates a new phrase using 'randomPhrase' and displays it calling "addPhraseToDisplay". Updates this.activePhrase. 
        initialOverlay.style.display = 'none';
        this.activePhrase = newGame.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
//Gets a random phrase.
        let randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
    }

    handleInteraction(event){
/*Controls game interactivity assigning different classes to buttons on the keyboard 
depending if choices are correct or incorrect. 
Disables selected buttons too.*/
        if(newGame.activePhrase.checkLetter(event.textContent)){
            newGame.activePhrase.showMatchedLetter(event.textContent);
            event.disabled = true;
            event.classList = "chosen";
            newGame.checkForWin();

            //Plays the rightLetter sound effect.
            rightLetter.play();
            //Helper function to change background gradient color.
            changeBGColor('blue');
                
            let gameWon = newGame.checkForWin();
            //Checks if you win
                if(gameWon === true){
                    newGame.gameOver();
            }
            
        } else {
            event.disabled = true;
            newGame.removeLife();
            event.classList = "wrong";
        }

        
    }

    removeLife() {
/*This function adds a value to this.missed everytime it is called and adds a skull to the scoreboard, 
representing a lost live.*/
       
        //Helper function to change background gradient color.
        changeBGColor('red');
        //Plays the wrongLetter sound effect.
        wrongLetter.play();
        
        this.missed++;
        let i = this.missed - 1;

        if(this.missed <= 5 && this.missed > 0){
            scoreboard[i].src ="images/lost01 AS Custom.png";
        } 
        //Calls gameOver method.
        if (this.missed >= 5){
            this.gameOver();
        }
    }

    checkForWin(){
//Checks if all letter of the phrase are revealed, what translates into win or lose.
        if(lettersToGuess.length === displayedLetters.length){
            return true;
        } else {
            return false;
        }
    }

    gameOver() {
/*Shows original start screen overlay with slight changes depending on the outcome of the game. 
Altered elements: h1, h2, overlay background image and CSS classes, win/lose music, background music.*/
        gameMusic.pause();
        //If you lose.
        if (this.missed >= 5) {
            initialOverlay.style.display = 'inherit';
            initialOverlay.className = 'lose';
            initialOverlay.style.backgroundImage = "url(images/Noo.png)";
            h1.textContent = 'Play again';
            gameOver.play();
            h2.textContent = 'You Loose!';
        //If you win.
        } else if (this.missed < 5){
            initialOverlay.style.display = 'inherit';
            initialOverlay.className = 'win';
            initialOverlay.style.backgroundImage = "url(images/Yes.png)";
            initialOverlay.style.backgroundSize = "cover";
            h1.textContent = 'Play again!';
            gameWon.play();
            h2.textContent = 'You Win!';
        }
    }
}