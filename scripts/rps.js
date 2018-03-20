function computerPlay() {
  // assigns a random numbers 0-2 to represent the computer's choice.
  let computerSelection = Math.floor(Math.random() * 3);
  return ["Rock", "Paper", "Scissors"][computerSelection];
}

function playRound(playerSelection, computerSelection) {
	// fix the casing of the inputs
	playerSelection = playerSelection[0].toUpperCase() +
  									playerSelection.substr(1).toLowerCase().replace(/\W|\d/g,"");
  
  const CHOICES = ["Rock", "Paper", "Scissors"];
  
  if (CHOICES.indexOf(playerSelection) === -1) {
  	return `Please enter "Rock", "Paper" or "Scissors"`;
  }
                    
  if (playerSelection === computerSelection) {
    return `It is a draw!`;
  } else if (
    playerSelection === "Rock" && computerSelection === "Paper" ||
    playerSelection === "Paper" && computerSelection === "Scissors" ||
    playerSelection === "Scissors" && computerSelection === "Rock") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

const playerSelection = 'rocK'
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection))


