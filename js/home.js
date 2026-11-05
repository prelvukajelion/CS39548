// get the elements
const quizBtn = document.getElementById('quiz-btn');
const quizBox = document.getElementById('quiz-box');
const quizResult = document.getElementById('quiz-result');
const closeBtn = document.getElementById('quiz-close');
const answerButtons = document.querySelectorAll('.quiz-answers button');

// open or close the quiz when the button is clicked
quizBtn.addEventListener('click', function () {
    quizBox.classList.toggle('hidden');
    // clear the old result
    quizResult.textContent = '';
});

// close the quiz
closeBtn.addEventListener('click', function () {
    quizBox.classList.add('hidden');
});

// check the answer
answerButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.textContent === 'Pluto') {
            quizResult.textContent = 'Correct! Pluto was reclassified as a dwarf planet in 2006.';
        } else {
            quizResult.textContent = 'Not quite. Try again!';
        }
    });
});
