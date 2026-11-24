// Step 2: computer choice
function getComputerChoice() {
  const random = Math.random(); // call once, reuse the value

  if (random < 1 / 3) {
    return "rock";
  } else if (random < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 3: human choice
function getHumanChoice() {
  while (true) {
    const choice = prompt("Rock, paper or scissors?");

    if (choice === null) {
      return null;
    }

    const normalizedChoice = choice.trim().toLowerCase();
    if (
      normalizedChoice === "rock" ||
      normalizedChoice === "paper" ||
      normalizedChoice === "scissors"
    ) {
      return normalizedChoice;
    }

    alert("Please enter rock, paper, or scissors.");
  }
}

// Step 6: play the entire game
function playGame() {
  // Step 4 (moved inside playGame in step 6): scores
  let humanScore = 0;
  let computerScore = 0;

  // Step 5: play a single round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  // Play 5 rounds, getting fresh choices each time
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    if (humanSelection === null) {
      console.log("Game cancelled.");
      return;
    }

    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Declare the winner
  console.log(`Final score: You ${humanScore} - ${computerScore} Computer`);
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();
