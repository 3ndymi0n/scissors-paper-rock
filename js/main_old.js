const MOVES = ["scissors", "paper", "rock"];
const RULES = {
  paper: "rock",
  scissors: "paper",
  rock: "scissors",
};
const BUTTONS = document.querySelectorAll('a');

BUTTONS.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.id == "new_game") {
      game();
    }else if (button.id == "reset") {
      console.log("titties");
    }
  });
})

function computerPlay() {
  return MOVES[Math.floor(Math.random() * MOVES.length)];
}

function playerPlay() {
  const PLAYER_CONTROLS = document.querySelectorAll('.play_button');
  let play = "";

  PLAYER_CONTROLS.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.id == "p-scissors") {
        play == "scissors";
      }else if(button.id == "p-paper") {
        play == "paper";
      }else if(button.id == "p-rock") {
        play == "rock";
      }
    })
  })
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

// Need to refactor code to be driven from player input rather than a control loop.