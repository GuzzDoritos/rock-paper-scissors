/* Define Computer's choice in the game
Create the computerChoice function
Assign a random integer between 1, 2 and 3 to variable randomChoice (each number represents a choice)
If it's 1, then return 'rock' as the choice;
Otherwise, in case it's 2, then return 'paper' as the choice;
But in the event it isn't even 2, then return 'scissors' as the choice
*/

function getComputerChoice () {
    randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1) {
        return 'rock';
    } else if (randomChoice == 2) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

/* Get user's choice in the game 
Create the getPlayerChoice function
Prompt the user to input their choice from three options ('rock', 'paper', 'scissors')
Store the text input to playerChoice
Make playerChoice spring lowercase so the check is case-insensitive
return playerChoice
*/

function getPlayerChoice() {
    playerChoice = prompt("Welcome to the Rock, Paper and Scissors game! You'll be playing against the computer.\nPlease, choose between 'rock', 'paper' or 'scissors'.");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

// Initialize variables to keep track of player and computer scores

let playerScore = 0;
let computerScore = 0;

