const intro = document.getElementById("introduction")
const introMessage = document.getElementById("intro-message")
const lowRange = document.getElementById("low");
const highRange = document.getElementById("high");
const range = document.getElementById("range");

const gameMessage = document.getElementById("game-message");
const playerGuess = document.getElementById("guess-inp");

const afterGame = document.getElementById("after-game");
const afterGameMsg = document.getElementById("after-game-message");

let randomNumber;
let attempts = 1;

function startGame() {
    let lowNumber = parseInt(lowRange.value);
    let highNumber = parseInt(highRange.value);
    if (isNaN(lowNumber) || isNaN(highNumber)) {
        introMessage.innerHTML = "One or more numbers were invalid. <br> Please enter the range of numbers that you'd like to generate random numbers from."
    } else if (lowNumber >= highNumber) {
        introMessage.innerHTML = "Second number must be higher than first number. <br> Please enter the range of numbers that you'd like to generate random numbers from."
    } else {
        intro.style.display = "none";
        randomNumber = Math.floor(Math.random() * (highNumber - lowNumber + 1) + lowNumber);
        range.innerHTML = `Your range is from ${lowNumber} to ${highNumber}`;
    }
}

function guessNum() {
    let number = parseInt(playerGuess.value);
    if (isNaN(number)) {
        gameMessage.innerHTML = "You didn't enter number. <br> Try guessing the number."
    } else if (number > randomNumber) {
        gameMessage.innerHTML = "Your number is higher than the number you're trying to guess. <br> Try guessing the number."
        attempts++;
        playerGuess.value = ""
    } else if (number < randomNumber) {
        gameMessage.innerHTML = "Your number is lower than the number you're trying to guess. <br> Try guessing the number."
        attempts++;
        playerGuess.value = ""
    } else if (number === randomNumber) {
        endGame();
    }
}

function endGame() {
    afterGame.style.display = "flex";
    afterGameMsg.innerHTML = `Congratulations! You've won the game. <br> It took you ${attempts} attempts`
}

function playAgain() {
    afterGame.style.display = "none";
    intro.style.display = "flex";
    attempts = 1;
    lowRange.value = "";
    highRange.value = "";
    playerGuess.value = "";
    introMessage.innerHTML = "Please enter the range of numbers that you'd like to generate random numbers from."
    gameMessage.innerHTML = "Try guessing the number"
    afterGameMsg.innerHTML = "";
}