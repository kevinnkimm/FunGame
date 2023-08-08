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

function singleRound(playerSelection, computerSelection) {
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

console.log(singleRound("paper", "ROCK"))
