/* Define Computer's choice in the game
Create the computerChoice function
Assign a random integer between 1, 2 and 3 to variable randomChoice (each number represents a choice)
If it's 1, then return 'rock' as the choice;
Otherwise, in case it's 2, then return 'paper' as the choice;
But in the event it isn't even 2, then return 'scissors' as the choice
*/

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
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
    let playerChoice = prompt("Welcome to the Rock, Paper and Scissors game! You'll be playing against the computer.\nChoose between 'rock', 'paper' or 'scissors'.\nPlease type the options exactly as they're written.\nRefresh page if it breaks :3");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playGame() {

    let playerScore = 0;
    let computerScore = 0;

    function playRound() {
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        console.log("You played: " + playerChoice);
        console.log("Computer played: " + computerChoice);
        if (computerChoice == 'rock' && playerChoice == 'paper') { console.log('You win! Paper beats rock.'); playerScore++ }
        else if (computerChoice == 'paper' && playerChoice == 'rock') { console.log('You lose! Paper beats rock.'); computerScore++ }
        else if (computerChoice == 'scissors' && playerChoice == 'rock') { console.log('You win! Rock beats scissors.'); playerScore++ }
        else if (computerChoice == 'rock' && playerChoice == 'scissors') { console.log('You lose! Rock beats scissors.'); computerScore++ }
        else if (computerChoice == 'paper' && playerChoice == 'scissors') { console.log('You win! Scissors beats paper.'); playerScore++ }
        else if (computerChoice == 'scissors' && playerChoice == 'paper') { console.log('You lose! Scissors beats paper.'); computerScore++ }
        else if (computerChoice === playerChoice) { console.log("It's a tie!") }


    }

    for (let i = 0; i <= 5; i++) {

        console.log("------Round " + i + "-------");
        playRound();

    }

    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore == computerScore) {
        console.log("It's a tie!");
    }

}

playGame();