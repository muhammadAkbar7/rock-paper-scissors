// Function to generate computer's choice
function makeComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    // Convert both selections to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Define the possible outcomes
    var outcomes = {
        "rock": { "rock": "It's a tie!", "paper": "Computer wins!", "scissors": "Player wins!" },
        "paper": { "rock": "Player wins!", "paper": "It's a tie!", "scissors": "Computer wins!" },
        "scissors": { "rock": "Computer wins!", "paper": "Player wins!", "scissors": "It's a tie!" }
    };

    // Check if the selections are valid
    if (!(playerSelection in outcomes) || !(computerSelection in outcomes)) {
        return "Invalid selection. Please choose rock, paper, or scissors.";
    }

    // Determine the result based on the selections
    return outcomes[playerSelection][computerSelection];
}

// Function to play the game
function playGame() {
    var playerScore = 0;
    var computerScore = 0;

    for (var i = 0; i < 5; i++) {
        // Get user input for player's choice
        var playerChoice = prompt("Round " + (i + 1) + ": Please choose rock, paper, or scissors:");

        // Generate computer's choice
        var computerChoice = makeComputerChoice();

        // Play a round and get the result
        var result = playRound(playerChoice, computerChoice);

        // Display round result
        console.log("Round " + (i + 1) + ": Player chose " + playerChoice + ", Computer chose " + computerChoice + ". Result: " + result);

        // Update scores based on the result
        if (result.includes("Player wins")) {
            playerScore++;
        } else if (result.includes("Computer wins")) {
            computerScore++;
        }
    }

    // Determine the winner based on the scores
    var winner;
    if (playerScore > computerScore) {
        winner = "Player";
    } else if (playerScore < computerScore) {
        winner = "Computer";
    } else {
        winner = "It's a tie";
    }

    // Display final scores and winner
    console.log("Final Score:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    console.log("Winner: " + winner);
}

// Call the playGame function to start the game
playGame();