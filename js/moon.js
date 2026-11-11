// each phase has a name and how bright the picture is
const phases = [
    { name: 'New Moon', brightness: 0.15 },
    { name: 'First Quarter', brightness: 0.55 },
    { name: 'Full Moon', brightness: 1 },
    { name: 'Last Quarter', brightness: 0.55 }
];
let current = 2;

// get the elements
const phaseBtn = document.getElementById('phase-btn');
const phaseName = document.getElementById('phase-name');
const moonPhoto = document.getElementById('main-photo');

// go to the next phase when the button is clicked
phaseBtn.addEventListener('click', function () {
    current = (current + 1) % phases.length;
    phaseName.textContent = 'Phase: ' + phases[current].name;
    moonPhoto.style.filter = 'brightness(' + phases[current].brightness + ')';
});
