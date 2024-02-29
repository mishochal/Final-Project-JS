const words = ["HANGMAN", "BOOK", "HOUSE", "CHOCOLATE", "COMPUTER",
    "SUNGLASSES", "LANGUAGE", "LIFEGUARD", "BUILDING", "EARRING",
    "MOUSE", "SHELF", "ARMCHAIR", "DOG", "SCREEN",
    "BAR", "COFFEE", "TEE", "DOLPHIN", "LAKE",
    "LION", "AIRPLANE", "BAG", "CARPET", "HAIRDRESSER"];

const numberOfLives = document.getElementById("number-of-tries");
const wordToGuess = document.getElementById("word-to-guess");
const input = document.getElementById("letter");
const inputBtn = document.getElementById("enter-letter");
const afterGame = document.getElementById("after-game");
const replayBtn = document.getElementById("play-again");
const endBtn = document.getElementById("end-game");
const endMessage = document.getElementById("message");

let word = ""
let isFinished = false;

function initHangman() {
    isFinished = false;
    afterGame.style.display = "none";
    let randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
    let hiddenWord = "".padEnd(word.length, "_");
    wordToGuess.innerHTML = hiddenWord;
    numberOfLives.innerHTML = 8;
}

function confirmLetter() {
    if (!isFinished) {
        let value = input.value;
        input.value = ""
        playRound(value.toUpperCase());
    }
}

function playRound(letter) {
    if (isValid(letter)) {
        if (word.includes(letter)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    wordToGuess.innerText =
                        wordToGuess.innerText.slice(0, i) +
                        letter +
                        wordToGuess.innerText.slice(i + 1);
                }
            }
            if (word === wordToGuess.innerText) {
                finishGame("Congratulations! You've won the game");
            }
        } else {
            numberOfLives.innerText--;
            if (numberOfLives.innerText === "0") {
                finishGame("You've lost the game.");
            }
        }
    } else {
        alert("You have entered invalid letter, try again.");
    }
}

function isValid(letter) {
    return letter >= "A" && letter <= "Z";
}

function finishGame(message) {
    isFinished = true;
    endMessage.innerHTML = message;
    afterGame.style.display = "flex";
}

function endGame() {
    afterGame.style.display = "none";
    inputBtn.style.pointerEvents = "none";
    input.readOnly = true;
}

initHangman();