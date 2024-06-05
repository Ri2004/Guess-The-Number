"use strict";

// Select elements
const message = document.querySelector(".message");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const attempts = document.querySelector(".score");
const highestScore = document.querySelector(".highscore");
const inputGuess = document.querySelector(".guess");
const correctGuess = document.querySelector(".number");

let score = 20;
let highScore = 0;
let correctNumber = Math.trunc(Math.random() * 20 + 1);

checkButton.addEventListener("click", function()
{
    // take the guessed number from user input
    const guessedNumber = +inputGuess.value;

    // if user doesn't input any value
    if(!guessedNumber)
        message.textContent = "Please Enter a Number!!";

    // if user guessed number is < than actual number
    else if(guessedNumber < correctNumber)
    {
        if(score > 1)
        {
            score--;
            attempts.textContent = `${score}`;
            message.textContent = "📉 Your Guessed Number is Too Low!";
        }

        else
        {
            attempts.textContent = "0";
            message.textContent = "You Lost The Game!!";
        }
    }

    // if user guessed number is > than actual number
    else if(guessedNumber > correctNumber)
    {
        if(score > 1)
        {
            score--;
            attempts.textContent = `${score}`;
            message.textContent = "📈 Your Guessed Number is Too High!";
        }

        else
        {
            attempts.textContent = "0";
            message.textContent = "You Lost The Game!!";
        }

    }

    // // if user guessed actual number
    else
    {
        if(score > highScore)
        {
            highScore = score;
            highestScore.textContent = `${highScore}`;
            correctGuess.textContent = `${correctNumber}`;
        }

        message.textContent = "✅ You Guess Correct Number!";

        // change both check and again button color and body color also when user guess correct number
        checkButton.style.background = againButton.style.background = "#29a31c";

        document.body.style.background = "#29a31c";
    }
})

againButton.addEventListener("click", function()
{
    score = 20;
    correctNumber = Math.trunc(Math.random() * 20 + 1);

    attempts.textContent = `${score}`;
    correctGuess.textContent = "?";

    checkButton.style.background = againButton.style.background = "#f97516";

    document.body.style.background = "#f97516";
    message.textContent = "Start Guessing!!";

    inputGuess.value = '';
})