/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const lettersToGuess = document.getElementsByClassName('letter');
const phraseDiv = document.getElementById('phrase');

let ul;
let li;

//Phrase constructor helps building a phrase taking 1 parameter for its property and some methods.
class Phrase {
    constructor(phrase){
      this.phrase = phrase.toLowerCase();  
    }

    addPhraseToDisplay(){
//Displays LI elements in the game representing the phrase to be guessed.
      ul = phraseDiv.firstElementChild;
      for (let i=0; i < this.phrase.length; i++){
        let letter = this.phrase[i];
        li = document.createElement('li');
        li.textContent = letter;
        ul.appendChild(li);
        //Simple logic to differenciate spaces and letters.
          if(li.textContent === ' '){
            li.className = "space";
          } else{
            li.className = `hide letter ${li.textContent}`;
          }       
      }
    }

    checkLetter(inputLetter){
//Checks if the 'activePhrase' includes the 'inputLetter'.
      let string = newGame.activePhrase.phrase;
      return string.includes(inputLetter);
    }

    showMatchedLetter(inputLetter) {
//Changes the class of guessed letters to 'show'. 
      for (let i=0; i<lettersToGuess.length; i++){
        if(inputLetter === lettersToGuess[i].textContent){
          lettersToGuess[i].className = `show letter ${inputLetter}`;
        }
      }
    }
}