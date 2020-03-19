const puzzleEl = document.getElementById('puzzle');
const guessEl = document.getElementById('guesses');
const game1 = new Hangman('Car Parts', 2);

puzzleEl.textContent = game1.getPuzzle();
guessEl.textContent = game1.remainingGuesses;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessEl.textContent = game1.remainingGuesses;
});

getPuzzle('3').then((puzzle) => {
    console.log(puzzle);
}, (err) => {
    console.log(`Error: ${err}`);
});

getCountry('MX').then((country) => {
    console.log(country);
}, (err) => {
    console.log(`Error: ${err}`);
});

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if(response.status === 200) {
//         return response.json();
//     } else {
//         throw new Error('Unable to fetch the puzzle');
//     }
// }).then((data) => {
//     console.log(data.puzzle);
// }).catch((error) => {
//     console.log(error);
// });