const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const roundDisplay = document.querySelector('#round-message');
const roundNumber = document.querySelector("#round-number");
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;
let round = 0;

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

function playRound(playerChoice) {
    let roundMessage = "";
    let computerChoice = getComputerChoice();

    //This is terrible but I don't know how to do it better without arrays
    if (computerChoice == 'rock' && playerChoice == 'paper') { roundMessage = 'You win! Paper beats rock.'; playerScore++ }
    else if (computerChoice == 'paper' && playerChoice == 'rock') { roundMessage = 'You lose! Paper beats rock.'; computerScore++ }
    else if (computerChoice == 'scissors' && playerChoice == 'rock') { roundMessage = 'You win! Rock beats scissors.'; playerScore++ }
    else if (computerChoice == 'rock' && playerChoice == 'scissors') { roundMessage = 'You lose! Rock beats scissors.'; computerScore++ }
    else if (computerChoice == 'paper' && playerChoice == 'scissors') { roundMessage = 'You win! Scissors beats paper.'; playerScore++ }
    else if (computerChoice == 'scissors' && playerChoice == 'paper') { roundMessage = 'You lose! Scissors beats paper.'; computerScore++ }
    else if (computerChoice === playerChoice) { roundMessage = "It's a tie!" }

    roundDisplay.textContent = roundMessage;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    round++;
    roundNumber.textContent = round; 
}

function checkRound(choice) {
    if (round === 5 ) {
        if (playerScore > computerScore) {
            roundDisplay.textContent = "Game is over. You win with " + playerScore + " points!";
            playerScore = 0;
            computerScore = 0;
            round = 0;
        } else if (computerScore > playerScore) {
            roundDisplay.textContent = "Game is over. Computer wins with " + computerScore + " points.";
            playerScore = 0;
            computerScore = 0;
            round = 0;            
        } else if (computerScore === playerScore) {
            roundDisplay.textContent = "Game is over. It's a tie!";
            playerScore = 0;
            computerScore = 0;
            round = 0;   
        }
    } else {
        playRound(choice);
    }
}


rockBtn.addEventListener('click', () => {
    checkRound("rock");
})
paperBtn.addEventListener('click', () => {
    checkRound("paper");
})
scissorsBtn.addEventListener('click', () => {
    checkRound("scissors");
})