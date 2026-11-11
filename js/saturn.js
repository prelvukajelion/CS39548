// get the elements
const zoomBtn = document.getElementById('zoom-btn');
const saturnPhoto = document.getElementById('main-photo');

// make the picture bigger or smaller
zoomBtn.addEventListener('click', function () {
    saturnPhoto.classList.toggle('zoomed');
    if (saturnPhoto.classList.contains('zoomed')) {
        zoomBtn.textContent = 'Zoom out';
    } else {
        zoomBtn.textContent = 'Zoom in';
    }
});
