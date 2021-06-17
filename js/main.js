const MOVES = ["scissors", "paper", "rock"];
const RULES = {
  paper: "rock",
  scissors: "paper",
  rock: "scissors",
};

function computerPlay() {
  return MOVES[Math.floor(Math.random() * MOVES.length)];
}

function playerPlay() {
  let play = prompt("scissors, paper or rock?");
  return play;
}

function gameRound(playerTurn, computerTurn) {
    // Play one iteration of the game.
  if (RULES[playerTurn] == computerTurn) {
    return "player";
  } else if (RULES[computerTurn] == playerTurn) {
    return "computer";
  } else {
    return "draw";
  }
}

function game() {
    // play 5 rounds of the game, highest score wins.
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let round = gameRound(playerPlay(), computerPlay());
    if (round == "draw") {
      console.log("Draw");
    } else if (round == "player") {
      console.log("Player wins round!");
      playerScore++;
    } else if (round == "computer") {
      console.log("Computer wins round!");
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    alert("Player Wins! " + playerScore + "/" + computerScore);
  } else {
    alert("Computer Wins! " + computerScore + "/" + playerScore);
  }
}



