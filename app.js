const button = document.querySelector(".btn");
const tryAgainButton = document.querySelector(".hidden");
const list = document.querySelector(".guess-list");
const number = Math.floor(Math.random() * 101);
const userGuess = document.getElementById('input-field');
const correctGuess = document.querySelector(".correctGuess");
let numGuesses = 0;
const allowedGuesses = 5;

button.addEventListener("click", guess);
tryAgainButton.addEventListener("click", function() {
    window.location.reload()
});


// Funktion som tar in användarens nummer och jämför med datorns

function guess() {

    if (!userGuess.value.trim()) return;
    correctGuess.textContent = "";
    /* console.log(number); */

    if (isNaN(userGuess.value)) {
        correctGuess.textContent = `That's not a number, dummy!`;
        return;
    }

    numGuesses++
    let isCorrect = false;

    if (numGuesses <= allowedGuesses) {
    

        if (Number(userGuess.value) === number) {
        correctGuess.textContent = `You guessed ${number}, you won!`
        isCorrect = true;
        /* button.innerHTML = `Try again!`; */
        button.classList.toggle("hidden")
        tryAgainButton.classList.toggle("hidden")

        }

        else if (Number(userGuess.value) > number) {
        list.innerHTML += `<li>You guessed ${userGuess.value}, you need to guess lower!</li>`;
        }

        else {
        list.innerHTML += `<li>You guessed ${userGuess.value}, you need to guess higher!</li>`;
        }

        if (numGuesses === allowedGuesses && !isCorrect) {
            correctGuess.textContent = `Sorry, you've reached the maximum amount of guesses, the right number was ${number}`;
            /* button.innerHTML = `Try again!`; */
            button.classList.toggle("hidden")
            tryAgainButton.classList.toggle("hidden")
        }
    }
}