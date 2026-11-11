// get the elements
const factBtn = document.getElementById('fact-btn');
const factModal = document.getElementById('fact-modal');
const factClose = document.getElementById('fact-close');

// open the pop-up
factBtn.addEventListener('click', function () {
    factModal.classList.remove('hidden');
});

// close the pop-up
factClose.addEventListener('click', function () {
    factModal.classList.add('hidden');
});
