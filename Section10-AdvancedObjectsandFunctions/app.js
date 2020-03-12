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

getPuzzle('3', (error, puzzle) => {
    if(error){
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle);
    }
});

getCountry('MX', (error, country) => {
    if(error){
        console.log(`Error: ${error}`);
    } else {
        console.log(country);
    }
});