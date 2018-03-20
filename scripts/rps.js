const SCORE = [0, 0];

function computerPlay() {
  // assigns a random numbers 0-2 to represent the computer's choice.
  let computerSelection = Math.floor(Math.random() * 3);
  return ["Rock", "Paper", "Scissors"][computerSelection];
}

function playRound(playerSelection, computerSelection) {
	// fix the casing of the inputs and removes weird characters
	playerSelection = playerSelection[0].toUpperCase() +
			     playerSelection.substr(1)
					    .toLowerCase()
					    .replace(/\W|\d/g,"");
  
  const CHOICES = ["Rock", "Paper", "Scissors"];
  
  // checks if the player has entered a valid choice.
  if (CHOICES.indexOf(playerSelection) === -1) {
  	return `Please enter "Rock", "Paper" or "Scissors"`;
  }
                    
  // Runs when it is a draw.
  if (playerSelection === computerSelection) {
    return `It is a draw! Score: ${SCORE[0]}-${SCORE[1]}`;

  // Runs when the player has won the round.
  } else if (
    playerSelection === "Rock"     && computerSelection === "Scissors" ||
    playerSelection === "Paper"    && computerSelection === "Rock"     ||
    playerSelection === "Scissors" && computerSelection === "Paper"      ) {
    SCORE[0]++;
    return `You win! ${playerSelection} beats ${computerSelection}! Score: ${SCORE[0]}-${SCORE[1]}`;
	  
  // Runs when the computer has won the round.
  } else {
    SCORE[1]++;
    return `You lose! ${computerSelection} beats ${playerSelection}! Score: ${SCORE[0]}-${SCORE[1]}`;
  }
}

// best out of 5 matches
while (SCORE[0] < 3 && SCORE[1] < 3) {
  const playerSelection = window.prompt("Rock, Paper, or Scissors?", "rock")
  const computerSelection = computerPlay();

  console.log(playRound(playerSelection, computerSelection))
}

// final winner declaration.
SCORE[0]>SCORE[1] ? 
console.log("YOU ARE THE CHAMPION!") : 
console.log("You lost. Come back when you've become stronger.");
