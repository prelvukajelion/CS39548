// Neptune page: button that counts up to Neptune's top wind speed

// get the elements
const windBtn = document.getElementById('wind-btn');
const windSpeed = document.getElementById('wind-speed');

// count up to Neptune's top wind speed
windBtn.addEventListener('click', function () {
    // start from 0 every time the button is clicked
    let speed = 0;
    // run this code every 30 milliseconds
    const timer = setInterval(function () {
        speed += 50;
        windSpeed.textContent = speed + ' km/h';
        if (speed >= 2100) {
            // stop counting at the top speed
            clearInterval(timer);
        }
    }, 30);
});
