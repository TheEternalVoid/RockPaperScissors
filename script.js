let playerScore = 0;
let computerScore = 0;

// Defines a function which randomly selects a number between 0-2 then switches a return based on that number for computer choice.
function computerSelection() {
    let computerChoice = Math.floor(Math.random() * 3)
    switch (computerChoice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie"    
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return playerScore++
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return computerScore++
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return playerScore++
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return computerScore++
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return playerScore++
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return computerScore++
    } else {
        return "Please enter rock, paper, or scissors"
    }
}

function game() {
    //generate player selection
    //let playerGameChoice = playerSelection();
    //generate computer selection
    //let computerGameChoice = computerSelection();
    //round logic
    console.log(playRound(playerGameChoice, computerGameChoice));
    
}

const buttons = document.querySelectorAll('button');
const score = document.querySelector('div');
const winner = document.querySelector('#winner');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerGameChoice = computerSelection();
        let gameResult = playRound(button.id, computerGameChoice);
        score.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`
        
        if (playerScore == 5 || computerScore == 5) {
            if (playerScore == 5) {
                let winningPlayer = "Player"
                winner.textContent = `The winning player is ${winningPlayer}`
            } else {
                let winningPlayer = "Computer"
                winner.textContent = `The winning player is ${winningPlayer}`
            }

        }
        
        return gameResult;
    });
});


