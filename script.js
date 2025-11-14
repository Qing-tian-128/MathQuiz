let score = 0;
let currentAnswer = 0;
let questionCount = 0;  // Track the number of questions answered
const scoreDisplay = document.getElementById('score');
const feedbackDisplay = document.getElementById('feedback');
const questionDisplay = document.getElementById('question');
const resultDisplay = document.getElementById('result');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-answer');

// Function to generate a random math question
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = Math.random() > 0.5 ? '+' : '-';
    
    questionDisplay.textContent = `${num1} ${operator} ${num2}`;
    currentAnswer = operator === '+' ? num1 + num2 : num1 - num2;
}

// Function to check the answer and update score
function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);

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

    // Check if 10 questions have been answered
    if (questionCount >= 10) {
        endGame();
    } else {
        // Clear the input field and generate a new question
        answerInput.value = '';
        answerInput.focus();
        generateQuestion();
    }
}

// Function to end the game after 10 questions
function endGame() {
    questionDisplay.textContent = "Game Over!";
    feedbackDisplay.textContent = `Your final score is: ${score}`;
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
