const words = [
    { word: "apple", hint: "A type of fruit" },
    { word: "dog", hint: "A domesticated animal, man's best friend" },
    { word: "elephant", hint: "A large mammal with a trunk" },
    { word: "sun", hint: "A bright star at the center of our solar system" }
];

let currentWordIndex = 0;
let score = 0;

const hintElement = document.getElementById('hint');
const userGuessElement = document.getElementById('userGuess');
const submitBtnElement = document.getElementById('submitBtn');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

function displayNewWord() {
    hintElement.textContent = `Hint: ${words[currentWordIndex].hint}`;
    userGuessElement.value = '';
    feedbackElement.textContent = '';
}

function checkGuess() {
    const userGuess = userGuessElement.value.trim().toLowerCase();
    if (userGuess === words[currentWordIndex].word) {
        score++;
        feedbackElement.textContent = 'Correct! Well done.';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = 'Wrong guess, try again!';
        feedbackElement.style.color = 'red';
    }
    scoreElement.textContent = `Score: ${score}`;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(displayNewWord, 1000);
}

submitBtnElement.addEventListener('click', checkGuess);
displayNewWord();
