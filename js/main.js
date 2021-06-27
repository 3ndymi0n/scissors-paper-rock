const MOVES = ["scissors", "paper", "rock"];
const RULES = {
  paper: "rock",
  scissors: "paper",
  rock: "scissors",
};

let playerScore = 0;
let computerScore = 0;

const newGame = document.getElementById('new_game');
newGame.addEventListener('click', () => {
    resetGame();
});

const playerAction = document.getElementsByClassName("play_button");
Array.from(playerAction).forEach(function(e) {
    e.addEventListener('click', playerTurn);
});

function resetGame(){
    playerScore = computerScore = 0;
    location.reload();
};

function playerTurn() {
    let pTurn = '';
    if(this.id == 'p-scissors'){
        pTurn = 'scissors';
    }else if(this.id == 'p-rock'){
        pTurn = 'rock';
    }else if(this.id == 'p-paper'){
        pTurn = 'paper';
    }else{
        console.log("something went wrong");
    }
    game(pTurn);
}

function computerPlay() {
  return MOVES[Math.floor(Math.random() * MOVES.length)];
}

function gameRound(playerTurn, computerTurn) {
    // Play one iteration of the game.
  if (RULES[playerTurn] == computerTurn) {
    return "player";
  }else if (RULES[computerTurn] == playerTurn) {
    return "computer";
  }else {
    return "draw";
  }
}

function updateTurnHistory(participant, currentTurn, outcome) {
    // Select player UI elements
    let playerTurnHistory = document.getElementById('player_turns');
    let playerScoreUI = document.getElementById('player_score').firstChild;
    
    // Select computer UI elements
    let computerTurnHistory = document.getElementById('computer_turns');
    let computerScoreUI = document.getElementById('computer_score').firstChild;

    // Prepare div elements for insert.
    let turn = document.createElement('div');

    // determine required div color class.
    turn.classList.add('icon_display')
    if(outcome == 'win') {
        turn.classList.add("win_turn");
    }else if( outcome == 'lose') {
        turn.classList.add("lose_turn");
    }else {
        turn.classList.add("draw_turn");
    }

    //determine required div icon class.
    if(currentTurn == "scissors") {
        turn.classList.add("scissor_turn");
    }else if(currentTurn == "paper") {
        turn.classList.add("paper_turn");
    }else if(currentTurn == "rock") {
        turn.classList.add("rock_turn");
    }

    // Apply UI elements to appropriate player.
    if(participant == "player") {
        playerTurnHistory.insertBefore(turn, playerTurnHistory.firstChild)
        playerScoreUI.innerHTML = '<p>Current Score: ' + playerScore + '</p>';
    }else if(participant == "computer") {
        computerTurnHistory.insertBefore(turn, computerTurnHistory.firstChild);
        computerScoreUI.innerHTML = '<p>Current Score: ' + computerScore + '</p>';
    }

}

function game(playerTurn) {
    let computerTurn = computerPlay();
    let roundWinner = gameRound(playerTurn, computerTurn);
    //UI Notifications section.
    let notificationArea = document.getElementById('notifications');
    let notify = document.createElement('div');

    let gameComplete = document.getElementById('game_completed')
    let winner = document.getElementById('winner_notice')

    notify.classList.add('notify_display')

    if(roundWinner == 'player'){
        playerScore += 1;
        updateTurnHistory("player", playerTurn, "win");
        updateTurnHistory("computer", computerTurn, "lose");
        notify.innerHTML = '<p>You win this round. Well done!</p>'
        notificationArea.insertBefore(notify, notificationArea.firstChild);
    }else if (roundWinner == 'computer'){
        computerScore += 1;
        updateTurnHistory("computer", computerTurn, "win");
        updateTurnHistory("player", playerTurn, "lose");
        notify.innerHTML = '<p>The computer has beaten you! So sad.</p>'
        notificationArea.insertBefore(notify, notificationArea.firstChild);
    }else {
        updateTurnHistory("computer", computerTurn, "draw");
        updateTurnHistory("player", playerTurn, "draw");
        notify.innerHTML = '<p>A draw! Really?</p>'
        notificationArea.insertBefore(notify, notificationArea.firstChild);
    }
    
    if(playerScore >= 5) {
        gameComplete.classList.add('game_complete_f');
        winner.innerHTML = "You've Won!";
    }else if(computerScore >= 5) {
        gameComplete.classList.add('game_complete_f');
        winner.innerHTML = "The Computer beat you this time...";
    }
};