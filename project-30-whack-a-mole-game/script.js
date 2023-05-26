const gameContainer = document.querySelector('.game');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('.start-button');
const gameTime = 10000;
const minIntervalTime = 200;
const maxIntervalTime = 1000;

let lastHole;
let timeUp = false;
let score = 0;
let gameTimeout;

function giveRandomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function giveRandomHole(holes) {
    const randomIndex = Math.floor(Math.random() * holes.length);
    const hole = holes[randomIndex];
    if (hole === lastHole) {
        // console.log("Ah, I've seen this before.");
        return giveRandomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = giveRandomTime(minIntervalTime, maxIntervalTime);
    const hole = giveRandomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame(e) {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep();
    gameTimeout = setTimeout(() => {
        timeUp = true;
        clearTimeout(gameTimeout);
    }, gameTime);
}

function bonk(e) {
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

startButton.addEventListener('click', startGame);
// moles.forEach((mole) => mole.addEventListener('click', bonk));

// using event delegation by attaching a single click event listener to the game container
// this event listener is responsible for detecting clicks within the gameContainer
gameContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('mole')) {
        bonk.call(e.target, e);
    }
});
