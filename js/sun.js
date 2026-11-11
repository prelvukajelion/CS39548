// get the elements
const glowBtn = document.getElementById('glow-btn');
const sunPhoto = document.getElementById('main-photo');

// start or stop the glowing animation
glowBtn.addEventListener('click', function () {
    sunPhoto.classList.toggle('glowing');
    if (sunPhoto.classList.contains('glowing')) {
        glowBtn.textContent = 'Stop glow';
    } else {
        glowBtn.textContent = 'Start glow';
    }
});
