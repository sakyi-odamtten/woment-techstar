//allow user guess a number between i and 100
function guessrandom(guess){
    let rand = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if (rand === guess){
        console.log('you are correct')
    }
    else if (rand > guess){
        console.log('the number you guessed is too low')
    }
    else {
        console.log('the number you guessed is too high')
    }
}

guessrandom(50);