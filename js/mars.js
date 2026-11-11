// get the elements
const weightInput = document.getElementById('weight');
const calcBtn = document.getElementById('calc-btn');
const weightResult = document.getElementById('weight-result');

// Mars gravity is about 38% of Earth's
calcBtn.addEventListener('click', function () {
    const weight = Number(weightInput.value);
    if (weight > 0) {
        weightResult.textContent = 'On Mars you would weigh ' + (weight * 0.38).toFixed(1) + ' lbs.';
    } else {
        weightResult.textContent = 'Enter your weight first.';
    }
});
