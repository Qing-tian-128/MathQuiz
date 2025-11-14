let score = 0;
let currentAnswer = 0;
let questionCount = 0;  // Track the number of questions answered
const questionLimit = 20;  // Set the number of questions to 20
const scoreDisplay = document.getElementById('score');
const feedbackDisplay = document.getElementById('feedback');
const questionDisplay = document.getElementById('question');
const resultDisplay = document.getElementById('result');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-answer');

// Function to generate a random math question
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;
    const operations = ['+', '-', '*', '/'];  // Array of operations
    const operator = operations[Math.floor(Math.random() * operations.length)];

    // Prevent division by zero
    if (operator === '/' && num2 === 0) {
        num2 = 1;  // Make sure the divisor is never zero
    }

    // Create the question based on the operator
    questionDisplay.textContent = `${num1} ${operator} ${num2}`;

    if (operator === '+') {
        currentAnswer = num1 + num2;
    } else if (operator === '-') {
        currentAnswer = num1 - num2;
    } else if (operator === '*') {
        currentAnswer = num1 * num2;
    } else if (operator === '/') {
        currentAnswer = num1 / num2;
    }
}

// Function to check the answer and update score
function checkAnswer() {
    const userAnswer = parseFloat(answerInput.value);

    if (userAnswer === currentAnswer) {
        feedbackDisplay.textContent = "Correct!";
        score += 1;
    } else {
        feedbackDisplay.textContent = "Wrong! Try again.";
    }

    // Update the score display
    scoreDisplay.textContent = score;

    // Increment the question count
    questionCount++;

    // Check if 20 questions have been answered
    if (questionCount >= questionLimit) {
        endGame();
    } else {
        // Clear the input field and generate a new question
        answerInput.value = '';
        answerInput.focus();
        generateQuestion();
    }
}

// Function to end the game after 20 questions
function endGame() {
    questionDisplay.textContent = "Game Over!";
    feedbackDisplay.textContent = `Your final score is: ${score}`;
    resultDisplay.textContent = "Thanks for playing!";
    submitButton.disabled = true;  // Disable the submit button
    answerInput.disabled = true;  // Disable the input field
}

// Event listener for the submit button
submitButton.addEventListener('click', checkAnswer);

// Event listener for pressing Enter key to submit answer
answerInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Initial question
generateQuestion();
