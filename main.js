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

function playHand(move) {
    let winner = decideWinner(move, getComputerChoice());
    return winner;
}

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        let move = "rock";
        /*while(move == null){
            //move = prompt("Pick a move: ");
            if (move != "rock" || move != "scissors" || move != "paper") {
                move = null;
                console.log("play a valid move");
            }
        }*/
        let winner = playHand(move);
        if (winner == 0) {
            console.log("you tied");
        }
        if (winner == 1) {
            console.log("you won");
            playerWins++;
        }
        if (winner == -1) {
            console.log("you lost");
            computerWins++;
        }
    }
    if (playerWins == 5) {
        console.log("Player wins!");
    }
    else if (computerWins == 5) {
        console.log("Computer wins!");
    }
}
playGame();