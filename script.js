let score = 0;
let currentAnswer = 0;
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
        resultDisplay.textContent = `Your score is: ${score}`;
    } else {
        feedbackDisplay.textContent = "Wrong! Try again.";
    }

    // Update the score display
    scoreDisplay.textContent = score;

    // Clear the input field
    answerInput.value = '';
    answerInput.focus();

    // Generate a new question after every attempt
    generateQuestion();
}

// Event listener for the submit button
submitButton.addEventListener('click', checkAnswer);

// Initial question
generateQuestion();
