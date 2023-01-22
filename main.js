const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}
function decideWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return 0;
    }
    else if (
        (playerChoice == "rock" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "rock"))
    {
        return -1;
    } else {
        return 1;
    }
}
const scores = document.querySelector('#scores');
const decision = document.querySelector('#decision');
let playerWins = 0;
let computerWins = 0;
function playHand(move) {
    let winner = decideWinner(move, getComputerChoice());
    scores.textContent = `Player: ${playerWins}    Computer: ${computerWins}`;
    if (winner == 0) {
        decision.textContent = "you tied";
    }
    if (winner == 1) {
        decision.textContent = "you won";
        playerWins++;
    }
    if (winner == -1) {
        decision.textContent = "you lost";
        computerWins++;
    }
    if (playerWins == 5) {
        decision.textContent = "player wins";
        playerWins = 0;
        computerWins = 0;
    }
    else if (computerWins == 5) {
        decision.textContent = "computer wins";
        playerWins = 0;
        computerWins = 0;
    }
}