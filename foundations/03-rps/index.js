function getComputerChoice() {
  let comp = Math.floor(Math.random() * 3);

  switch (comp) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }
}

function getHumanChoice() {
  let user = prompt("Choice?");
  return user;
}

function playGame(rounds) {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "Draw!";
    } else if (
      // Define only the human's winning scenarios.
      // If none of these match (and it's not a draw), the computer automatically wins.
      // Simplifies logic by handling human victories first, instead of checking all outcomes.
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      return `You won! ${humanChoice} beats ${computerChoice}`;
    } else {
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }

  for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    const result = playRound(humanSelection, computerSelection);
    console.log(`Round ${i + 1}: ${result}`); // Shows current round and its results

    if (result.includes("won")) {
      humanScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  if (humanScore > computerScore) {
    console.log(
      `You won the game! Final score: ${humanScore}-${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lost the game! Final score: ${humanScore}-${computerScore}`
    );
  } else {
    console.log(`It's a draw! Final score: ${humanScore}-${computerScore}`);
  }
}

playGame(5);
