// get the elements
const spinStart = document.getElementById('spin-start');
const spinStop = document.getElementById('spin-stop');
const earthPhoto = document.getElementById('main-photo');

// start the spin
spinStart.addEventListener('click', function () {
    earthPhoto.classList.add('spinning');
});

// stop the spin
spinStop.addEventListener('click', function () {
    earthPhoto.classList.remove('spinning');
});
