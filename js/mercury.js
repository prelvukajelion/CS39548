// get the elements
const moreBtn = document.getElementById('more-btn');
const moreText = document.getElementById('more-text');

// show or hide the extra paragraph
moreBtn.addEventListener('click', function () {
    moreText.classList.toggle('hidden');
    if (moreText.classList.contains('hidden')) {
        moreBtn.textContent = 'Read more';
    } else {
        moreBtn.textContent = 'Read less';
    }
});
