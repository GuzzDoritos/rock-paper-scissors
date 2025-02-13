const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const roundDisplay = document.querySelector('#round-message');
const roundNumber = document.querySelector("#round-number");
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

const shapes = [ 
    {
        name: 'Rock',
        value: 1
    },

    {
        name: 'Paper',
        value: 2
    },

    {
        name: 'Scissors',
        value: 3
    } 
]

let playerScore = 0;
let computerScore = 0;
let round = 0;

// returns 1, 2 or 3
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * shapes.length);
    let choice = shapes[randomChoice].value;
    return choice;
}

function pickWinner(playerChoice, computerChoice) {
    let winner = (((computerChoice - playerChoice) % 3) + 3) % 3;
    return winner;
}

function playRound(playerChoice) {
    let roundMessage = "";
    let computerChoice = getComputerChoice();

    const computerChoiceName = shapes[computerChoice - 1].name;
    const playerChoiceName = shapes[playerChoice - 1].name;

    console.log("Computer: " + computerChoiceName);
    console.log(playerChoiceName);
    
    const whoWon = pickWinner(playerChoice, computerChoice);
    console.log(whoWon);

    switch (whoWon) {
        case 0:
            roundMessage = "It's a tie!";
            break;
        case 1:
            roundMessage = `You lose! ${computerChoiceName} ${computerChoiceName == "Scissors" ? "beat" : "beats"} ${playerChoiceName.toLocaleLowerCase()}.`
            computerScore++
            break;
        case 2:
            roundMessage = `You win! ${playerChoiceName} ${playerChoiceName == "Scissors" ? "beat" : "beats"} ${computerChoiceName.toLocaleLowerCase()}.`
            playerScore++
            break;
    }

    roundDisplay.textContent = `Computer played ${computerChoiceName.toLocaleLowerCase()}. ${roundMessage}`;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    round++;
    roundNumber.textContent = round; 
}

function checkRound(playerChoice) {
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
        playRound(playerChoice);
    }
}


rockBtn.addEventListener('click', () => {
    checkRound(1);
})
paperBtn.addEventListener('click', () => {
    checkRound(2);
})
scissorsBtn.addEventListener('click', () => {
    checkRound(3);
})