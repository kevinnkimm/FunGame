function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    let randomChoice = Math.floor(Math.random()*choices.length) + 1

    if (randomChoice == 1) {
        return "Rock";
    }
    else if (randomChoice == 2) {
        return "Paper";
    }
    else if (randomChoice == 3) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return "Paper beats rock, you lose!";
    } else if (playerSelection == computerSelection) {
        return "Draw";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return "Rock beats scissors, you win!";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "Scissors beats paper, you lose!";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return "Paper beats rock, you win!";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "Rock beats scissors, you win!";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "Scissors beats paper, you win!";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return "Rock beats scissors, you lose!";
    }
}


function game(playRound) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")){
            computerScore++; 
        }
    }
    if (playerScore < computerScore) {
        console.log("You lose the game");
    } if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore === computerScore) {
        console.log("The game was a tie");
    }
    console.log("The player final score is: " + playerScore);
    console.log("The computer final score is: " + computerScore);
}   

game(playRound)