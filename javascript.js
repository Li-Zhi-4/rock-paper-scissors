/**
 * Rock Paper Scissors (rps)
 * 
 * Create a getComputerChoice function
 *      Function takes no parameters
 *      Function returns a random rock, paper, or scissors
 *          Generate a random number from 0 to 2 (0, 1, or 2)
 *          If 0, return "rock"
 *          If 1, return paper
 *          If 2, return scissors
 *      
 * Create a playRound function
 *      Function takes two parameters
 *          playerSelection - string, player's choice of RPS in any case
 *          computerSelection - string, takes getComputerChoice output
 *      Set playerSelection to lowercase.
 *      If playerSelection equals computerSelection, return "A tie!"
 *          Else, Switch(computerSelection)
 *              rock, if player chose paper, return "You win! Paper beats Rock."
 *                  else, return "You lose! Rock beats Scissors."
 *              paper, if player chose scissors, return "You win! Scissors beats Paper."
 *                  else, return "You lose! Paper beats Rock."
 *              scissors, if player chose rock, return "You win! Rock beats Scissors."
 *                  else, return "You lose! Scissors beats Paper."
 *      
 */

/**
 * Returns a randomly generated rock, paper, or scissors.
 * 
 * @returns {string} Randomly generated output for rock paper scissors.
 */
function getComputerChoice() {
    let computerChoice = Math.floor( Math.random() * 3 );     // Generates random number between 0 and 2
    switch (computerChoice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    // code here
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

console.log(getComputerChoice());