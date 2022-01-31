// Defines a function which converts to all lower case for case-insensitivity Then returns for playRound.
function playerSelection() {
    let playerChoice = window.prompt("What is your choice?").toLowerCase();
    return playerChoice;
}

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
        console.log("It's a tie");    
    } else {
        console.log("why no tie??");
    }
}

function game() {
    //generate player selection
    let playerGameChoice = playerSelection();
    //generate computer selection
    let computerGameChoice = computerSelection();
    //round logic
    playRound(playerGameChoice, computerGameChoice);
}


//Execute game
game();
