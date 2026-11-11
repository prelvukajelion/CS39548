// get the elements
const windBtn = document.getElementById('wind-btn');
const windSpeed = document.getElementById('wind-speed');

// count up to Neptune's top wind speed
windBtn.addEventListener('click', function () {
    let speed = 0;
    const timer = setInterval(function () {
        speed += 50;
        windSpeed.textContent = speed + ' km/h';
        if (speed >= 2100) {
            clearInterval(timer);
        }
    }, 30);
});
