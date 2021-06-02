//Sound effects & background music. All tracks played, composed and recorded by myself.
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement

//I composed some music and created audio elements to make the game more entertaining.
const rightLetter = new Audio("audio/rightLetter.mp3");
rightLetter.volume = 0.60;

const wrongLetter = new Audio("audio/lostLives.mp3");
wrongLetter.volume = 0.55;

const gameOver = new Audio("audio/gameOver.mp3");
const gameWon = new Audio("audio/gameWon.mp3");

const gameMusic = new Audio("audio/Śūnyatā.mp3");
gameMusic.volume = 0.35;


/*Button to play or stop background music. I created it on JS to practice, 
I didn't want to alter much the provided HTML and CSS files.*/
const banner = document.getElementById('banner');
const stopMusic = document.createElement('button');
stopMusic.style.width = "100px";
stopMusic.style.height = "30px";
stopMusic.textContent = "Stop Music";
stopMusic.style.fontSize = "11px";
stopMusic.style.position = "static";
stopMusic.style.left = "50px"; 
banner.appendChild(stopMusic);

//Click event listener to stop/play music.
stopMusic.addEventListener('click', (event)=>{
    if(gameMusic.paused === false){
        stopMusic.textContent = "Play Music";
        gameMusic.pause();

    } else if(gameMusic.paused){
        stopMusic.textContent = "Stop Music";
        gameMusic.play();
    }
});