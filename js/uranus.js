// Uranus page: button that switches between the dark and light theme

// get the elements
const themeBtn = document.getElementById('theme-btn');

// switch between the dark and light colors
themeBtn.addEventListener('click', function () {
    // the light class changes the colors in style.css
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
        themeBtn.textContent = 'Switch to dark theme';
    } else {
        themeBtn.textContent = 'Switch to light theme';
    }
});
