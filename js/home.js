// home.js - interactivity for the landing page (index.html)
// The "Pop quiz" button shows or hides a multiple-choice question.
// Clicking an answer tells you if it is right or wrong.

const quizBtn = document.getElementById('quiz-btn');
const quizBox = document.getElementById('quiz-box');
const quizResult = document.getElementById('quiz-result');
const answerButtons = document.querySelectorAll('.quiz-answers button');

// Show or hide the quiz when the button is clicked
quizBtn.addEventListener('click', function () {
    quizBox.classList.toggle('hidden');
    quizResult.textContent = '';   // clear the old result
});

// Check the answer when one of the answer buttons is clicked
answerButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.textContent === 'Pluto') {
            quizResult.textContent = 'Correct! Pluto was reclassified as a dwarf planet in 2006.';
        } else {
            quizResult.textContent = 'Not quite. Try again!';
        }
    });
});
