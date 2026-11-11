// list of facts to pick from
const jupiterFacts = [
    'Jupiter is more than twice as massive as all the other planets combined.',
    'The Great Red Spot is a storm that has lasted for hundreds of years.',
    'Jupiter spins faster than any other planet, a day is under 10 hours.',
    'Jupiter has at least 95 known moons, including Ganymede, the biggest moon in the solar system.',
    'About 1,300 Earths could fit inside Jupiter.'
];

// get the elements
const randomBtn = document.getElementById('random-btn');
const randomFact = document.getElementById('random-fact');

// show a random fact
randomBtn.addEventListener('click', function () {
    const index = Math.floor(Math.random() * jupiterFacts.length);
    randomFact.textContent = jupiterFacts[index];
});
