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

        //This is terrible but I don't know how to do it better without arrays
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