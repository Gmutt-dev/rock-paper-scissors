// function to randomly return rock, paper or scissors
function getComputerChoice() {
    let randomNum = Math.random()
    
    if (randomNum < 0.33) return "rock";
    else if (randomNum > 0.66) return "scissors";
    else return "paper";
}

// function to get the user's choice between rock, paper and scissors
function getHumanChoice() {
    return prompt("Please enter your choice (rock/paper/scissors)");
}

//declare the players' score initializing with 0
let computerScore = 0;
let humanScore = 0;

//get the computer and user's choices
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//logic to play a single round
function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase(); //human's choice to lowercase for case insensitivity of user input
    
    // Determine if it's a draw and return msg
    if (humanChoice == computerChoice) {
        return "It's a draw!" }
    // else determine if user wins with success message returned
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == 'rock') || (humanChoice =="scissors" && computerChoice == "paper")) {
        humanScore = humanScore++;
        return `You win ${humanChoice} beats ${computerChoice}`; }
    //else user loses with failure message returned
    else {
        computerScore = computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }

}



console.log(playRound(humanSelection, computerSelection));